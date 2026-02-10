"use client";

import { useState } from "react";
import { Clock, Download, HardDrive, Headset, Monitor, Search, Server, Trash2, Wifi, Wrench, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { createTicket } from "@/app/actions";
import { Ticket, User } from "@prisma/client";

// Types
type Priority = 'Low' | 'Medium' | 'High' | 'Critical';
type Status = 'Waiting' | 'In Progress' | 'Done' | 'Cancelled';

const PRIORITY_LABELS: Record<string, string> = {
    'Low': 'ต่ำ',
    'Medium': 'ปานกลาง',
    'High': 'สูง',
    'Critical': 'วิกฤต',
    'NORMAL': 'ปกติ', // Matches Prisma default if used
    'LOW': 'ต่ำ',
    'HIGH': 'สูง',
    'CRITICAL': 'วิกฤต'
};

const STATUS_LABELS: Record<string, string> = {
    'Waiting': 'รอ',
    'In Progress': 'กำลังดำเนินการ',
    'Done': 'เสร็จสิ้น',
    'Cancelled': 'ยกเลิก',
    'PENDING': 'รอ',
    'DOING': 'กำลังดำเนินการ',
    'DONE': 'เสร็จสิ้น'
};

type TicketWithUser = Ticket & { user: User };

interface ServiceContentProps {
    initialTickets: TicketWithUser[];
}

export default function ServiceContent({ initialTickets }: ServiceContentProps) {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    // Form State for controlled inputs (optional with Server Actions but good for UX)
    const [department, setDepartment] = useState("");
    const [issue, setIssue] = useState("");
    const [priority, setPriority] = useState<string>("NORMAL");

    // Client-side wrapper for the Server Action
    const handleSubmit = async (formData: FormData) => {
        await createTicket(formData);
        setIsDialogOpen(false);
        setIssue("");
        setDepartment("");
        setPriority("NORMAL");
    };

    return (
        <div className="min-h-screen bg-slate-50 pb-10">
            {/* Header Section */}
            <header className="bg-white border-b border-teal-100 shadow-sm sticky top-0 z-10">
                <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-teal-50 p-2 rounded-lg">
                            <Monitor className="text-white w-6 h-6" />
                        </div>
                        <h1 className="text-xl font-bold text-slate-800">ศูนย์คอมพิวเตอร์ <span className="text-teal-600 font-medium text-base ml-1">IT Center</span></h1>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8 space-y-8">
                {/* Section A: System Status Monitor */}
                <section>
                    <div className="flex items-center gap-2 mb-4">
                        <h2 className="text-lg font-semibold text-slate-700">System Status</h2>
                        <div className="h-px bg-slate-200 flex-1"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <StatusCard
                            name="Internet Status"
                            status="Online"
                            icon={<Wifi className="w-5 h-5 text-teal-600" />}
                            isOnline={true}
                        />
                        <StatusCard
                            name="HIS Server"
                            status="Normal"
                            icon={<Server className="w-5 h-5 text-teal-600" />}
                            isOnline={true}
                        />
                        <StatusCard
                            name="Intranet"
                            status="Normal"
                            icon={<HardDrive className="w-5 h-5 text-teal-600" />}
                            isOnline={true}
                        />
                    </div>
                </section>

                {/* Quick Actions */}
                <section>
                    <div className="flex items-center gap-2 mb-4">
                        <h2 className="text-lg font-semibold text-slate-700">Quick Actions</h2>
                        <div className="h-px bg-slate-200 flex-1"></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        <QuickActionCard
                            title="แจ้งซ่อมออนไลน์"
                            subtitle="Report Issue"
                            icon={<Wrench className="w-8 h-8 md:w-10 md:h-10 text-white" />}
                            onClick={() => setIsDialogOpen(true)}
                            highlight={true}
                        />
                        <QuickActionCard
                            title="ขอความช่วยเหลือด่วน"
                            subtitle="Remote Support"
                            icon={<Headset className="w-8 h-8 md:w-10 md:h-10 text-teal-600 group-hover:text-teal-700 transition-colors" />}
                            href="https://anydesk.com/en/downloads/windows"
                        />
                        <QuickActionCard
                            title="ดาวน์โหลดโปรแกรม/ไดรเวอร์"
                            subtitle="Downloads"
                            icon={<Download className="w-8 h-8 md:w-10 md:h-10 text-teal-600 group-hover:text-teal-700 transition-colors" />}
                            href="#"
                        />
                        <QuickActionCard
                            title="คู่มือการใช้งาน"
                            subtitle="Knowledge Base"
                            icon={<BookOpen className="w-8 h-8 md:w-10 md:h-10 text-teal-600 group-hover:text-teal-700 transition-colors" />}
                            href="#"
                        />
                    </div>
                </section>

                {/* Service Queue */}
                <section>
                    <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-2">
                            <h2 className="text-lg font-semibold text-slate-700">Service Queue</h2>
                            <div className="h-px bg-slate-200 w-12 md:w-24"></div>
                        </div>
                    </div>

                    <Card className="border-teal-100 shadow-sm overflow-hidden flex flex-col">
                        <CardHeader className="bg-teal-50/50 border-b border-teal-100 py-4">
                            <CardTitle className="text-base font-medium text-teal-900 flex items-center gap-2">
                                <Clock className="w-4 h-4" /> Live Queue
                            </CardTitle>
                        </CardHeader>
                        <div className="overflow-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[80px]">ID</TableHead>
                                        <TableHead>ผู้แจ้ง</TableHead>
                                        <TableHead>แผนก</TableHead>
                                        <TableHead className="w-[40%]">ปัญหา</TableHead>
                                        <TableHead>ความสำคัญ</TableHead>
                                        <TableHead>สถานะ</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {initialTickets.map((ticket) => (
                                        <TableRow key={ticket.id}>
                                            <TableCell className="font-medium text-slate-600">#{ticket.id}</TableCell>
                                            <TableCell>{ticket.user?.name || "Unknown"}</TableCell>
                                            <TableCell>{ticket.department}</TableCell>
                                            <TableCell className="max-w-[300px] truncate text-slate-500">{ticket.title}</TableCell>
                                            <TableCell>
                                                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
                                                    ${['HIGH', 'CRITICAL'].includes(ticket.priority) ? 'bg-red-100 text-red-700' :
                                                        ticket.priority === 'NORMAL' ? 'bg-blue-100 text-blue-700' :
                                                            'bg-slate-100 text-slate-700'}`}>
                                                    {PRIORITY_LABELS[ticket.priority] || ticket.priority}
                                                </span>
                                            </TableCell>
                                            <TableCell>
                                                <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium border
                                                    ${['PENDING', 'Waiting'].includes(ticket.status) ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                                                        ['DOING', 'In Progress'].includes(ticket.status) ? 'bg-blue-50 text-blue-700 border-blue-200' :
                                                            ['DONE', 'Done'].includes(ticket.status) ? 'bg-green-50 text-green-700 border-green-200' :
                                                                'bg-slate-100 text-slate-500 border-slate-200'}`}>
                                                    {STATUS_LABELS[ticket.status] || ticket.status}
                                                </span>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    {initialTickets.length === 0 && (
                                        <TableRow>
                                            <TableCell colSpan={6} className="text-center py-8 text-slate-500">
                                                ไม่พบรายการแจ้งซ่อม
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    </Card>
                </section>

                {/* Section C: Recent Downloads / Tools */}
                <section>
                    <div className="flex items-center gap-2 mb-4">
                        <h2 className="text-lg font-semibold text-slate-700">Recent Downloads & Tools</h2>
                        <div className="h-px bg-slate-200 flex-1"></div>
                    </div>
                    <Card className="border-teal-100 shadow-sm overflow-hidden">
                        <CardHeader className="bg-teal-50/50 border-b border-teal-100 py-4">
                            <CardTitle className="text-base font-medium text-teal-900">Common Tools</CardTitle>
                        </CardHeader>
                        <div className="divide-y divide-slate-100">
                            <DownloadItem name="Printer Driver HP P1102" type="Driver" version="v2023.1" />
                            <DownloadItem name="AnyDesk for Windows" type="Software" version="v7.1.0" />
                            <DownloadItem name="แบบฟอร์มขอ User Account" type="Document" version="PDF" />
                            <DownloadItem name="Google Chrome Enterprise" type="Browser" version="Latest" />
                        </div>
                    </Card>
                </section>

                {/* Dialog */}
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogContent className="sm:max-w-[600px] bg-white text-slate-900">
                        <DialogHeader>
                            <DialogTitle className="flex items-center gap-3 text-2xl font-bold text-slate-800">
                                <div className="bg-teal-100 p-3 rounded-xl">
                                    <Wrench className="w-6 h-6 text-teal-600" />
                                </div>
                                ระบบแจ้งปัญหา
                            </DialogTitle>
                        </DialogHeader>
                        <form action={handleSubmit} className="space-y-6 mt-4">
                            <div>
                                <label className="text-base font-semibold text-slate-700 mb-2 block">แผนก</label>
                                <Input
                                    name="department"
                                    placeholder="เช่น ผู้ป่วยนอก, ห้องฉุกเฉิน"
                                    value={department}
                                    onChange={(e) => setDepartment(e.target.value)}
                                    required
                                    className="bg-white h-11 text-base"
                                />
                            </div>
                            <div>
                                <label className="text-base font-semibold text-slate-700 mb-2 block">รายละเอียดปัญหา</label>
                                <textarea
                                    name="issue"
                                    className="flex w-full rounded-md border border-input bg-white px-3 py-3 text-base ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px]"
                                    placeholder="อธิบายปัญหาที่พบ..."
                                    value={issue}
                                    onChange={(e) => setIssue(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label className="text-base font-semibold text-slate-700 mb-2 block">ระดับความสำคัญ</label>
                                <input type="hidden" name="priority" value={priority} />
                                <div className="grid grid-cols-3 gap-3">
                                    {['NORMAL', 'HIGH', 'CRITICAL'].map((p) => (
                                        <button
                                            key={p}
                                            type="button"
                                            onClick={() => setPriority(p)}
                                            className={`text-base py-3 px-4 rounded-lg border transition-all ${priority === p
                                                ? 'bg-teal-50 border-teal-500 text-teal-700 font-bold shadow-sm ring-1 ring-teal-500'
                                                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                                        >
                                            {PRIORITY_LABELS[p] || p}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-end gap-3 mt-6">
                                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>ยกเลิก</Button>
                                <Button type="submit" className="bg-teal-600 text-white hover:bg-teal-700">ส่งคำร้อง</Button>
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>
            </main>
        </div>
    );
}

function QuickActionCard({ title, subtitle, icon, href, onClick, highlight = false }: { title: string, subtitle: string, icon: React.ReactNode, href?: string, onClick?: () => void, highlight?: boolean }) {
    const CardContainer = (
        <Card className={`h-full transition-all duration-200 hover:shadow-md hover:-translate-y-1 ${highlight ? 'bg-teal-500 border-teal-600 text-white' : 'bg-white hover:border-teal-300 border-slate-200'}`}>
            <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full gap-4">
                <div className={`${highlight ? 'bg-white/20' : 'bg-teal-50 group-hover:bg-teal-100'} p-4 rounded-2xl transition-colors`}>
                    {icon}
                </div>
                <div>
                    <h3 className={`font-bold text-lg mb-1 leading-tight ${highlight ? 'text-white' : 'text-slate-800'}`}>{title}</h3>
                    <p className={`text-sm ${highlight ? 'text-teal-100' : 'text-slate-500'}`}>{subtitle}</p>
                </div>
            </CardContent>
        </Card>
    );

    if (onClick) {
        return (
            <button onClick={onClick} className="block h-full group w-full text-left cursor-pointer" type="button">
                {CardContainer}
            </button>
        );
    }

    return (
        <a href={href} className="block h-full group">
            {CardContainer}
        </a>
    )
}

function StatusCard({ name, status, icon, isOnline }: { name: string, status: string, icon: React.ReactNode, isOnline: boolean }) {
    return (
        <Card className="border-l-4 border-l-teal-500 shadow-sm">
            <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="bg-teal-50 p-2 rounded-full">
                        {icon}
                    </div>
                    <div>
                        <p className="font-medium text-slate-700 text-sm">{name}</p>
                        <p className={`text-xs font-semibold ${isOnline ? 'text-green-600' : 'text-red-500'}`}>{status}</p>
                    </div>
                </div>
                <div className={`w-3 h-3 rounded-full ${isOnline ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
            </CardContent>
        </Card>
    )
}

function DownloadItem({ name, type, version }: { name: string, type: string, version: string }) {
    return (
        <div className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-4">
                <div className="bg-slate-100 p-2 rounded text-slate-500">
                    <Download className="w-5 h-5" />
                </div>
                <div>
                    <p className="text-sm font-medium text-slate-800">{name}</p>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-500">{type}</span>
                        <span className="text-xs text-slate-400">{version}</span>
                    </div>
                </div>
            </div>
            <Button variant="outline" size="sm" className="text-teal-600 border-teal-200 hover:bg-teal-50 hover:text-teal-700">
                Download
            </Button>
        </div>
    )
}
