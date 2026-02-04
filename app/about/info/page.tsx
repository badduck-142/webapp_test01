import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, Target, Eye, History, Heart, Compass } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

import HospitalExterior from "@/assets/hospital_building_exterior_1770088475262.png";
import HospitalReception from "@/assets/hospital_reception_area_1770088490932.png";
import HospitalDoctor from "@/assets/hospital_doctor_consultation_1770088509839.png";

export default function HospitalInfoPage() {
    const images = [
        { src: HospitalExterior, alt: "Hospital Exterior" },
        { src: HospitalReception, alt: "Hospital Reception" },
        { src: HospitalDoctor, alt: "Doctor Consultation" },
    ];

    return (
        <div className="container mx-auto px-4 py-8 space-y-8">
            {/* Page Header */}
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold text-teal-700">ข้อมูลโรงพยาบาล</h1>
                <div className="h-1 w-20 bg-teal-500 mx-auto rounded-full" />
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    โรงพยาบาลโนนคูณ มุ่งมั่นให้บริการด้านสุขภาพที่มีคุณภาพ เพื่อคุณภาพชีวิตที่ดีของชุมชน
                </p>
            </div>

            {/* Image Slider */}
            <div className="flex justify-center w-full">
                <Carousel className="w-full max-w-4xl" opts={{ loop: true }}>
                    <CarouselContent>
                        {images.map((image, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <div className="overflow-hidden rounded-xl shadow-lg border border-teal-100 relative aspect-[16/9]">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

            {/* History Section */}
            <Card className="border-teal-100 shadow-md">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="p-2 bg-teal-100 rounded-full text-teal-600">
                        <History className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl text-teal-800">ประวัติความเป็นมา</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                        เดิมอำเภอโนนคูณขึ้นอยู่ในเขตปกครองของอำเภอกันทรารมย์จังหวัดศรีสะเกษยกฐานะเป็นกิ่งอำเภอโนนคูณ เมื่อวันที่ 1 กันยายน 2520 เปิดทำการเมื่อวันที่ 17 กันยายน 2520
                        โดยอาศัยศาลาการเปรียญ วัดทักษิณธรรมนิเวศน์(วัดนอก)บ้านโนนค้อ ตำบลโนนค้อ เป็นที่ทำการชั่วคราว ต่อมาได้งบประมาณก่อสร้างอาคารที่ว่าการอำเภอขึ้นที่บ้านโนนคูณ หมู่ 2 ตำบลโนนค้อ
                        เมื่อแล้วเสร็จจึงได้ย้ายที่ทำการไปอยู่ที่ว่าการกิ่งอำเภอ เมื่อวันที่ 5 เมษายน 2524 และได้มีพระราชกฤษฎีกายกฐานะเป็นอำเภอ เมื่อวันที่ 31 ธันวาคม 2530
                    </p>
                    <p>
                        ปัจจุบันอาคารที่ว่าการอำเภอโนนคูณ ตั้งอยู่ที่บ้านร่องเก้า หมู่ที่ 12 ตำบลโนนค้อ อำเภอโนนคูณ จังหวัดศรีสะเกษอำเภอโนนคูณ ประกอบด้วย 5 ตำบล มีพื้นที่ 256,843 ตารางกิโลเมตร
                        ซึ่งตั้งอยู่ทางทิศตะวันออก ของจังหวัดศรีสะเกษ เป็นระยะทาง 60 กิโลเมตร พื้นที่ล้อมรอบ ทิศเหนือเป็นอำเภอกันทรารมย์ จังหวัดศรีสะเกษ และอำเภอสำโรง จังหวัดอุบลราชธานี ทิศใต้ติดต่อกับอำเภอเบญจลักษ์ จังหวัดศรีสะเกษ
                        ทิศตะวันออกติดต่อกับอำเภอเดชอุดม จังหวัดอุบลราชธานี ทิศตะวันตกติดต่อกับอำเภอน้ำเกลี้ยงและอำเภอกันทรารมย์ จังหวัดศรีสะเกษ
                    </p>
                    <p>การปกครองในอำเภอ ประกอบด้วย 5 ตำบล 80 หมู่บ้าน 7,428 หลังคาเรือน ประชากรทั้งหมด 38,695 คนประชาชนส่วนใหญ่ ประกอบอาชีพเกษตรกรรม คือ ทำนา ร้อยละ 95
                        โรงพยาบาลโนนคูณตั้งอยู่เลขที่ 57 หมู่ 12 ตำบลโนนค้อ อำเภอโนนคูณ จังหวัดศรีสะเกษมีพื้นที่ 39 ไร่ 2 งาน 86 ตารางวา สถานที่ใกล้เคียงคือ สำนักงานสาธารณสุขอำเภอโนนคูณห่างจากจังหวัดศรีสะเกษ 60
                        กิโลเมตร ห่างจากจังหวัดอุบลราชธานี 40 กิโลเมตร
                    </p>
                </CardContent>
            </Card>
            <br />
            <br />
        </div>
    );
}
