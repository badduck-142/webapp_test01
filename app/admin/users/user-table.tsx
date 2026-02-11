"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/test-badge"
import { RefreshCw, Trash2, UserCog } from "lucide-react"
import { AddUserDialog } from "./add-user-dialog"
import { resetPassword, deleteUser } from "@/app/actions"
import { useState } from "react"

interface User {
    id: number
    username: string
    name: string
    department: string | null
    role: string
    tel: string | null
}

interface UserTableProps {
    initialUsers: User[]
}

export function UserTable({ initialUsers }: UserTableProps) {
    const [loadingId, setLoadingId] = useState<number | null>(null)

    async function handleResetPassword(userId: number) {
        if (!confirm("ต้องการรีเซ็ตรหัสผ่านเป็น '1234' ใช่หรือไม่?")) return

        setLoadingId(userId)
        try {
            await resetPassword(userId)
            alert("รีเซ็ตรหัสผ่านเรียบร้อยแล้ว")
        } catch (error) {
            alert("เกิดข้อผิดพลาดในการรีเซ็ตรหัสผ่าน")
        } finally {
            setLoadingId(null)
        }
    }

    async function handleDeleteUser(userId: number) {
        if (!confirm("ยืนยันการลบผู้ใช้งานนี้? การกระทำนี้ไม่สามารถย้อนกลับได้")) return

        setLoadingId(userId)
        try {
            await deleteUser(userId)
        } catch (error) {
            alert("เกิดข้อผิดพลาดในการลบผู้ใช้งาน")
        } finally {
            setLoadingId(null)
        }
    }

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold tracking-tight text-slate-800 flex items-center gap-2">
                    <UserCog className="h-6 w-6 text-teal-600" />
                    จัดการผู้ใช้งาน (User Management)
                </h2>
                <AddUserDialog />
            </div>

            <div className="rounded-md border bg-white shadow-sm">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-slate-50">
                            <TableHead className="w-[80px]">ID</TableHead>
                            <TableHead>Username</TableHead>
                            <TableHead>ชื่อ-สกุล</TableHead>
                            <TableHead>แผนก</TableHead>
                            <TableHead>เบอร์โทร</TableHead>
                            <TableHead>สิทธิ์</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {initialUsers.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell className="font-medium">{user.id}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.department || "-"}</TableCell>
                                <TableCell>{user.tel || "-"}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant={user.role === 'ADMIN' ? 'default' : 'secondary'}
                                        className={user.role === 'ADMIN' ? 'bg-teal-600 hover:bg-teal-700' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}
                                    >
                                        {user.role}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right space-x-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handleResetPassword(user.id)}
                                        disabled={loadingId === user.id}
                                        className="h-8 text-orange-600 hover:text-orange-700 hover:bg-orange-50 border-orange-200"
                                        title="Reset Password to '1234'"
                                    >
                                        <RefreshCw className={`h-4 w-4 ${loadingId === user.id ? 'animate-spin' : ''}`} />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handleDeleteUser(user.id)}
                                        disabled={loadingId === user.id}
                                        className="h-8 text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
                                        title="Delete User"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                        {initialUsers.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={7} className="h-24 text-center">
                                    ไม่พบข้อมูลผู้ใช้งาน
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
