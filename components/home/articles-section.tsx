"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Plus, FileText, Activity, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogClose,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

// Mock Data for Articles
const articles = [
    {
        id: 1,
        title: "กรดไหลย้อน (GERD) ภัยเงียบที่ควรรู้",
        description: "อาการแสบร้อนกลางอก เรอเปรี้ยว จุกเสียดแน่นท้อง สัญญาณเตือนของโรคกรดไหลย้อนที่ไม่ควรมองข้าม ดูแลตัวเองอย่างไรให้ห่างไกลโรค",
        date: "28 ม.ค. 2569",
        image: "/images/articles/gerd.jpg", // Placeholder
        category: "บทความสุขภาพ",
        content: `
            <p class="mb-4">โรคกรดไหลย้อน (Gastroesophageal Reflux Disease: GERD) คือภาวะที่น้ำย่อยจากกระเพาะอาหารไหลย้อนกลับขึ้นไปในหลอดอาหาร ทำให้เกิดอาการระคายเคืองบริเวณลำคอและหน้าอก ซึ่งถ้ารุนแรงอาจทำให้หลอดอาหารอักเสบเป็นแผลได้</p>
            <h4 class="text-lg font-semibold text-gray-800 mb-2">สาเหตุของโรค</h4>
            <p class="mb-4">สาเหตุสำคัญมักเกิดจากพฤติกรรมการกินและการใช้ชีวิต เช่น การกินอาหารรสจัด กินแล้วนอนทันที การสูบบุหรี่ หรือความเครียด นอกจากนี้ยังอาจเกิดจากความผิดปกติของหูรูดกระเพาะอาหารที่ทำงานไม่เต็มที่</p>
            <h4 class="text-lg font-semibold text-gray-800 mb-2">การป้องกันและดูแลรักษา</h4>
            <ul class="list-disc pl-5 mb-4 space-y-1">
                <li>หลีกเลี่ยงอาหารรสจัด ของมัน ของทอด</li>
                <li>ไม่ควรนอนทันทีหลังรับประทานอาหาร ควรเว้นระยะอย่างน้อย 3 ชั่วโมง</li>
                <li>ลดน้ำหนักหากมีภาวะอ้วน</li>
                <li>งดสูบบุหรี่และเครื่องดื่มแอลกอฮอล์</li>
            </ul>
            <p>หากอาการไม่ดีขึ้นหรือเป็นเรื้อรัง ควรปรึกษาแพทย์เพื่อรับการวินิจฉัยและการรักษาที่ถูกต้องเพื่อป้องกันภาวะแทรกซ้อนที่อาจเกิดขึ้นได้</p>
        `
    },
    {
        id: 2,
        title: "โรคไอพีดี (IPD) ในเด็ก อันตรายที่ป้องกันได้",
        description: "ทำความรู้จักโรคติดเชื้อนิวโมคอคกัส หรือ IPD สาเหตุของปอดอักเสบ เยื่อหุ้มสมองอักเสบ และติดเชื้อในกระแสเลือดในเด็กเล็ก",
        date: "20 ม.ค. 2569",
        image: "/images/articles/ipd.jpg", // Placeholder
        category: "แม่และเด็ก",
        content: `
            <p class="mb-4">โรคไอพีดี (IPD) หรือ Invasive Pneumococcal Disease คือโรคติดเชื้อนิวโมคอคกัสชนิดรุนแรง ซึ่งเป็นแบคทีเรียที่สามารถก่อให้เกิดโรคร้ายแรงในเด็กเล็ก โดยเฉพาะเด็กที่มีอายุต่ำกว่า 2 ปี</p>
            <h4 class="text-lg font-semibold text-gray-800 mb-2">ความรุนแรงของโรค</h4>
            <p class="mb-4">เชื้อนิวโมคอคกัสสามารถแพร่กระจายและก่อให้เกิดโรคตามอวัยวะต่างๆ เช่น ปอดอักเสบ หูชั้นกลางอักเสบ ไซนัสอักเสบ และที่รุนแรงคือ การติดเชื้อในกระแสเลือด และเยื่อหุ้มสมองอักเสบ ซึ่งอาจทำให้พิการหรือเสียชีวิตได้</p>
            <h4 class="text-lg font-semibold text-gray-800 mb-2">วัคซีนคือเกราะป้องกัน</h4>
            <p class="mb-4">ปัจจุบันมีวัคซีนเสริมภูมิคุ้มกันสำหรับเชื้อนิวโมคอคกัส ซึ่งสามารถฉีดได้ตั้งแต่อายุ 2 เดือน การได้รับวัคซีนจะช่วยลดความเสี่ยงและความรุนแรงของโรคได้อย่างมีประสิทธิภาพ</p>
            <p>พ่อแม่ผู้ปกครองควรปรึกษากุมารแพทย์เกี่ยวกับตารางการฉีดวัคซีนเพื่อสร้างเกราะป้องกันให้กับลูกรักตั้งแต่เนิ่นๆ</p>
        `
    },
    {
        id: 3,
        title: "ข้อเข่าเสื่อม (Osteoarthritis) รักษาได้ ไม่ต้องผ่าตัด",
        description: "ปวดเข่า เข่าฝืด เดินมีเสียงก๊อบแก๊บ อาการเหล่านี้อาจเป็นสัญญาณของข้อเข่าเสื่อม เรียนรู้วิธีการรักษาและการปฏิบัติตัวเพื่อชะลอความเสื่อม",
        date: "15 ม.ค. 2569",
        image: "/images/articles/knee.jpg", // Placeholder
        category: "กระดูกและข้อ",
        content: `
            <p class="mb-4">โรคข้อเข่าเสื่อม เป็นโรคที่เกิดจากความเสื่อมของกระดูกอ่อนผิวข้อ ทำให้กระดูกมีการเสียดสีกัน เกิดอาการปวด บวม และขยับข้อได้ยากลำบาก มักพบในผู้สูงอายุ แต่ปัจจุบันพบในวัยกลางคนมากขึ้น</p>
            <h4 class="text-lg font-semibold text-gray-800 mb-2">สัญญาณเตือนข้อเข่าเสื่อม</h4>
            <ul class="list-disc pl-5 mb-4 space-y-1">
                <li>ปวดเข่าเมื่อเคลื่อนไหว หรือขึ้นลงบันได</li>
                <li>มีเสียงดังในข้อเมื่อขยับ</li>
                <li>ข้อเข่าฝืดตึง โดยเฉพาะตอนเช้า</li>
                <li>ข้อเข่าผิดรูป หรือบวม</li>
            </ul>
            <h4 class="text-lg font-semibold text-gray-800 mb-2">แนวทางการรักษาแบบไม่ผ่าตัด</h4>
            <p class="mb-4">ในระยะเริ่มต้นถึงระยะปานกลาง สามารถรักษาได้โดยไม่ต้องผ่าตัด เช่น การปรับพฤติกรรม การลดน้ำหนัก การทำกายภาพบำบัด การทานยาแก้ปวดลดอักเสบ และการฉีดน้ำเลี้ยงข้อเข่าเทียมเพื่อลดแรงเสียดทานและเพิ่มความยืดหยุ่น</p>
            <p>การดูแลรักษาข้อเข่าอย่างถูกวิธีจะช่วยยืดอายุการใช้งานของข้อเข่าและทำให้ผู้ป่วยมีคุณภาพชีวิตที่ดีขึ้นโดยไม่ต้องเจ็บตัวจากการผ่าตัด</p>
        `
    },
]

