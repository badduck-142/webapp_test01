"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, User, Phone, Mail, FileText, CheckCircle2, AlertCircle } from "lucide-react"
import { sendComplaint, SendComplaintState } from "@/app/actions/send-complaint"

const initialState: SendComplaintState = {
    message: "",
    error: undefined,
    success: false
}

export default function ComplaintPage() {
    const [state, formAction, isPending] = useActionState(sendComplaint, initialState)

    if (state.success) {
        return (
            <div className="container mx-auto px-4 py-20">
                <div className="mx-auto max-w-md rounded-2xl bg-white p-8 text-center shadow-lg border border-teal-100">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-teal-50">
                        <CheckCircle2 className="h-10 w-10 text-teal-600" />
                    </div>
                    <h2 className="mb-2 text-2xl font-bold text-gray-800">ส่งเรื่องร้องเรียนสำเร็จ</h2>
                    <p className="mb-8 text-gray-600">
                        ขอบคุณสำหรับข้อมูล ทางโรงพยาบาลได้รับเรื่องของท่านแล้ว
                        และจะดำเนินการตรวจสอบต่อไป
                    </p>
                    <Button
                        className="bg-[#13cdbf] hover:bg-[#0f9f94] w-full text-white"
                        onClick={() => window.location.reload()}
                    >
                        เสร็จสิ้น
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-12 md:py-20">
            <div className="mx-auto max-w-2xl">
                {/* Header */}
                <div className="mb-10 text-center">
                    <h1 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
                        รับเรื่องร้องเรียน
                    </h1>
                    <div className="mx-auto h-1 w-20 rounded-full bg-[#13cdbf]"></div>
                    <p className="mt-4 text-gray-600">
                        ช่องทางสำหรับการแจ้งเรื่องร้องเรียน ข้อเสนอแนะ หรือติชมการให้บริการ
                    </p>
                    <p className="text-gray-600">เพื่อนำไปปรับปรุงและพัฒนาโรงพยาบาลให้ดียิ่งขึ้น</p>
                </div>

                {/* Form Card */}
                <div className="rounded-2xl bg-white p-6 shadow-xl shadow-teal-50/50 md:p-10 border border-gray-100">
                    {state.error && (
                        <div className="mb-6 flex items-center gap-2 rounded-lg bg-red-50 p-4 text-red-600">
                            <AlertCircle className="h-5 w-5" />
                            <p>{state.error}</p>
                        </div>
                    )}

                    <form action={formAction} className="space-y-6">
                        <div className="grid gap-6 md:grid-cols-2">
                            {/* Name Input */}
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-600 flex items-center gap-2">
                                    <User className="h-4 w-4 text-[#13cdbf]" />
                                    ชื่อ-นามสกุล
                                </label>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="ระบุชื่อ-นามสกุลของคุณ"
                                    required
                                    className="focus-visible:ring-[#13cdbf] text-gray-600"
                                />
                            </div>

                            {/* Contact Input */}
                            <div className="space-y-2">
                                <label htmlFor="contact" className="text-sm font-medium text-gray-600 flex items-center gap-2">
                                    <Phone className="h-4 w-4 text-[#13cdbf]" />
                                    เบอร์โทรศัพท์ / อีเมล
                                </label>
                                <Input
                                    id="contact"
                                    name="contact"
                                    placeholder="เช่น 0xx-xxx-xxxx"
                                    required
                                    className="focus-visible:ring-[#13cdbf] text-gray-600"
                                />
                            </div>
                        </div>

                        {/* Subject Input */}
                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-gray-600 flex items-center gap-2">
                                <Mail className="h-4 w-4 text-[#13cdbf]" />
                                หัวข้อเรื่อง
                            </label>
                            <Input
                                id="subject"
                                name="subject"
                                placeholder="เรื่องที่ต้องการร้องเรียน"
                                required
                                className="focus-visible:ring-[#13cdbf] text-gray-600"
                            />
                        </div>

                        {/* Message Textarea */}
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-600 flex items-center gap-2">
                                <FileText className="h-4 w-4 text-[#13cdbf]" />
                                รายละเอียด
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#13cdbf] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-gray-600"
                                placeholder="อธิบายรายละเอียดของปัญหา วันเวลา และสถานที่..."
                                required
                            ></textarea>
                        </div>

                        <div className="pt-4">
                            <Button
                                type="submit"
                                className="w-full bg-[#13cdbf] text-lg font-medium hover:bg-[#0f9f94] h-12"
                                disabled={isPending}
                            >
                                {isPending ? (
                                    "กำลังส่งข้อมูล..."
                                ) : (
                                    <span className="flex items-center gap-2 text-white">
                                        ส่งเรื่องร้องเรียน <Send className="h-5 w-5" />
                                    </span>
                                )}
                            </Button>
                        </div>
                    </form>
                </div>

                <div className="mt-8 text-center text-sm text-gray-500">
                    <p>ข้อมูลของท่านจะถูกเก็บเป็นความลับและใช้เพื่อการปรับปรุงการบริการเท่านั้น</p>
                </div>
            </div>
        </div>
    )
}
