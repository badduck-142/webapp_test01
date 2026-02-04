import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, Compass } from "lucide-react";

export default function VisionPage() {
    return (
        <div className="container mx-auto px-4 py-8 space-y-8">
            {/* Page Header */}
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold text-teal-700">วิสัยทัศน์ พันธกิจ ค่านิยม</h1>
                <div className="h-1 w-20 bg-teal-500 mx-auto rounded-full" />
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    เป้าหมายและแนวทางในการดำเนินงานของโรงพยาบาลโนนคูณ
                </p>
            </div>

            {/* Vision Section - Full Width */}
            <Card className="border-teal-100 shadow-md hover:shadow-lg transition-shadow bg-teal-50/30">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="p-3 bg-teal-100 rounded-full text-teal-600">
                        <Eye className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-2xl text-teal-800">วิสัยทัศน์ (Vision)</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-xl font-medium text-teal-900 leading-relaxed text-center py-6">
                        "โรงพยาบาลชุมชนแห่งความสุข ที่มีคุณภาพ ภาคีเครือข่ายเข้มแข็ง มุ่งเน้นการสร้างเสริมสุขภาพประชาชน"
                    </p>
                </CardContent>
            </Card>

            {/* Mission & Values Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {/* Mission Section */}
                <Card className="border-teal-100 shadow-md hover:shadow-lg transition-shadow h-full">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2 border-b border-teal-50">
                        <div className="p-2 bg-teal-100 rounded-full text-teal-600">
                            <Target className="w-6 h-6" />
                        </div>
                        <CardTitle className="text-xl text-teal-800">พันธกิจ (Mission)</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <ul className="space-y-4 text-gray-600">
                            {[
                                "พัฒนาศักยภาพด้านวิชาชีพและวิชาการ เพื่อมาตรฐานและคุณภาพบริการ",
                                "เสริมสร้างคุณภาพชีวิตของบุคลากรให้มีความสุขโดยเกิดภาวะสมดุลในชีวิตและการทำงาน",
                                "เสริมสร้างคุณภาพด้านการให้บริการครอบคลุม 4 มิติ และคุ้มครองผู้บริโภคโดยการมีส่วนร่วมของภาคีเครือข่าย",
                                "พัฒนาความเป็นเลิศด้านการให้บริการเชิงรุกและการสร้างเสริมสุขภาพในชุมชน",
                                "พัฒนาคุณภาพการบริหารจัดการโรงพยาบาล และเครือข่ายบริการสุขภาพ"
                            ].map((item, index) => (
                                <li key={index} className="flex gap-3 items-start">
                                    <span className="font-bold text-teal-500 min-w-[2.5rem]">M{index + 1}:</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                <div className="space-y-8 flex flex-col">
                    {/* Values Section */}
                    <Card className="border-teal-100 shadow-md hover:shadow-lg transition-shadow flex-1">
                        <CardHeader className="flex flex-row items-center gap-4 pb-2 border-b border-teal-50">
                            <div className="p-2 bg-teal-100 rounded-full text-teal-600">
                                <Heart className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-xl text-teal-800">ค่านิยม (Core Values)</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { th: "อ่อนน้อมถ่อมตน", en: "Humility" },
                                    { th: "ทุกคนสำคัญ", en: "Everyone Matters" },
                                    { th: "หลักคิดสร้างสรรค์", en: "Creative Thinking" },
                                    { th: "มุ่งมั่นบริการ", en: "Service Oriented" }
                                ].map((item, index) => (
                                    <li key={index} className="bg-white p-3 rounded-lg border border-teal-50 shadow-sm">
                                        <div className="font-semibold text-teal-800">{item.th}</div>
                                        <div className="text-sm text-gray-500">{item.en}</div>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Focus Section */}
                    <Card className="border-teal-100 shadow-md hover:shadow-lg transition-shadow">
                        <CardHeader className="flex flex-row items-center gap-4 pb-2 border-b border-teal-50">
                            <div className="p-2 bg-teal-100 rounded-full text-teal-600">
                                <Compass className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-xl text-teal-800">เข็มมุ่ง (Focus/Goals)</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-teal-500" />
                                    <span>การสร้างเสริมสุขภาพ (Health Promotion)</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-teal-500" />
                                    <span>ลดรายจ่าย เพิ่มรายได้ (Reduce Expenses, Increase Income)</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
