"use client"

import { useState } from "react"
import { FileText, Download, X } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

// Mock Data
const SAMPLE_PDF = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'

const PROCUREMENT_DATA = [
    {
        id: '1',
        title: 'ประกาศประกวดราคาจ้างเหมาบริการรักษาความปลอดภัย ประจำปีงบประมาณ 2568',
        date: '25 ม.ค. 2568',
        category: 'ราคากลาง',
        pdfUrl: SAMPLE_PDF,
    },
    {
        id: '2',
        title: 'ประกาศผู้ชนะการเสนอราคา จ้างเหมาบริการล้างทำความสะอาดเครื่องปรับอากาศ',
        date: '20 ม.ค. 2568',
        category: 'ประกาศผู้ชนะ',
        pdfUrl: SAMPLE_PDF,
    },
    {
        id: '3',
        title: 'ตารางแสดงวงเงินงบประมาณที่ได้รับจัดสรรและราคากลาง (ราคาอ้างอิง) ในการจัดซื้อเวชภัณฑ์ยา',
        date: '15 ม.ค. 2568',
        category: 'ราคากลาง',
        pdfUrl: SAMPLE_PDF,
    },
    {
        id: '4',
        title: 'ประกาศประกวดราคาซื้อครุภัณฑ์การแพทย์ ด้วยวิธีประกวดราคาอิเล็กทรอนิกส์ (e-bidding)',
        date: '10 ม.ค. 2568',
        category: 'ประกาศเชิญชวน',
        pdfUrl: SAMPLE_PDF,
    },
    {
        id: '5',
        title: 'สรุปผลการดำเนินการจัดซื้อจัดจ้างในรอบเดือน ธันวาคม 2567',
        date: '05 ม.ค. 2568',
        category: 'สรุปผลการจัดซื้อจัดจ้าง',
        pdfUrl: SAMPLE_PDF,
    },
    {
        id: '6',
        title: 'แผนการจัดซื้อจัดจ้าง ประจำปีงบประมาณ 2568 (เพิ่มเติม)',
        date: '02 ม.ค. 2568',
        category: 'แผนจัดซื้อจัดจ้าง',
        pdfUrl: SAMPLE_PDF,
    },
    {
        id: '7',
        title: 'ประกาศราคากลางจ้างก่อสร้างอาคารพักขยะติดเชื้อ',
        date: '28 ธ.ค. 2567',
        category: 'ราคากลาง',
        pdfUrl: SAMPLE_PDF,
    },
    {
        id: '8',
        title: 'รายงานขอจ้างเหมาบริการกำจัดขยะมูลฝอยติดเชื้อ',
        date: '25 ธ.ค. 2567',
        category: 'รายงานการจ้าง',
        pdfUrl: SAMPLE_PDF,
    },
]

export function ProcurementUI() {
    const [selectedPdf, setSelectedPdf] = useState<string | null>(null)
    const [selectedDocTitle, setSelectedDocTitle] = useState<string>("")

    const handleCardClick = (pdfUrl: string, title: string) => {
        setSelectedPdf(pdfUrl)
        setSelectedDocTitle(title)
    }

    return (
        <div className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {PROCUREMENT_DATA.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => handleCardClick(item.pdfUrl, item.title)}
                        className="group relative bg-white rounded-xl border border-slate-200 p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-teal-200 flex flex-col items-center text-center h-full"
                    >
                        {/* Icon */}
                        <div className="mb-4 p-4 rounded-full bg-red-50 group-hover:scale-110 transition-transform duration-300">
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

                        {/* Hover overlay hint (optional, kept simple for now) */}
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
                            {/* Close button is automatically added by DialogContent but we can customize or let it be. 
                     Shadcn DialogContent usually has a Close X top right. 
                     We already imported X from lucide but DialogContent includes one. 
                  */}
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
