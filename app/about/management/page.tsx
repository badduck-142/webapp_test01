import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, UserCircle } from "lucide-react";

export default function ManagementPage() {
    // specific staff data provided
    // specific staff data provided
    const realStaff = [
        { id: 1, groupName: "กลุ่มงานการแพทย์", name: "นางสาวสาวิตรี มิพล", position: "แพทย์ชำนาญการพิเศษ" },
        { id: 2, groupName: "กลุ่มงานการพยาบาล", name: "นายวีระชาติ วรธรรม", position: "พยาบาลวิชาชีพชำนาญการพิเศษ" },
        { id: 3, groupName: "กลุ่มงานบริการด้านปฐมภูมิและองค์รวม", name: "นางกมลรัตน์ จูมสีมา", position: "พยาบาลวิชาชีพชำนาญการพิเศษ" },
        { id: 4, groupName: "กลุ่มงานเภสัชกรรมและคุ้มครองผู้บริโภค", name: "นางเบญจมาศ บุดดาวงค์", position: "เภสัชกรชำนาญการพิเศษ" },
        { id: 5, groupName: "กลุ่มงานประกันสุขภาพยุทธศาสตร์", name: "นายพรชัย คำจันทร์ลา", position: "พยาบาลวิชาชีพชำนาญการพิเศษ" },
        { id: 6, groupName: "กลุ่มงานพัฒนาคุณภาพ", name: "นางนิตยา จงรักษ์", position: "พยาบาลวิชาชีพชำนาญการพิเศษ" },
        { id: 7, groupName: "กลุ่มงานบริหารทั่วไป", name: "รอข้อมูล", position: "-" },
        { id: 8, groupName: "กลุ่มงานทันตกรรม", name: "นางสางกิตติยา พรหมชาติ", position: "ทันตแพทย์ชำนาญการ" },
        { id: 9, groupName: "กลุ่มงานเทคนิคการแพทย์", name: "นางเพลินพิศ บุญชาลี", position: "นักเทคนิคการแพทย์ชำนาญการ" },
        { id: 10, groupName: "กลุ่มงานจิตเวชและยาเสพติด", name: "นางพนิดา สารกอง", position: "พยาบาลวิชาชีพชำนาญการ" },
        { id: 11, groupName: "กลุ่มงานเวชกรรมฟื้นฟู", name: "นางสาวสงกานต์ ทองแท่น", position: "นักกายภาพปฏิบัติการ" },
        { id: 12, groupName: "กลุ่มงานการแพทย์แผนไทยและการแพทย์ทางเลือก", name: "นายสุวิทย์ สุภาพ", position: "เจ้าพนักงานสาธารณสุขชุมชนชำนาญงาน" },
        { id: 13, groupName: "กลุ่มงานรังสีวิทยา", name: "นายสุทธินันท์ จันทร์แจ้ง", position: "เจ้าพนักงานรังสีการแพทย์ชำนาญงาน" },
        { id: 14, groupName: "กลุ่มงานโภชนศาสตร์", name: "นางเสาวภา บัวศรียอด", position: "เจ้าพนักงานโภชนาการชำนาญงาน" },
    ];

    // Generate placeholders for the rest (up to 15)
    const placeholders = Array.from({ length: 1 }, (_, i) => ({
        id: i + 15,
        groupName: "กลุ่มงาน...",
        name: `ชื่อ-นามสกุล ${i + 15}`,
        position: "ตำแหน่งหัวหน้ากลุ่มงาน...",
    }));

    const staffMembers = [...realStaff, ...placeholders];

    return (
        <div className="container mx-auto px-4 py-8 space-y-12">
            {/* Page Header */}
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold text-teal-700">โครงสร้างการบริหารงาน</h1>
                <div className="h-1 w-20 bg-teal-500 mx-auto rounded-full" />
            </div>

            {/* Director Section */}
            <div className="flex justify-center">
                <Card className="w-full max-w-sm border-teal-200 shadow-lg bg-teal-50/50">
                    <CardContent className="flex flex-col items-center p-8 text-center space-y-4">
                        <div className="w-48 h-48 bg-teal-100 rounded-full flex items-center justify-center border-4 border-white shadow-sm">
                            <User className="w-24 h-24 text-teal-600" />
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-xl font-bold text-teal-800">นายแพทย์ธนสันตชัย พรหมบุตร</h2>
                            <p className="text-teal-600 font-medium">ผู้อำนวยการโรงพยาบาลโนนคูณ</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Staff Grid Section */}
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-teal-800 text-center border-b pb-4 border-teal-100">
                    หัวหน้ากลุ่มงาน
                </h3>

                {/* Grid: 1 column mobile, 2 tablet, 4 desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {staffMembers.map((staff) => (
                        <Card key={staff.id} className="border-teal-100 hover:shadow-md transition-all hover:border-teal-200 group">
                            <CardContent className="flex flex-col items-center p-6 text-center space-y-4">
                                <div className="text-sm font-medium text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
                                    {staff.groupName}
                                </div>
                                <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-teal-50 transition-colors">
                                    <UserCircle className="w-16 h-16 text-gray-400 group-hover:text-teal-500 transition-colors" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">{staff.name}</h4>
                                    <p className="text-sm text-gray-500">{staff.position}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
