"use client"

import Link from "next/link"
import {
    Stethoscope,
    Heart,
    MonitorCog,
    FilePenLine,
    FolderOpen,
    Building,
    Globe,
    Users,
} from "lucide-react"

const services = [
    {
        title: "ตารางการให้บริการคลินิก",
        icon: Stethoscope,
        href: "#",
    },
    {
        title: "หมอพร้อม",
        icon: Heart,
        href: "#",
    },
    {
        title: "IT SERVICE",
        icon: MonitorCog,
        href: "#",
    },
    {
        title: "เรื่องร้องเรียน",
        icon: FilePenLine,
        href: "#",
    },
    {
        title: "ระบบ newSarabun 68",
        icon: FolderOpen,
        href: "#",
    },
    {
        title: "BACKOFFICE",
        icon: Building,
        href: "#",
    },
    {
        title: "HIMPRO ONLINE",
        icon: Globe,
        href: "#",
    },
    {
        title: "HIMPRO HRM",
        icon: Users,
        href: "#",
    },
]

export function ServicesSection() {
    return (
        <section className="container mx-auto px-8 py-40">
            <div className="mb-8 text-center">
                <h2 className="inline-block border-b-3 border-[#13cdbf] pb-1 text-2xl font-bold text-gray-700">
                    งานบริการ
                </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {services.map((service) => (
                    <Link
                        key={service.title}
                        href={service.href}
                        className="group flex flex-col items-center justify-center rounded-xl border border-[#13cdbf] bg-white p-8 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        <service.icon className="mb-4 h-12 w-12 text-[#13cdbf] transition-transform duration-300 group-hover:scale-110" />
                        <span className="text-center font-medium text-gray-700">
                            {service.title}
                        </span>
                    </Link>
                ))}
            </div>
            <div className="mx-auto mt-16 h-1 w-150 rounded-full bg-[#13cdbf]"></div>
        </section>
    )
}
