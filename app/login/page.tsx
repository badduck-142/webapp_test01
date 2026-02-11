'use client'

import { useActionState } from 'react'
import { login } from '@/lib/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Monitor } from 'lucide-react'

export default function LoginPage() {
    const [state, formAction, isPending] = useActionState(login, null)

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-md shadow-lg border-teal-100">
                <CardHeader className="space-y-4 text-center pb-8">
                    <div className="flex justify-center">
                        <div className="bg-teal-50 p-4 rounded-2xl">
                            <Monitor className="w-10 h-10 text-teal-600" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <CardTitle className="text-2xl font-bold text-slate-800">
                            IT Service Login
                        </CardTitle>
                        <CardDescription className="text-slate-500">
                            เข้าสู่ระบบแจ้งซ่อมออนไลน์
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <form action={formAction} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="username" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-700">
                                Username
                            </label>
                            <Input
                                id="username"
                                name="username"
                                placeholder="กรอกชื่อผู้ใช้งาน"
                                required
                                className="h-11 bg-white border-slate-200 focus:border-teal-500 focus:ring-teal-500 text-gray-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-700">
                                Password
                            </label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="••••••••"
                                required
                                className="h-11 bg-white border-slate-200 focus:border-teal-500 focus:ring-teal-500 text-gray-500"
                            />
                        </div>

                        {state?.error && (
                            <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg border border-red-100">
                                {state.error}
                            </div>
                        )}

                        <Button
                            type="submit"
                            className="w-full bg-teal-600 hover:bg-teal-700 h-11 text-white shadow-sm hover:shadow-md transition-all cursor-pointer"
                            disabled={isPending}
                        >
                            {isPending ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
