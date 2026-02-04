import { ProcurementUI } from "@/components/news/procurement-ui"
import { FileText } from "lucide-react"

export const metadata = {
    title: 'ประกวดราคา/จัดซื้อจัดจ้าง - Nonkhun Hospital',
    description: 'ประกาศประกวดราคาและจัดซื้อจัดจ้าง โรงพยาบาลโนนคูณ',
}

export default function ProcurementPage() {
    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Header Section */}
            <div className="bg-white">
                <div className="container mx-auto px-4 py-16">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-6">
                            <FileText className="w-8 h-8 text-teal-600" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                            ประกวดราคา/จัดซื้อจัดจ้าง
                        </h1>
                        <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">
                            รวบรวมประกาศ ข่าวสาร และเอกสารที่เกี่ยวข้องกับการจัดซื้อจัดจ้าง
                            ของโรงพยาบาลโนนคูณ เพื่อความโปร่งใสและตรวจสอบได้
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 -mt-8">
                <div className="bg-transparent">
                    <ProcurementUI />
                </div>
            </div>
        </div>
    )
}
