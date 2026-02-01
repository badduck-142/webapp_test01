"use client"

import Link from "next/link"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import React from "react"

const heroImages = [
    "/images/njz/32d8574404862347dbcc271982ea07e5.jpg",
    "/images/njz/568339fca387b017448057f43ed321e1.jpg",
    "/images/njz/c0f234ee61a416a70192adf5e82d8d46.jpg",
    "/images/njz/dca05bbffbeb4d9f2a74d1e6cbadc03f.jpg",
]

export function Hero() {
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    )

    return (
        <section className="w-full bg-slate-50 py-4">
            <div className="container mx-auto px-4">
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full mx-auto max-w-5xl"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent>
                        {heroImages.map((src, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <Card className="border-0 shadow-lg overflow-hidden">
                                        <CardContent className="flex aspect-[16/9] items-center justify-center p-0 bg-slate-200 relative">
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={src}
                                                    alt={`Hero Slide ${index + 1}`}
                                                    fill
                                                    className="object-cover"
                                                    priority={index === 0}
                                                />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 md:-left-12 opacity-80 hover:opacity-100" />
                    <CarouselNext className="right-2 md:-right-12 opacity-80 hover:opacity-100" />
                </Carousel>
            </div>
        </section>
    )
}
