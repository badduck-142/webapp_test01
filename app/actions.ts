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

// 2. ฟังก์ชันแจ้งซ่อม (Create Ticket)
export async function createTicket(formData: FormData) {
  const issue = formData.get('issue') as string
  const department = formData.get('department') as string
  const priority = formData.get('priority') as string

  // จำลองว่า User ID 1 (พยาบาล) เป็นคนแจ้ง
  // (เดี๋ยวอนาคตเราค่อยเปลี่ยนตรงนี้ให้ดึงจาก Session จริง)
  const userId = 2

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