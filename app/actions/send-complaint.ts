"use server"

import nodemailer from "nodemailer"

export type SendComplaintState = {
    success?: boolean
    error?: string
    message?: string
}

export async function sendComplaint(prevState: SendComplaintState, formData: FormData): Promise<SendComplaintState> {
    try {
        const name = formData.get("name") as string
        const contact = formData.get("contact") as string
        const subject = formData.get("subject") as string
        const message = formData.get("message") as string

        // Validate inputs
        if (!name || !contact || !subject || !message) {
            return { error: "กรุณากรอกข้อมูลให้ครบทุกช่อง" }
        }

        // Check if SMTP credentials are set
        if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.error("Missing SMTP credentials")
            return { error: "ระบบส่งอีเมลยังไม่พร้อมใช้งาน (Missing Credentials)" }
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || "587"),
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        })

        // Email content
        const mailOptions = {
            from: `"Hospital Complaint System" <${process.env.SMTP_USER}>`,
            to: "mxxnsnow@gmail.com",
            subject: `[เรื่องร้องเรียน] ${subject}`,
            html: `
                <h3>มีเรื่องร้องเรียนใหม่จากหน้าเว็บไซต์</h3>
                <p><strong>ชื่อผู้ส่ง:</strong> ${name}</p>
                <p><strong>ข้อมูลติดต่อ:</strong> ${contact}</p>
                <p><strong>หัวข้อ:</strong> ${subject}</p>
                <br/>
                <p><strong>รายละเอียด:</strong></p>
                <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border: 1px solid #ddd;">
                    ${message.replace(/\n/g, "<br/>")}
                </div>
                <br/>
                <hr/>
                <p style="font-size: 12px; color: #888;">อีเมลนี้ถูกส่งอัตโนมัติจากระบบรับเรื่องร้องเรียนโรงพยาบาล</p>
            `,
        }

        await transporter.sendMail(mailOptions)

        return { success: true, message: "ส่งเรื่องร้องเรียนเรียบร้อยแล้ว" }
    } catch (error) {
        console.error("Email sending error:", error)
        return { error: "เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาลองใหม่อีกครั้ง" }
    }
}
