"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const aboutUsItems = [
    { title: 'ข้อมูลโรงพยาบาล', href: '/about/info' },
    { title: 'โครงสร้างการบริหารงาน', href: '/about/management' },
    { title: 'วิสัยทัศน์ พันธกิจ ค่านิยม', href: '/about/vision' },
    { title: 'รางวัล และการรับรอง', href: '/about/awards' },
    { title: 'หน่วยงานภายในโรงพยาบาล', href: '/about/departments' },
    { title: 'แผนยุทธศาสตร์', href: '/about/strategy' },
    // { title: 'ติดต่อเรา', href: '/contact' },
]

const newsItems = [
    { title: 'ประกวดราคา/จัดซื้อจัดจ้าง', href: '/news/procurement' },
    { title: 'รับสมัครงาน', href: '/news/jobs' },
    { title: 'บทความและความรู้', href: '/news/articles' },
    { title: 'ภาพกิจกรรม', href: '/news/gallery' },
    { title: 'กฏหมายและระเบียบ', href: '/news/laws' },
    { title: 'ส่งแบบฟอร์มสมัครงาน', href: '/news/apply-job' },
]

const staffItems = [
    { title: 'HIMPRO ONLINE', href: '/staff/himpro' },
    { title: 'HRM ONLINE', href: '/staff/hrm' },
    { title: 'สารบัญออนไลน์', href: '/staff/saraban' },
    { title: 'HDC', href: '/staff/hdc' },
    { title: 'INTRANET', href: '/staff/intranet' },
    { title: 'ระบบลงเวลา', href: '/staff/time-attendance' },
    { title: 'ITSERVICES', href: '/staff/it-services' },
    { title: 'ระบบสารบรรณออนไลน์', href: '/staff/e-saraban' },
    { title: 'ระบบ newSarabun68', href: '/staff/new-saraban-68' },
    { title: 'โปรแกรมซ่อมออนไลน์', href: '/staff/repair' },
]

const itaItems = [
    { title: 'ITA 2567', href: '/ita/2567' },
    { title: 'ITA 2568', href: '/ita/2568' },
    { title: 'ITA 2569', href: '/ita/2569' },
]

const hs4Items = [
    { title: 'HS4 มาตรฐาน 9 ด้าน โรงพยาบาลโนนคูณ', href: '/hs4/standard' },
    { title: 'HS4 มาตรฐาน 9 ด้าน โรงพยาบาลโนนคูณ ปีงบ 2569', href: '/hs4/2569' },
]

const departmentsItems = [
    { title: 'HDC กระทรวงสาธารณสุข (ข้อมูล 43 แฟ้ม)', href: '/departments/hdc-moph' },
    { title: 'HDC สสจ.ศรีสะเกษ (ข้อมูล 43 แฟ้ม)', href: '/departments/hdc-ssk' },
    { title: 'KPI', href: '/departments/kpi' },
    { title: 'ประเมินโครงการมหัศจรรย์ 1,000 วัน', href: '/departments/1000-days' },
    { title: 'Health GIS', href: '/departments/health-gis' },
    { title: 'PaySlip', href: '/departments/payslip' },
    { title: 'สหกรณ์ออมทรัพย์สาธารณสุขศรีสะเกษ', href: '/departments/coop-ssk' },
    { title: 'KPI_template_2568', href: '/departments/kpi-template-2568' },
]

