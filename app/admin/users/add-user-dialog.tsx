"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { createUser } from "@/app/actions"

export function AddUserDialog() {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    async function handleSubmit(formData: FormData) {
        setLoading(true)
        setError("")

        try {
            const result = await createUser(formData)
            if (result.error) {
                setError(result.error)
            } else {
                setOpen(false)
                // Ideally, we should reset the form here or use useActionState if we were using it directly
            }
        } catch (e) {
            setError("Failed to create user")
        } finally {
            setLoading(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="bg-teal-600 hover:bg-teal-700">
                    <Plus className="mr-2 h-4 w-4" /> เพิ่มผู้ใช้งาน
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white">
                <DialogHeader>
                    <DialogTitle>เพิ่มผู้ใช้งานใหม่</DialogTitle>
                    <DialogDescription>
                        กรอกข้อมูลเพื่อสร้างบัญชีผู้ใช้งานใหม่ รหัสผ่านเริ่มต้นคือ "1234"
                    </DialogDescription>
                </DialogHeader>
                <form action={handleSubmit} className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input id="username" name="username" className="col-span-3" required />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="password" className="text-right">
                            Password
                        </Label>
                        <Input id="password" name="password" defaultValue="1234" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            ชื่อ-สกุล
                        </Label>
                        <Input id="name" name="name" className="col-span-3" required />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="department" className="text-right">
                            แผนก
                        </Label>
                        <Input id="department" name="department" className="col-span-3" required />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="tel" className="text-right">
                            เบอร์โทร
                        </Label>
                        <Input id="tel" name="tel" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="role" className="text-right">
                            สิทธิ์
                        </Label>
                        <Select name="role" defaultValue="USER">
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Select a role" />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="USER">User (ผู้แจ้ง)</SelectItem>
                                <SelectItem value="ADMIN">Admin (เจ้าหน้าที่ IT)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                    <DialogFooter>
                        <Button type="submit" disabled={loading} className="bg-teal-600 hover:bg-teal-700 text-white">
                            {loading ? "กำลังบันทึก..." : "บันทึกข้อมูล"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
