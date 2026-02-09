"use client"

import * as React from "react"
import Image from "next/image"
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogClose,
} from "@/components/ui/dialog"

// Mock Data
const newsItems = [
    {
        id: 1,
        title: "พิธีทำบุญตักบาตรเนื่องในโอกาสวันขึ้นปีใหม่ 2569",
        date: "1 ม.ค. 2569",
        images: ["/images/news/news-1.jpg", "/images/news/news-1-2.jpg", "/images/news/news-1-3.jpg"],
        content: `
            <p className="mb-4">โรงพยาบาลโนนคูณได้จัดพิธีทำบุญตักบาตรข้าวสารอาหารแห้ง แด่พระภิกษุสงฆ์ จำนวน 9 รูป เนื่องในโอกาสวันขึ้นปีใหม่ พุทธศักราช 2569 เพื่อความเป็นสิริมงคลแก่คณะผู้บริหาร แพทย์ พยาบาล และบุคลากรทางการแพทย์ทุกท่าน</p>
            <p>กิจกรรมนี้ได้รับความร่วมมือจากบุคลากรทุกฝ่าย เพื่อสืบสานประเพณีวัฒนธรรมอันดีงาม และสร้างขวัญกำลังใจในการปฏิบัติงานเพื่อบริการประชาชนต่อไป</p>
        `
    },
    {
        id: 2,
        title: "โครงการอบรมเชิงปฏิบัติการ การช่วยฟื้นคืนชีพขั้นพื้นฐาน (CPR)",
        date: "15 ม.ค. 2569",
        images: ["/images/news/news-2.jpg"],
        content: `
            <p className="mb-4">กลุ่มงานอุบัติเหตุและฉุกเฉิน โรงพยาบาลโนนคูณ ได้จัดโครงการอบรมเชิงปฏิบัติการ "การช่วยฟื้นคืนชีพขั้นพื้นฐาน (Basic Life Support: BLS)" ให้กับบุคลากรในโรงพยาบาลและอาสาสมัครสาธารณสุขประจำหมู่บ้าน (อสม.)</p>
            <p>โดยมีวัตถุประสงค์เพื่อเพิ่มพูนความรู้และทักษะในการช่วยชีวิตผู้ป่วยที่หัวใจหยุดเต้น ลดอัตราการเสียชีวิต และความพิการที่อาจเกิดขึ้นได้</p>
        `
    },
    {
        id: 3,
        title: "กิจกรรม Big Cleaning Day ประจำปี 2569",
        date: "20 ม.ค. 2569",
        images: ["/images/news/news-3.jpg", "/images/news/news-3-2.jpg"],
        content: `
            <p className="mb-4">โรงพยาบาลโนนคูณจัดกิจกรรม Big Cleaning Day ประจำปี 2569 เพื่อทำความสะอาดและปรับปรุงภูมิทัศน์ภายในโรงพยาบาล ให้มีความสะอาด สวยงาม และปลอดภัยสำหรับผู้มารับบริการ</p>
            <p>กิจกรรมประกอบด้วยการทำความสะอาดอาคารสถานที่ การตัดแต่งกิ่งไม้ และการจัดระเบียบพื้นที่ต่างๆ ตามหลัก 5ส.</p>
        `
    },
    {
        id: 4,
        title: "รับบริจาคโลหิต ครั้งที่ 1 ประจำปี 2569",
        date: "25 ม.ค. 2569",
        images: ["/images/news/news-4.jpg"],
        content: `
            <p className="mb-4">ขอเชิญชวนประชาชนผู้มีจิตศรัทธา ร่วมบริจาคโลหิต ในโครงการ "หนึ่งคนให้ หลายคนรับ" ครั้งที่ 1 ประจำปี 2569 ณ ห้องประชุมชั้น 2 โรงพยาบาลโนนคูณ</p>
            <p>โลหิตของท่านจะนำไปช่วยเหลือผู้ป่วยที่ต้องการเลือดในการผ่าตัดและรักษาโรคต่างๆ ผู้บริจาคจะได้รับของที่ระลึกเป็นเสื้อยืดที่ระลึก</p>
        `
    },
    {
        id: 5,
        title: "การประชุมวิชาการประจำปี บุคลากรทางการแพทย์",
        date: "1 ก.พ. 2569",
        images: ["/images/news/news-5.jpg"],
        content: `
            <p className="mb-4">โรงพยาบาลโนนคูณจัดการประชุมวิชาการประจำปี 2569 ในหัวข้อ "นวัตกรรมการแพทย์ยุคใหม่และการดูแลสุขภาพแบบองค์รวม" โดยมีวิทยากรผู้ทรงคุณวุฒิจากหลากหลายสาขามาให้ความรู้</p>
            <p>เพื่อพัฒนาศักยภาพของบุคลากรทางการแพทย์ให้ทันต่อการเปลี่ยนแปลงของเทคโนโลยีและความรู้ทางการแพทย์สมัยใหม่</p>
        `
    },
    {
        id: 6,
        title: "หน่วยแพทย์เคลื่อนที่ ออกให้บริการประชาชน",
        date: "5 ก.พ. 2569",
        images: ["/images/news/news-6.jpg", "/images/news/news-6-2.jpg"],
        content: `
            <p className="mb-4">ทีมแพทย์ พยาบาล และเจ้าหน้าที่สาธารณสุข โรงพยาบาลโนนคูณ ได้ออกหน่วยแพทย์เคลื่อนที่ให้บริการตรวจรักษาโรคทั่วไป ทันตกรรม และให้คำปรึกษาด้านสุขภาพแก่ประชาชนในพื้นที่ห่างไกล ณ ศาลาประชาคมหมู่บ้านบก</p>
            <p>มีประชาชนมารับบริการเป็นจำนวนมาก โดยทางทีมงานมีความมุ่งมั่นที่จะกระจายโอกาสในการเข้าถึงบริการสาธารณสุขให้ครอบคลุมทุกพื้นที่</p>
        `
    },
]

