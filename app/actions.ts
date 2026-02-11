'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

// 1. ฟังก์ชันดึงรายการซ่อมทั้งหมด (สำหรับแสดงในตาราง)
export async function getTickets() {
  try {
    const tickets = await prisma.ticket.findMany({
      orderBy: { createdAt: 'desc' }, // เรียงจากใหม่ไปเก่า
      include: {
        user: true, // ดึงข้อมูลคนแจ้ง (ชื่อ/แผนก) มาด้วย
      },
    })
    return tickets
  } catch (error) {
    console.error('Database Error:', error)
    return [] // ถ้าพัง ให้ส่งอาเรย์ว่างกลับไปก่อน
  }
}

import { getSession } from "@/lib/auth";

// ...

// 2. ฟังก์ชันแจ้งซ่อม (Create Ticket)
export async function createTicket(formData: FormData) {
  const issue = formData.get('issue') as string
  const department = formData.get('department') as string
  const priority = formData.get('priority') as string

  // ดึง User ID จาก Session จริง
  const session = await getSession();
  const userId = session?.userId;

  if (!userId) {
    throw new Error("Unauthorized");
  }

  await prisma.ticket.create({
    data: {
      title: issue,       // หัวข้อ/อาการเสีย
      department: department,
      priority: priority,
      status: 'PENDING',  // สถานะเริ่มต้น
      userId: userId,     // ผูกกับ User คนแรกที่เราสร้าง
    },
  })

  // สั่งให้หน้าเว็บรีเฟรชข้อมูลใหม่ทันที
  revalidatePath('/it-service')
}

// app/actions.ts (เพิ่มต่อท้าย)

// ฟังก์ชันสำหรับอัปเดตสถานะ (Admin กดรับงาน/ปิดงาน)
export async function updateTicketStatus(ticketId: number, newStatus: string) {
  await prisma.ticket.update({
    where: { id: ticketId },
    data: { status: newStatus },
  })

  revalidatePath('/it-service')
}

// ฟังก์ชันลบใบงาน (เผื่อแจ้งผิด)
export async function deleteTicket(ticketId: number) {
  await prisma.ticket.delete({
    where: { id: ticketId }
  })

  revalidatePath('/it-service')
}

// ==========================================
// User Management Actions (Admin Only)
// ==========================================

// 5. ดึงข้อมูล User ทั้งหมด
export async function getUsers() {
  const session = await getSession()
  if (session?.role !== 'ADMIN') {
    return []
  }

  const users = await prisma.user.findMany({
    orderBy: { id: 'asc' },
  })
  return users
}

// 6. สร้าง User ใหม่
export async function createUser(formData: FormData) {
  const session = await getSession()
  if (session?.role !== 'ADMIN') {
    throw new Error("Unauthorized")
  }

  const username = formData.get('username') as string
  const password = formData.get('password') as string || '1234'
  const name = formData.get('name') as string
  const department = formData.get('department') as string
  const tel = formData.get('tel') as string
  const role = formData.get('role') as string // 'USER' | 'ADMIN'

  // Check if username exists
  const existingUser = await prisma.user.findUnique({
    where: { username }
  })

  if (existingUser) {
    return { error: 'Username already exists', success: false }
  }

  await prisma.user.create({
    data: {
      username,
      password, // TODO: Hash password
      name,
      department,
      tel,
      role
    }
  })

  revalidatePath('/admin/users')
  return { success: true, error: "" }
}

// 7. รีเซ็ตรหัสผ่าน
export async function resetPassword(userId: number) {
  const session = await getSession()
  if (session?.role !== 'ADMIN') {
    throw new Error("Unauthorized")
  }

  await prisma.user.update({
    where: { id: userId },
    data: { password: '1234' } // Default password
  })

  revalidatePath('/admin/users')
  return { success: true }
}

// 8. ลบผู้ใช้งาน
export async function deleteUser(userId: number) {
  const session = await getSession()
  if (session?.role !== 'ADMIN') {
    throw new Error("Unauthorized")
  }

  await prisma.user.delete({
    where: { id: userId }
  })

  revalidatePath('/admin/users')
  return { success: true }
}