const rightNavItems = [
    { href: "/login", label: "เข้าสู่ระบบ" },
]

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full shadow-md bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4">
                {/* Desktop Layout */}
                <div className="hidden md:flex h-24 items-center w-full">
                    {/* Left Nav */}
                    <div className="flex-1 flex justify-end">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <Link href="/" legacyBehavior passHref>
                                        <NavigationMenuLink
                                            className={cn(
                                                navigationMenuTriggerStyle(),
                                                "bg-transparent text-muted-foreground hover:text-primary focus:text-primary relative font-normal"
                                            )}
                                        >
                                            หน้าแรก
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-transparent font-normal text-muted-foreground hover:text-primary focus:text-primary">
                                        เกี่ยวกับเรา
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="bg-white">
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                            {aboutUsItems.map((item) => (
                                                <ListItem
                                                    key={item.title}
                                                    title={item.title}
                                                    href={item.href}
                                                />
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-transparent font-normal text-muted-foreground hover:text-primary focus:text-primary">
                                        ข่าวสาร
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="bg-white">
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                            {newsItems.map((item) => (
                                                <ListItem
                                                    key={item.title}
                                                    title={item.title}
                                                    href={item.href}
                                                />
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-transparent font-normal text-muted-foreground hover:text-primary focus:text-primary">
                                        เจ้าหน้าที่
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="bg-white">
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                            {staffItems.map((item) => (
                                                <ListItem
                                                    key={item.title}
                                                    title={item.title}
                                                    href={item.href}
                                                />
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* Logo Center */}
                    <Link href="/" className="flex flex-col items-center justify-center px-4">
                        <div className="relative h-20 w-48 md:h-16 md:w-56 lg:h-20 lg:w-64">
                            <Image
                                src="/images/Logo3.png"
                                alt="Nonkhun Hospital"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Right Nav */}
                    <div className="flex-1 flex justify-start">
                        <div className="flex gap-4 items-center">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className="bg-transparent font-normal text-muted-foreground hover:text-primary focus:text-primary">
                                            ITA
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent className="bg-white">
                                            <ul className="grid w-[200px] gap-3 p-4">
                                                {itaItems.map((item) => (
                                                    <ListItem
                                                        key={item.title}
                                                        title={item.title}
                                                        href={item.href}
                                                    />
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>

                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className="bg-transparent font-normal text-muted-foreground hover:text-primary focus:text-primary">
                                            HS4
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent className="bg-white">
                                            <ul className="grid w-[300px] gap-3 p-4">
                                                {hs4Items.map((item) => (
                                                    <ListItem
                                                        key={item.title}
                                                        title={item.title}
                                                        href={item.href}
                                                    />
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>

                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className="bg-transparent font-normal text-muted-foreground hover:text-primary focus:text-primary">
                                            หน่วยงาน
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent className="bg-white">
                                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px]">
                                                {departmentsItems.map((item) => (
                                                    <ListItem
                                                        key={item.title}
                                                        title={item.title}
                                                        href={item.href}
                                                    />
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>

                            {rightNavItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "text-sm font-normal text-muted-foreground transition-colors px-4 py-2 rounded-md",
                                        item.href === "/login"
                                            ? "hover:bg-teal-50 hover:text-teal-700"
                                            : "hover:text-primary"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="flex h-16 items-center justify-between md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="shrink-0">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle navigation</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="overflow-y-auto">
                            <nav className="grid gap-6 text-lg font-medium">
                                <Link
                                    href="#"
                                    className="flex items-center gap-2 text-lg font-semibold"
                                >
                                    <span className="text-primary">Nonkhun Hospital</span>
                                </Link>

                                <Link href="/" className="hover:text-primary">
                                    หน้าแรก
                                </Link>

                                <div className="grid gap-2">
                                    <div className="font-medium text-muted-foreground">เกี่ยวกับเรา</div>
                                    <div className="grid gap-2 pl-4 text-base text-muted-foreground/80">
                                        {aboutUsItems.map((item) => (
                                            <Link key={item.title} href={item.href} className="hover:text-primary">
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid gap-2">
                                    <div className="font-medium text-muted-foreground">ข่าวสาร</div>
                                    <div className="grid gap-2 pl-4 text-base text-muted-foreground/80">
                                        {newsItems.map((item) => (
                                            <Link key={item.title} href={item.href} className="hover:text-primary">
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <div className="font-medium text-muted-foreground">เจ้าหน้าที่</div>
                                    <div className="grid gap-2 pl-4 text-base text-muted-foreground/80">
                                        {staffItems.map((item) => (
                                            <Link key={item.title} href={item.href} className="hover:text-primary">
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid gap-2">
                                    <div className="font-medium text-muted-foreground">ITA</div>
                                    <div className="grid gap-2 pl-4 text-base text-muted-foreground/80">
                                        {itaItems.map((item) => (
                                            <Link key={item.title} href={item.href} className="hover:text-primary">
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid gap-2">
                                    <div className="font-medium text-muted-foreground">HS4</div>
                                    <div className="grid gap-2 pl-4 text-base text-muted-foreground/80">
                                        {hs4Items.map((item) => (
                                            <Link key={item.title} href={item.href} className="hover:text-primary">
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid gap-2">
                                    <div className="font-medium text-muted-foreground">หน่วยงาน</div>
                                    <div className="grid gap-2 pl-4 text-base text-muted-foreground/80">
                                        {departmentsItems.map((item) => (
                                            <Link key={item.title} href={item.href} className="hover:text-primary">
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {rightNavItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="hover:text-primary"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <Link href="/" className="flex items-center gap-2">
                        <div className="relative h-10 w-40">
                            <Image
                                src="/images/Logo1.png"
                                alt="Nonkhun Hospital"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>
                    <div className="w-10" /> {/* Spacer for centering */}
                </div>
            </div>
        </header>
    )
}

const ListItem = React.forwardRef<
    React.ComponentRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-teal-50 hover:text-teal-700 focus:bg-teal-50 focus:text-teal-700",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-light leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