export function NewsAndActivities() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    const [selectedNews, setSelectedNews] = React.useState<typeof newsItems[0] | null>(null)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    return (
        <section className="container mx-auto px-4 py-16 pb-24 overflow-hidden">
            <div className="mb-12 text-center">
                <h2 className="inline-block border-b-3 border-[#13cdbf] pb-2 text-2xl md:text-2xl font-bold text-gray-700">
                    ข่าวกิจกรรมภายในโรงพยาบาล
                </h2>
            </div>

            <div className="relative mx-auto max-w-5xl">
                <Carousel
                    setApi={setApi}
                    opts={{
                        align: "center",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4 md:-ml-8 items-center py-10">
                        {newsItems.map((item, index) => {
                            // Calculate if this item is the "center" one visually
                            // With loop: true and align: center, api.selectedScrollSnap() tells us the active INDEX of the data array.
                            // However, since we are rendering the map directly, strict index comparison works for the simple case
                            // provided standard loop cloning behavior isn't confusing React rendering.

                            // To be safer with visual transitions, we simply check index against current.
                            // Note: Embla loop might make this logic tricky for the "cloned" slides that appear at edges.
                            // But for a simple center-focus effect, usually index === current is sufficient for the main view.

                            const isActive = index === current

                            return (
                                <CarouselItem
                                    key={item.id}
                                    className="basis-full pl-4 md:basis-1/3 md:pl-8 transition-all duration-300 ease-out"
                                >
                                    <div
                                        onClick={() => setSelectedNews(item)}
                                        className={cn(
                                            "group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 cursor-pointer",
                                            isActive
                                                ? "scale-110 opacity-100 z-10 border-2 border-[#13cdbf]/50 md:scale-125"
                                                : "scale-90 opacity-60 hover:opacity-100 blur-[1px] hover:blur-none"
                                        )}
                                    >
                                        {/* Image Area */}
                                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
                                            {item.images && item.images.length > 0 ? (
                                                <Image
                                                    src={item.images[0]}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-gray-400">
                                                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm">
                                                        <Calendar className="h-10 w-10 text-[#13cdbf]" />
                                                    </div>
                                                </div>
                                            )}
                                            {/* Overlay Gradient */}
                                            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent" />
                                        </div>

                                        {/* Content Area */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                            <p className="mb-2 flex items-center gap-2 text-xs font-medium text-[#13cdbf]">
                                                <Calendar className="h-3 w-3" />
                                                {item.date}
                                            </p>
                                            <h3 className="line-clamp-2 text-sm font-semibold md:text-base">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </div>
                                </CarouselItem>
                            )
                        })}
                    </CarouselContent>

                    {/* Navigation Arrows */}
                    <CarouselPrevious className="hidden md:flex -left-12 h-12 w-12 border-none bg-white/80 hover:bg-[#13cdbf] hover:text-white" />
                    <CarouselNext className="hidden md:flex -right-12 h-12 w-12 border-none bg-white/80 hover:bg-[#13cdbf] hover:text-white" />
                </Carousel>

                {/* Pagination Dots */}
                <div className="mt-8 flex justify-center gap-2">
                    {Array.from({ length: count }).map((_, index) => (
                        <button
                            key={index}
                            className={cn(
                                "h-3 w-3 rounded-full transition-all duration-300",
                                index === current
                                    ? "w-8 bg-[#13cdbf]"
                                    : "bg-gray-300 hover:bg-gray-400"
                            )}
                            onClick={() => api?.scrollTo(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* News Modal */}
            <Dialog open={!!selectedNews} onOpenChange={(open) => !open && setSelectedNews(null)}>
                <DialogContent className="max-w-4xl bg-white max-h-[85vh] overflow-y-auto p-0 sm:rounded-2xl text-slate-900">
                    {selectedNews && (
                        <div className="flex flex-col">
                            {/* Modal Header Image */}
                            {/* Modal Header Image */}
                            <div className="relative h-64 md:h-80 w-full bg-gray-100 shrink-0">
                                {selectedNews.images && selectedNews.images.length > 0 ? (
                                    <Image
                                        src={selectedNews.images[0]}
                                        alt={selectedNews.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                        <Calendar className="h-16 w-16 text-gray-300" />
                                    </div>
                                )}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6 md:p-8">
                                <DialogTitle className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 leading-tight">
                                    {selectedNews.title}
                                </DialogTitle>
                                <div className="flex items-center gap-2 text-sm text-slate-500 mb-6 border-b border-gray-100 pb-4">
                                    <Calendar className="h-4 w-4" />
                                    <span>วันที่: {selectedNews.date}</span>
                                </div>

                                <div
                                    className="prose prose-lg max-w-none text-slate-700 headings:font-bold headings:text-slate-900 mb-8"
                                    dangerouslySetInnerHTML={{ __html: selectedNews.content }}
                                />

                                {/* Image Gallery */}
                                {selectedNews.images && selectedNews.images.length > 0 && (
                                    <div className="space-y-4">
                                        <h4 className="text-lg font-bold text-gray-800 border-l-4 border-[#13cdbf] pl-3">
                                            รูปภาพกิจกรรม
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {selectedNews.images.map((img, idx) => (
                                                <div
                                                    key={idx}
                                                    className={cn(
                                                        "relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow bg-gray-100",
                                                        // First image full width if odd number of images > 1? No, let's keep it simple grid.
                                                        // Or maybe make the first image large?
                                                        // Let's just do a simple grid.
                                                    )}
                                                >
                                                    <div className="relative aspect-video w-full">
                                                        <Image
                                                            src={img}
                                                            alt={`${selectedNews.title} - ${idx + 1}`}
                                                            fill
                                                            className="object-cover hover:scale-105 transition-transform duration-500"
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    )
}
