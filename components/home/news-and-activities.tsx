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

// Mock Data
const newsItems = [
    {
        id: 1,
        title: "พิธีทำบุญตักบาตรเนื่องในโอกาสวันขึ้นปีใหม่ 2569",
        date: "1 ม.ค. 2569",
        image: "/images/news/news-1.jpg", // Placeholder path, falling back to div
    },
    {
        id: 2,
        title: "โครงการอบรมเชิงปฏิบัติการ การช่วยฟื้นคืนชีพขั้นพื้นฐาน (CPR)",
        date: "15 ม.ค. 2569",
        image: "/images/news/news-2.jpg",
    },
    {
        id: 3,
        title: "กิจกรรม Big Cleaning Day ประจำปี 2569",
        date: "20 ม.ค. 2569",
        image: "/images/news/news-3.jpg",
    },
    {
        id: 4,
        title: "รับบริจาคโลหิต ครั้งที่ 1 ประจำปี 2569",
        date: "25 ม.ค. 2569",
        image: "/images/news/news-4.jpg",
    },
    {
        id: 5,
        title: "การประชุมวิชาการประจำปี บุคลากรทางการแพทย์",
        date: "1 ก.พ. 2569",
        image: "/images/news/news-5.jpg",
    },
    {
        id: 6,
        title: "หน่วยแพทย์เคลื่อนที่ ออกให้บริการประชาชน",
        date: "5 ก.พ. 2569",
        image: "/images/news/news-6.jpg",
    },
]

export function NewsAndActivities() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

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
                <h2 className="inline-block border-b-4 border-[#13cdbf] pb-2 text-2xl md:text-3xl font-bold text-gray-800">
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
                                        className={cn(
                                            "group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300",
                                            isActive
                                                ? "scale-110 opacity-100 z-10 border-2 border-[#13cdbf]/50 md:scale-125"
                                                : "scale-90 opacity-60 hover:opacity-100 blur-[1px] hover:blur-none"
                                        )}
                                    >
                                        {/* Image Area */}
                                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
                                            {/* Since we don't have real images yet, use a placeholder with icon */}
                                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-gray-400">
                                                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm">
                                                    <Calendar className="h-10 w-10 text-[#13cdbf]" />
                                                </div>
                                            </div>
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
        </section>
    )
}
