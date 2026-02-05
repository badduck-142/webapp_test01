"use client"

import Link from "next/link"

export function Footer() {
    return (
        <footer className="w-full text-white">
            {/* Main Footer Section */}
            <div className="bg-[#13cdbf] py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
                        {/* Column 1: Menu */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold md:text-2xl">หัวข้อเมนู</h3>
                            <ul className="space-y-3 font-light">
                                <li>
                                    <Link
                                        href="/about/info"
                                        className="hover:underline hover:opacity-90"
                                    >
                                        ประวัติโรงพยาบาลโนนคูณ
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about/management" className="hover:underline hover:opacity-90">
                                        โครงสร้างการบริหารงาน
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about/vision" className="hover:underline hover:opacity-90">
                                        วิสัยทัศน์
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about/strategy" className="hover:underline hover:opacity-90">
                                        ยุทธศาสตร์โรงพยาบาลโนนคูณ
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 2: Contact */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold md:text-2xl">ติดต่อเรา</h3>
                            <div className="font-light">
                                <p>โทร 045 659 044</p>
                            </div>
                        </div>

                        {/* Column 3: Address */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold md:text-2xl">ที่อยู่</h3>
                            <div className="font-light leading-relaxed">
                                <p>เลขที่ 57 หมู่ 12 ตำบลโนนค้อ อำเภอโนนคูณ</p>
                                <p>จังหวัดศรีสะเกษ 33250</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="bg-[#0f9f94] py-4 text-center">
                <div className="container mx-auto px-4">
                    <p className="text-sm font-light text-white/90">
                        Copyright โรงพยาบาลโนนคูณ
                    </p>
                </div>
            </div>
        </footer>
    )
}
