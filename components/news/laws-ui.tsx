"use client"

import { useState } from "react"
import { FileText, Download } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

// Mock Data
const SAMPLE_PDF = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'

const LAWS_DATA = [
    {
        id: '1',
        title: 'พระราชบัญญัติข้อมูลข่าวสารของราชการ พ.ศ. 2540',
        date: '01 ม.ค. 2568',
        category: 'พรบ.',
        pdfUrl: SAMPLE_PDF,
    },
    {
        id: '2',
        title: 'ระเบียบกระทรวงสาธารณสุขว่าด้วยการรักษาจรรยาบรรณแห่งวิชาชีพของผู้ประกอบวิชาชีพเวชกรรม',
        date: '01 ม.ค. 2568',
        category: 'ระเบียบกระทรวง',
        pdfUrl: SAMPLE_PDF,
    },
    {
        id: '3',
        title: 'ประกาศกระทรวงสาธารณสุข เรื่อง การกำหนดประเภทและขอบเขตของการรักษาพยาบาล',
        date: '15 ธ.ค. 2567',
        category: 'ประกาศกระทรวง',
        pdfUrl: SAMPLE_PDF,
    },
    {
        id: '4',
        title: 'คู่มือการปฏิบัติงานตามพรบ.จัดซื้อจัดจ้างและการบริหารพัสดุภาครัฐ พ.ศ. 2560',
        date: '10 ธ.ค. 2567',
        category: 'คู่มือปฏิบัติงาน',
        pdfUrl: SAMPLE_PDF,
    },
    {
        id: '5',
        title: 'พระราชบัญญัติสถานพยาบาล พ.ศ. 2541 และที่แก้ไขเพิ่มเติม',
        date: '01 ธ.ค. 2567',
        category: 'พรบ.',
        pdfUrl: SAMPLE_PDF,
    },
    {
        id: '6',
        title: 'ระเบียบสำนักนายกรัฐมนตรีว่าด้วยงานสารบรรณ พ.ศ. 2526 และที่แก้ไขเพิ่มเติม',
        date: '20 พ.ย. 2567',
        category: 'ระเบียบสำนักนายกฯ',
        pdfUrl: SAMPLE_PDF,
    },
    {
        id: '7',
        title: 'เจตจำนงสุจริตของผู้บริหารโรงพยาบาลโนนคูณ',
        date: '01 ต.ค. 2568',
        category: 'นโยบาย',
        pdfUrl: SAMPLE_PDF,
    },
    {
        id: '8',
        title: 'ประมวลจริยธรรมข้าราชการพลเรือน',
        date: '01 ต.ค. 2567',
        category: 'จริยธรรม',
        pdfUrl: SAMPLE_PDF,
    },
]

export function LawsUI() {
    const [selectedPdf, setSelectedPdf] = useState<string | null>(null)
    const [selectedDocTitle, setSelectedDocTitle] = useState<string>("")

    const handleCardClick = (pdfUrl: string, title: string) => {
        setSelectedPdf(pdfUrl)
        setSelectedDocTitle(title)
    }

    return (
        <div className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {LAWS_DATA.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => handleCardClick(item.pdfUrl, item.title)}
                        className="group relative bg-white rounded-xl border border-slate-200 p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-teal-200 flex flex-col items-center text-center h-full"
                    >
                        {/* Icon */}
                        <div className="mb-4 p-4 rounded-full bg-red-50 group-hover:scale-110 transition-transform duration-300">
                            {/* Standard Red PDF Icon */}
                            <FileText className="w-12 h-12 text-red-500" />
                        </div>

                        {/* Category & Date */}
                        <div className="flex items-center gap-2 mb-3">
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-slate-500 border-slate-200">
                                {item.category}
                            </span>
                            <span className="text-xs text-slate-400">{item.date}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-sm font-semibold text-slate-700 group-hover:text-teal-600 transition-colors line-clamp-3 leading-relaxed">
                            {item.title}
                        </h3>
                    </div>
                ))}
            </div>

            {/* PDF Viewer Dialog */}
            <Dialog open={!!selectedPdf} onOpenChange={(open) => !open && setSelectedPdf(null)}>
                <DialogContent className="max-w-4xl h-[90vh] flex flex-col p-0 gap-0">
                    {/* Header */}
                    <DialogHeader className="px-6 py-4 border-b flex flex-row items-center justify-between space-y-0 bg-slate-50/50">
                        <div className="pr-8">
                            <DialogTitle className="text-base font-medium text-slate-700 line-clamp-1 text-left">
                                {selectedDocTitle}
                            </DialogTitle>
                        </div>
                        {/* Actions */}
                        <div className="flex items-center gap-2">
                            {selectedPdf && (
                                <Button asChild size="sm" variant="outline" className="text-teal-600 border-teal-200 hover:bg-teal-50">
                                    <a href={selectedPdf} download target="_blank" rel="noopener noreferrer">
                                        <Download className="w-4 h-4 mr-2" />
                                        Download
                                    </a>
                                </Button>
                            )}
                        </div>
                    </DialogHeader>

                    {/* Body: PDF Content */}
                    <div className="flex-1 bg-slate-100 p-0 overflow-hidden relative">
                        {selectedPdf ? (
                            <iframe
                                src={selectedPdf}
                                className="w-full h-full border-0"
                                title="PDF Viewer"
                            />
                        ) : (
                            <div className="flex items-center justify-center h-full text-slate-400">
                                No PDF loaded
                            </div>
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
