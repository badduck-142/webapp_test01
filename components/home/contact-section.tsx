
"use client"

import { Phone, MapPin, Mail, Clock, Facebook, MessageCircle } from "lucide-react"

export function ContactSection() {
    return (
        <section className="bg-slate-50 py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="inline-block border-b-3 border-[#13cdbf] pb-2 text-3xl font-bold text-gray-800">
                        ติดต่อเรา
                    </h2>
                    <p className="mt-4 text-gray-500">
                        ช่องทางการติดต่อและแผนที่ตั้งโรงพยาบาล
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                    {/* Contact Info Column */}
                    <div className="flex flex-col justify-center space-y-8 rounded-2xl bg-white p-8 shadow-lg md:p-12">
                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#13cdbf]/10 text-[#13cdbf]">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="mb-2 text-xl font-bold text-gray-800">ที่อยู่</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    เลขที่ 57 หมู่ 12 ตำบลโนนค้อ <br />
                                    อำเภอโนนคูณ จังหวัดศรีสะเกษ 33250
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#13cdbf]/10 text-[#13cdbf]">
                                <Phone className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="mb-2 text-xl font-bold text-gray-800">เบอร์โทรศัพท์</h3>
                                <p className="text-gray-600">045-659-044</p>
                                <p className="text-red-500 font-semibold mt-1">แจ้งเหตุฉุกเฉิน 1669</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#13cdbf]/10 text-[#13cdbf]">
                                <Clock className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="mb-2 text-xl font-bold text-gray-800">เวลาทำการ</h3>
                                <p className="text-gray-600">จันทร์ - ศุกร์ : 08.00 - 16.00 น.</p>
                                <p className="text-gray-600">แผนกฉุกเฉิน : 24 ชั่วโมง</p>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-gray-100">
                            <h3 className="mb-4 text-lg font-semibold text-gray-800">ช่องทางออนไลน์</h3>
                            <div className="flex gap-4">
                                <a
                                    href="https://www.facebook.com/nonkhunhos"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors"
                                >
                                    <Facebook className="h-5 w-5" />
                                    <span>Facebook</span>
                                </a>
                                {/* <a href="#" className="flex items-center gap-2 rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600 transition-colors">
                                    <MessageCircle className="h-5 w-5" />
                                    <span>Line Official</span>
                                </a> */}
                            </div>
                        </div>
                    </div>

                    {/* Google Map Column */}
                    <div className="h-[400px] w-full overflow-hidden rounded-2xl bg-gray-200 shadow-lg lg:h-full min-h-[400px]">
                        <iframe
                            width="100%"
                            height="100%"
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?q=โรงพยาบาลโนนคูณ&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight={0}
                            marginWidth={0}
                            title="Non Khun Hospital Map"
                            className="h-full w-full border-0"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}