export function ArticlesSection() {
    const [selectedArticle, setSelectedArticle] = React.useState<typeof articles[0] | null>(null)

    return (
        <section className="container mx-auto px-4 py-16 bg-gray-50/50">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                {/* Sidebar Column */}
                <div className="lg:col-span-1 space-y-6">
                    <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
                        บทความและข่าวสาร
                    </h2>

                    <div className="space-y-1 rounded-xl bg-white p-4 shadow-sm border border-gray-100">
                        <Link
                            href="#"
                            className="flex items-center justify-between rounded-lg bg-[#13cdbf]/10 px-4 py-3 text-sm font-semibold text-[#13cdbf] transition-colors"
                        >
                            <span>บทความสุขภาพ</span>
                            <ChevronRight className="h-4 w-4" />
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-[#13cdbf]"
                        >
                            <span>ข่าวสารประชาสัมพันธ์</span>
                            <ChevronRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <Button className="w-full bg-[#134e70] hover:bg-[#134e70]/90 text-white shadow-md">
                        ดูข่าวสารประชาสัมพันธ์ทั้งหมด
                    </Button>
                </div>

                {/* Content Column - Grid of Articles */}
                <div className="lg:col-span-3">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {articles.map((article) => (
                            <div
                                key={article.id}
                                onClick={() => setSelectedArticle(article)}
                                className="group flex cursor-pointer flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-gray-100 h-full"
                            >
                                {/* Image Area */}
                                <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
                                        <FileText className="h-12 w-12 text-gray-300" />
                                    </div>
                                    <div className="absolute top-3 left-3 rounded-full bg-white/90 px-2 py-1 text-xs font-semibold text-[#13cdbf] backdrop-blur-sm shadow-sm">
                                        {article.category}
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="flex flex-1 flex-col p-5">
                                    <div className="mb-2 text-xs text-gray-400 font-light flex items-center gap-1">
                                        <Activity className="h-3 w-3" /> {article.date}
                                    </div>
                                    <h3 className="mb-2 line-clamp-2 text-lg font-bold text-gray-800 transition-colors group-hover:text-[#13cdbf]">
                                        {article.title}
                                    </h3>
                                    <p className="mb-4 line-clamp-2 text-sm text-gray-500">
                                        {article.description}
                                    </p>

                                    <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                                        <span className="text-sm font-medium text-[#13cdbf] underline decoration-transparent underline-offset-4 transition-all group-hover:decoration-[#13cdbf]">
                                            ดูรายละเอียดเพิ่มเติม
                                        </span>
                                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#13cdbf] text-white transition-transform duration-300 group-hover:rotate-90 shadow-sm">
                                            <Plus className="h-5 w-5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Article Modal */}
            <Dialog open={!!selectedArticle} onOpenChange={(open) => !open && setSelectedArticle(null)}>
                <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-2xl flex flex-col max-h-[90vh]">
                    {selectedArticle && (
                        <>
                            {/* Modal Header Image */}
                            <div className="relative h-48 sm:h-64 w-full bg-gray-200 shrink-0">
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
                                    {/* In real app, use next/image with article.image */}
                                    <FileText className="h-16 w-16 text-gray-300" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                    <span className="bg-[#13cdbf] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
                                        {selectedArticle.category}
                                    </span>
                                </div>
                            </div>

                            {/* Modal Content - Scrollable */}
                            <div className="p-6 md:p-8 overflow-y-auto">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 leading-tight">
                                    {selectedArticle.title}
                                </h2>
                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-6 border-b border-gray-100 pb-4">
                                    <Calendar className="h-4 w-4" />
                                    <span>เผยแพร่เมื่อ: {selectedArticle.date}</span>
                                </div>

                                <div
                                    className="prose prose-lg text-gray-600 max-w-none"
                                    dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                                />
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    )
}
