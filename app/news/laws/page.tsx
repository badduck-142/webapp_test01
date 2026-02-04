import { LawsUI } from "@/components/news/laws-ui"
import { Scale } from "lucide-react"

export const metadata = {
    title: 'กฎหมายและระเบียบ - Nonkhun Hospital',
    description: 'รวบรวมกฎหมาย ระเบียบ ข้อบังคับที่เกี่ยวข้องกับการดำเนินงานของโรงพยาบาลโนนคูณ',
}

export default function LawsPage() {
    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Header Section */}
            <div className="bg-white">
                <div className="container mx-auto px-4 py-16">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-6">
                            <Scale className="w-8 h-8 text-teal-600" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                            กฎหมายและระเบียบ
                        </h1>
                        <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">
                            รวบรวมพระราชบัญญัติ ระเบียบ ข้อบังคับ และประกาศต่างๆ ที่เกี่ยวข้องกับการปฏิบัติราชการ
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 -mt-8">
                <div className="bg-transparent">
                    <LawsUI />
                </div>
            </div>
        </div>
    )
}
