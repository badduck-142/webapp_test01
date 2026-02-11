"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, LogOut, User as UserIcon } from "lucide-react"

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
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
// Import logout action
import { logout } from "@/lib/auth"

const aboutUsItems = [
    { title: 'ข้อมูลโรงพยาบาล', href: '/about/info' },
    { title: 'โครงสร้างการบริหารงาน', href: '/about/management' },
    { title: 'วิสัยทัศน์ พันธกิจ ค่านิยม', href: '/about/vision' },
    { title: 'รางวัล และการรับรอง', href: '/about/awards' },
    { title: 'หน่วยงานภายในโรงพยาบาล', href: '/about/departments' },
    { title: 'แผนยุทธศาสตร์', href: '/about/strategy' },
]

const newsItems = [
    { title: 'ประกวดราคา/จัดซื้อจัดจ้าง', href: '/news/procurement' },
    { title: 'รับสมัครงาน', href: '/news/jobs' },
    { title: 'กฏหมายและระเบียบ', href: '/news/laws' },
    { title: 'ส่งแบบฟอร์มสมัครงาน', href: '#' },
]

const staffItems = [
    { title: 'HIMPRO ONLINE', href: 'https://nkhosp.himpro.info/Account/Login?ReturnUrl=%2Fhimpro' },
    { title: 'HRM ONLINE', href: 'https://hrm.nkhosp.himpro.info/Account/Login?ReturnUrl=%2F' },
    { title: 'สารบัญออนไลน์', href: 'http://192.168.200.230/newsarabun65/' },
    { title: 'HDC', href: 'https://hdc.moph.go.th/ssk/public/main' },
    { title: 'INTRANET', href: '#' },
    { title: 'ระบบลงเวลา', href: 'http://118.174.46.162:9080/backoffice/login' },
    { title: 'ITSERVICES', href: '/it-service' },
    { title: 'โปรแกรมซ่อมออนไลน์', href: 'http://118.174.46.162:9080/backoffice/repair_normal/user/genrepairtype' },
]

const itaItems = [
    { title: 'ITA 2567', href: '#' },
    { title: 'ITA 2568', href: '#' },
    { title: 'ITA 2569', href: '#' },
]

const hs4Items = [
    { title: 'HS4 มาตรฐาน 9 ด้าน โรงพยาบาลโนนคูณ', href: '#' },
    { title: 'HS4 มาตรฐาน 9 ด้าน โรงพยาบาลโนนคูณ ปีงบ 2569', href: '#' },
]

const departmentsItems = [
    { title: 'HDC กระทรวงสาธารณสุข (ข้อมูล 43 แฟ้ม)', href: '#' },
    { title: 'HDC สสจ.ศรีสะเกษ (ข้อมูล 43 แฟ้ม)', href: '#' },
    { title: 'KPI', href: '#' },
    { title: 'ประเมินโครงการมหัศจรรย์ 1,000 วัน', href: '#' },
    { title: 'Health GIS', href: '#' },
    { title: 'PaySlip', href: '#' },
    { title: 'สหกรณ์ออมทรัพย์สาธารณสุขศรีสะเกษ', href: '#' },
    { title: 'KPI_template_2568', href: '#' },
]

interface HeaderClientProps {
    user: any; // Using any for simplicity as per previous context, ideally defined User type
}

export function HeaderClient({ user }: HeaderClientProps) {
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
                                                "bg-transparent text-muted-foreground hover:bg-teal-50 hover:text-teal-700 focus:bg-teal-50 focus:text-teal-700 relative font-normal"
                                            )}
                                        >
                                            หน้าแรก
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-transparent font-normal text-muted-foreground hover:bg-teal-50 hover:text-teal-700 focus:bg-teal-50 focus:text-teal-700">
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
                                    <NavigationMenuTrigger className="bg-transparent font-normal text-muted-foreground hover:bg-teal-50 hover:text-teal-700 focus:bg-teal-50 focus:text-teal-700">
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
                                    <NavigationMenuTrigger className="bg-transparent font-normal text-muted-foreground hover:bg-teal-50 hover:text-teal-700 focus:bg-teal-50 focus:text-teal-700">
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
                                        <NavigationMenuTrigger className="bg-transparent font-normal text-muted-foreground hover:bg-teal-50 hover:text-teal-700 focus:bg-teal-50 focus:text-teal-700">
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
                                        <NavigationMenuTrigger className="bg-transparent font-normal text-muted-foreground hover:bg-teal-50 hover:text-teal-700 focus:bg-teal-50 focus:text-teal-700">
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
                                        <NavigationMenuTrigger className="bg-transparent font-normal text-muted-foreground hover:bg-teal-50 hover:text-teal-700 focus:bg-teal-50 focus:text-teal-700">
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

                            {/* Authentication Logic */}
                            {user ? (
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0 overflow-hidden group cursor-pointer">
                                            <div className="flex items-center justify-center w-full h-full bg-teal-500 rounded-full text-white font-bold text-lg hover:bg-teal-600 transition-colors">
                                                {user.name.charAt(0).toUpperCase()}
                                            </div>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56 bg-white" align="end" forceMount>
                                        <DropdownMenuLabel className="font-normal">
                                            <div className="flex flex-col space-y-1">
                                                <p className="text-sm font-medium leading-none">{user.name}</p>
                                                <p className="text-xs leading-none text-muted-foreground">
                                                    {user.department || 'No Department'}
                                                </p>
                                            </div>
                                        </DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem
                                            className="text-red-600 focus:text-red-600 cursor-pointer focus:bg-red-50 focus:text-red-600"
                                            onClick={() => logout()}
                                        >
                                            <LogOut className="mr-2 h-4 w-4" />
                                            <span>ออกจากระบบ</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : (
                                <Link
                                    href="/login"
                                    className={cn(
                                        "text-sm font-normal text-muted-foreground transition-colors px-4 py-2 rounded-md hover:bg-teal-50 hover:text-teal-700"
                                    )}
                                >
                                    เข้าสู่ระบบ
                                </Link>
                            )}
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

                                {/* ... Other mobile links (same as before) ... */}

                                {user ? (
                                    <>
                                        <div className="h-px bg-slate-100 my-2"></div>
                                        <div className="flex items-center gap-3 px-2 py-2">
                                            <div className="h-10 w-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                                {user.name.charAt(0).toUpperCase()}
                                            </div>
                                            <div>
                                                <p className="font-medium">{user.name}</p>
                                                <p className="text-sm text-muted-foreground">{user.department}</p>
                                            </div>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            className="justify-start text-red-600 px-2"
                                            onClick={() => logout()}
                                        >
                                            <LogOut className="mr-2 h-4 w-4" />
                                            ออกจากระบบ
                                        </Button>
                                    </>
                                ) : (
                                    <Link
                                        href="/login"
                                        className="hover:text-primary"
                                    >
                                        เข้าสู่ระบบ
                                    </Link>
                                )}
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
                    <div className="w-10">
                        {/* Mobile User Icon / Placeholder */}
                        {user && (
                            <div className="flex items-center justify-center w-8 h-8 bg-teal-500 rounded-full text-white text-sm font-bold">
                                {user.name.charAt(0).toUpperCase()}
                            </div>
                        )}
                    </div>
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
