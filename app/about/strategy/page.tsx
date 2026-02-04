import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, TrendingUp, ClipboardList, CheckCircle2 } from "lucide-react";

export default function StrategyPage() {
    return (
        <div className="container mx-auto px-4 py-8 space-y-8">
            {/* Page Header */}
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold text-teal-700">ยุทธศาสตร์โรงพยาบาลโนนคูณปี 2566-2569</h1>
                <div className="h-1 w-20 bg-teal-500 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Goals Section (เป้าประสงค์) */}
                <Card className="border-teal-100 shadow-md hover:shadow-lg transition-shadow bg-green-50/30">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2 border-b border-teal-50">
                        <div className="p-3 bg-teal-100 rounded-full text-teal-600">
                            <Target className="w-6 h-6" />
                        </div>
                        <CardTitle className="text-xl text-teal-800">เป้าประสงค์</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <ul className="space-y-3">
                            {[
                                "ลดอัตราป่วย/ตาย และภาวะแทรกซ้อนในโรคที่ป้องกันได้",
                                "ลดพฤติกรรมความเสี่ยงต่อการเจ็บป่วยรายใหม่ในกลุ่มโรคที่สำคัญ",
                                "การบริหารจัดการที่มีประสิทธิภาพ ตามหลักธรรมาภิบาล",
                                "บุคลากรมีคุณภาพ เก่ง ดี มีความสุข มีความผูกพันองค์กร",
                                "ภาคีเครือข่าย มีส่วนร่วมในการดูแลสุขภาพ ป้องกันโรคและคุ้มครองผู้บริโภค"
                            ].map((item, index) => (
                                <li key={index} className="flex gap-3 items-start text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                {/* Strategic Issues (ประเด็นยุทธศาสตร์) */}
                <Card className="border-teal-100 shadow-md hover:shadow-lg transition-shadow bg-blue-50/30">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2 border-b border-teal-50">
                        <div className="p-3 bg-teal-100 rounded-full text-teal-600">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <CardTitle className="text-xl text-teal-800">ประเด็นยุทธศาสตร์</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <ul className="space-y-4">
                            {[
                                "การสร้างเสริมสุขภาพและป้องกันโรคทุกกลุ่มวัย",
                                "การพัฒนาระบบบริการดูแลรักษาพยาบาล ที่ปลอดภัย ตามมาตรฐาน",
                                "พัฒนาบุคลากรให้มีสมรรถนะที่สอดคล้องกับการจัดบริการและมีความสุข",
                                "ระบบบริหารจัดการงานให้มีคุณภาพ (IT ENV IC RM BCP เงิน)"
                            ].map((item, index) => (
                                <li key={index} className="flex gap-4 items-center bg-white p-3 rounded-lg shadow-sm border border-teal-50/50">
                                    <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm shrink-0">
                                        {index + 1}
                                    </div>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>

            {/* Action Plan (แผนปฏิบัติราชการ) */}
            <Card className="border-teal-100 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4 pb-2 border-b border-teal-50">
                    <div className="p-3 bg-teal-100 rounded-full text-teal-600">
                        <ClipboardList className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl text-teal-800">แผนปฏิบัติราชการ</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                        {[
                            "การสร้างเสริมสุขภาพและป้องกันโรคทุกกลุ่มวัย 7 โครงการ",
                            "ส่งเสริมการมีส่วนร่วมกับชุมชนและภาคีเครือข่าย เพื่อสร้างเสริมสุขภาพและป้องกันโรคตามกลุ่มวัย 8 โครงการ",
                            "การพัฒนาระบบบริการดูแลรักษาพยาบาล ที่ปลอดภัย ตามมาตรฐาน 10 โครงการ",
                            "พัฒนาคุณภาพการดูแลผู้ป่วยโรคเรื้อรังแบบไร้รอยต่อจากโรงพยาบาลสู่ชุมชน 6 โครงการ",
                            "เสริมสร้างความรอบรู้ด้านสุขภาพแก่ประชาชน 2 โครงการ",
                            "พัฒนาบุคลากรให้มีสมรรถนะที่สอดคล้องกับการจัดบริการและมีความสุข ความผูกพันองค์กร 11 โครงการ",
                            "พัฒนาระบบบริหารจัดการที่มีประสิทธิภาพตามหลักธรรมาภิบาล",
                            "พัฒนาระบบการจัดเก็บรายได้และควบคุมค่าใช้จ่ายให้มีประสิทธิภาพ 2 โครงการ",
                            "พัฒนาระบบเทคโนโลยีสารสนเทศ เพื่อรองรับระบบให้คำปรึกษาด้านสุขภาพ 2 โครงการ"
                        ].map((item, index) => (
                            <div key={index} className="flex gap-3 items-start p-2 hover:bg-teal-50/50 rounded-lg transition-colors">
                                <span className="text-teal-500 font-bold min-w-[1.5rem] mt-0.5">{index + 1}.</span>
                                <span className="text-gray-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
