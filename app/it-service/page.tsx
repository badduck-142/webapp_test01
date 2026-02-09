"use client";

import { useState } from "react";
import { ArrowRight, BookOpen, CheckCircle, Clock, Download, HardDrive, Headset, Monitor, Plus, Search, Server, ShieldAlert, Trash2, Wifi, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

// Types
type Priority = 'Low' | 'Medium' | 'High' | 'Critical';
type Status = 'Waiting' | 'In Progress' | 'Done' | 'Cancelled';

interface RepairTicket {
    id: string;
    name: string;      // Added
    department: string;
    contact: string;   // Added
    issue: string;
    priority: Priority;
    status: Status;
    timestamp: string;
}


const PRIORITY_LABELS: Record<Priority, string> = {
    'Low': 'ต่ำ',
    'Medium': 'ปานกลาง',
    'High': 'สูง',
    'Critical': 'วิกฤต'
};

const STATUS_LABELS: Record<Status, string> = {
    'Waiting': 'รอ',
    'In Progress': 'กำลังดำเนินการ',
    'Done': 'เสร็จสิ้น',
    'Cancelled': 'ยกเลิก'
};

// Mock Data
const currentUser = {
    name: 'พยาบาลวิชาชีพ ใจดี (Nursing Staff)',
    department: 'OPD (ผู้ป่วยนอก)',
    employeeId: 'NUR-001',
    ext: '1120'
};

const INITIAL_TICKETS: RepairTicket[] = [
    { id: 'REQ-001', name: 'User A', contact: '1001', department: 'ER', issue: 'Printer jammed', priority: 'High', status: 'Waiting', timestamp: '10:00 AM' },
    { id: 'REQ-002', name: 'User B', contact: '1002', department: 'OPD', issue: 'Cannot access HIS', priority: 'Critical', status: 'In Progress', timestamp: '09:45 AM' },
    { id: 'REQ-003', name: 'User C', contact: '1003', department: 'Admin', issue: 'Screen flickering', priority: 'Low', status: 'Done', timestamp: 'Yesterday' },
];

export default function ITServicePage() {
    const [tickets, setTickets] = useState<RepairTicket[]>(INITIAL_TICKETS);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    // Form State
    const [name, setName] = useState(currentUser.name); // Pre-fill name
    const [department, setDepartment] = useState(currentUser.department); // Pre-fill department
    const [contact, setContact] = useState(currentUser.ext); // Pre-fill contact/ext
    const [issue, setIssue] = useState("");
    const [priority, setPriority] = useState<Priority>("Medium");

    // Reset form to current user data when dialog opens/closes or submits
    const resetForm = () => {
        setName(currentUser.name);
        setDepartment(currentUser.department);
        setContact(currentUser.ext);
        setIssue("");
        setPriority("Medium");
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newTicket: RepairTicket = {
            id: `คิวที่-00${tickets.length + 1}`,
            name,
            department,
            contact,
            issue,
            priority,
            status: 'Waiting',
            timestamp: 'Just now'
        };
        setTickets([newTicket, ...tickets]);
        resetForm();
        setIsDialogOpen(false);
    };

    const updateStatus = (id: string, newStatus: Status) => {
        setTickets(tickets.map(t => t.id === id ? { ...t, status: newStatus } : t));
    };

    const deleteTicket = (id: string) => {
        if (window.confirm('Are you sure you want to delete this ticket?')) {
            setTickets(tickets.filter(t => t.id !== id));
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 pb-10">
            {/* Header Section */}
            <header className="bg-white border-b border-teal-100 shadow-sm sticky top-0 z-10">
                <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-teal-500 p-2 rounded-lg">
                            <Monitor className="text-white w-6 h-6" />
                        </div>
                        <h1 className="text-xl font-bold text-slate-800">ศูนย์คอมพิวเตอร์ <span className="text-teal-600 font-medium text-base ml-1">IT Center</span></h1>
                    </div>
                    <div className="relative w-full md:w-96 flex gap-2">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                            <Input
                                type="text"
                                placeholder="Search..."
                                className="pl-9 bg-slate-50 border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                            />
                        </div>
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

                {/* Section B: Quick Actions */}
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

                {/* Section: Online Repair System */}
                <section className="scroll-mt-20" id="repair-system">
                    <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-2">
                            <h2 className="text-lg font-semibold text-slate-700">Service Queue</h2>
                            <div className="h-px bg-slate-200 w-12 md:w-24"></div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-slate-500 font-medium">Simulate Admin Mode</span>
                            <button
                                onClick={() => setIsAdmin(!isAdmin)}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${isAdmin ? 'bg-teal-600' : 'bg-slate-200'}`}
                            >
                                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isAdmin ? 'translate-x-6' : 'translate-x-1'}`} />
                            </button>
                        </div>
                    </div>

                    <div className="w-full">
                        {/* Queue Table */}
                        <Card className="border-teal-100 shadow-sm overflow-hidden flex flex-col">
                            <CardHeader className="bg-teal-50/50 border-b border-teal-100 py-4">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-base font-medium text-teal-900 flex items-center gap-2">
                                        <Clock className="w-4 h-4" /> Live Queue
                                    </CardTitle>
                                    <div className="text-xs text-slate-500 bg-white px-2 py-1 rounded border border-slate-200">
                                        Live Updates
                                    </div>
                                </div>
                            </CardHeader>
                            <div className="overflow-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[100px]">ลำดับที่</TableHead>
                                            <TableHead>แผนก</TableHead>
                                            <TableHead className="w-[40%]">ปัญหา</TableHead>
                                            <TableHead>ระดับความสำคัญ</TableHead>
                                            <TableHead>สถานะ</TableHead>
                                            {isAdmin && <TableHead className="text-right">Actions</TableHead>}
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {tickets.map((ticket) => (
                                            <TableRow key={ticket.id}>
                                                <TableCell className="font-medium text-slate-600">{ticket.id}</TableCell>
                                                <TableCell>{ticket.department}</TableCell>
                                                <TableCell className="max-w-[300px] truncate text-slate-500">{ticket.issue}</TableCell>
                                                <TableCell>
                                                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
                                                        ${ticket.priority === 'Critical' ? 'bg-red-100 text-red-700' :
                                                            ticket.priority === 'High' ? 'bg-orange-100 text-orange-700' :
                                                                ticket.priority === 'Medium' ? 'bg-blue-100 text-blue-700' :
                                                                    'bg-slate-100 text-slate-700'}`}>
                                                        {PRIORITY_LABELS[ticket.priority]}
                                                    </span>
                                                </TableCell>
                                                <TableCell>
                                                    <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium border
                            ${ticket.status === 'Waiting' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                                                            ticket.status === 'In Progress' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                                                                ticket.status === 'Done' ? 'bg-green-50 text-green-700 border-green-200' :
                                                                    'bg-slate-100 text-slate-500 border-slate-200'}`}>
                                                        <span className={`w-1.5 h-1.5 rounded-full ${ticket.status === 'Waiting' ? 'bg-yellow-500' :
                                                            ticket.status === 'In Progress' ? 'bg-blue-500' :
                                                                ticket.status === 'Done' ? 'bg-green-500' :
                                                                    'bg-slate-400'
                                                            }`}></span>
                                                        {STATUS_LABELS[ticket.status]}
                                                    </span>
                                                </TableCell>
                                                {isAdmin && (
                                                    <TableCell className="text-right">
                                                        <div className="flex items-center justify-end gap-2">
                                                            <select
                                                                value={ticket.status}
                                                                onChange={(e) => updateStatus(ticket.id, e.target.value as Status)}
                                                                className="h-8 text-xs border border-slate-200 rounded px-2 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                                                            >
                                                                {Object.entries(STATUS_LABELS).map(([value, label]) => (
                                                                    <option key={value} value={value}>
                                                                        {label}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                            <Button
                                                                size="icon"
                                                                variant="ghost"
                                                                className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                                                                onClick={() => deleteTicket(ticket.id)}
                                                            >
                                                                <Trash2 className="w-4 h-4" />
                                                            </Button>
                                                        </div>
                                                    </TableCell>
                                                )}
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </Card>
                    </div>
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

                {/* Repair Request Dialog */}
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogContent className="sm:max-w-[600px] bg-white text-slate-900">
                        <DialogHeader>
                            <DialogTitle className="flex items-center gap-3 text-2xl font-bold text-slate-800">
                                <div className="bg-teal-100 p-3 rounded-xl">
                                    <Wrench className="w-6 h-6 text-teal-600" />
                                </div>
                                ระบบแจ้งปัญหา
                            </DialogTitle>
                            <DialogDescription className="text-base text-slate-600 mt-2">
                                กรุณากรอกรายละเอียดด้านล่างเพื่อส่งคำร้องไปยังทีมสนับสนุนด้านไอทีของเรา
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-base font-semibold text-slate-700 mb-2 block">ชื่อผู้แจ้ง</label>
                                    <Input
                                        value={name}
                                        readOnly
                                        className="bg-slate-100 text-slate-500 cursor-not-allowed h-11 text-base"
                                    />
                                </div>
                                <div>
                                    <label className="text-base font-semibold text-slate-700 mb-2 block">เบอร์โทรศัพท์/เบอร์ภายใน</label>
                                    <Input
                                        placeholder="เบอร์ติดต่อกลับ"
                                        value={contact}
                                        onChange={(e) => setContact(e.target.value)}
                                        required
                                        className="bg-white h-11 text-base"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-base font-semibold text-slate-700 mb-2 block">แผนก</label>
                                <Input
                                    placeholder="เช่น ผู้ป่วยนอก, ห้องฉุกเฉิน, ห้องทันตกรรม"
                                    value={department}
                                    onChange={(e) => setDepartment(e.target.value)}
                                    required
                                    className="bg-white h-11 text-base"
                                />
                            </div>
                            <div>
                                <label className="text-base font-semibold text-slate-700 mb-2 block">รายละเอียดปัญหา</label>
                                <textarea
                                    className="flex w-full rounded-md border border-input bg-white px-3 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px]"
                                    placeholder="อธิบายปัญหาที่พบ..."
                                    value={issue}
                                    onChange={(e) => setIssue(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label className="text-base font-semibold text-slate-700 mb-2 block">ระดับความสำคัญ</label>
                                <div className="grid grid-cols-3 gap-3">
                                    {(['Low', 'Medium', 'High'] as Priority[]).map((p) => (
                                        <button
                                            key={p}
                                            type="button"
                                            onClick={() => setPriority(p)}
                                            className={`text-base py-3 px-4 rounded-lg border transition-all ${priority === p
                                                ? 'bg-teal-50 border-teal-500 text-teal-700 font-bold shadow-sm ring-1 ring-teal-500 cursor-pointer'
                                                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 cursor-pointer'}`}
                                        >
                                            {PRIORITY_LABELS[p]}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-end gap-3 mt-6">
                                <Button type="button" variant="outline" size="lg" onClick={() => setIsDialogOpen(false)} className="text-base px-6 cursor-pointer">ยกเลิก</Button>
                                <Button type="submit" size="lg" className="bg-teal-600 hover:bg-teal-700 text-white text-base px-6 cursor-pointer">
                                    ส่งคำร้อง
                                </Button>
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>

            </main>
        </div>
    );
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
