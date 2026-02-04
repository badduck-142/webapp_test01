import { Card, CardContent } from "@/components/ui/card";
import {
    Stethoscope,
    HeartHandshake,
    Users,
    Pill,
    ShieldPlus,
    Award,
    Briefcase,
    Smile,
    Microscope,
    Brain,
    Dumbbell,
    Flower2,
    Scan,
    Utensils,
    Ambulance,
    Baby,
    UserPlus,
    Bed,
    Siren,
    Monitor,
} from "lucide-react";

export default function DepartmentsPage() {
    const departments = [
        { id: 1, name: "กลุ่มงานการแพทย์", icon: Stethoscope, color: "text-blue-500", bg: "bg-blue-50" },
        { id: 2, name: "กลุ่มงานการพยาบาล", icon: HeartHandshake, color: "text-pink-500", bg: "bg-pink-50" },
        { id: 3, name: "กลุ่มงานบริการด้านปฐมภูมิและองค์รวม", icon: Users, color: "text-green-500", bg: "bg-green-50" },
        { id: 4, name: "กลุ่มงานเภสัชกรรมและคุ้มครองผู้บริโภค", icon: Pill, color: "text-teal-500", bg: "bg-teal-50" },
        { id: 5, name: "กลุ่มงานประกันสุขภาพยุทธศาสตร์", icon: ShieldPlus, color: "text-indigo-500", bg: "bg-indigo-50" },
        { id: 6, name: "กลุ่มงานพัฒนาคุณภาพ", icon: Award, color: "text-yellow-500", bg: "bg-yellow-50" },
        { id: 7, name: "กลุ่มงานบริหารทั่วไป", icon: Briefcase, color: "text-slate-500", bg: "bg-slate-50" },
        { id: 8, name: "กลุ่มงานทันตกรรม", icon: Smile, color: "text-sky-500", bg: "bg-sky-50" },
        { id: 9, name: "กลุ่มงานเทคนิคการแพทย์", icon: Microscope, color: "text-purple-500", bg: "bg-purple-50" },
        { id: 10, name: "กลุ่มงานจิตเวชและยาเสพติด", icon: Brain, color: "text-rose-500", bg: "bg-rose-50" },
        { id: 11, name: "กลุ่มงานเวชกรรมฟื้นฟู", icon: Dumbbell, color: "text-orange-500", bg: "bg-orange-50" },
        { id: 12, name: "กลุ่มงานการแพทย์แผนไทยและการแพทย์ทางเลือก", icon: Flower2, color: "text-emerald-500", bg: "bg-emerald-50" },
        { id: 13, name: "กลุ่มงานรังสีวิทยา", icon: Scan, color: "text-gray-600", bg: "bg-gray-100" },
        { id: 14, name: "กลุ่มงานโภชนศาสตร์", icon: Utensils, color: "text-lime-500", bg: "bg-lime-50" },
        { id: 15, name: "งานยานพาหนะ", icon: Ambulance, color: "text-red-500", bg: "bg-red-50" },
        { id: 16, name: "งานการพยาบาลผู้คลอด", icon: Baby, color: "text-rose-400", bg: "bg-rose-50" },
        { id: 17, name: "งานการพยาบาลผู้ป่วยนอก", icon: UserPlus, color: "text-cyan-500", bg: "bg-cyan-50" },
        { id: 18, name: "งานการพยาบาลผู้ป่วยใน", icon: Bed, color: "text-blue-400", bg: "bg-blue-50" },
        { id: 19, name: "งานอุบัติเหตุฉุกเฉินและนิติเวช", icon: Siren, color: "text-red-600", bg: "bg-red-50" },
        { id: 20, name: "กลุ่มงานสุขภาพดิจิทัล", icon: Monitor, color: "text-blue-600", bg: "bg-blue-50" },
    ];

    return (
        <div className="container mx-auto px-4 py-12 space-y-12">
            {/* Page Header */}
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold text-teal-700">หน่วยงานภายในโรงพยาบาล</h1>
                <div className="h-1 w-20 bg-teal-500 mx-auto rounded-full" />
            </div>

            {/* Departments Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {departments.map((dept) => (
                    <div key={dept.id} className="flex flex-col items-center group cursor-pointer">
                        <div className={`w-28 h-28 ${dept.bg} rounded-3xl flex items-center justify-center mb-4 transition-transform transform group-hover:scale-110 shadow-sm border border-transparent group-hover:border-teal-100 duration-300`}>
                            <dept.icon className={`w-14 h-14 ${dept.color}`} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-center font-medium text-gray-700 group-hover:text-teal-600 transition-colors duration-200 px-2 leading-tight">
                            {dept.name}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
