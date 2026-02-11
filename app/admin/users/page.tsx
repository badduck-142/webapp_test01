
import { getSession } from "@/lib/auth"
import { redirect } from "next/navigation"
import { getUsers } from "@/app/actions"
import { UserTable } from "./user-table"

export default async function AdminUsersPage() {
    const session = await getSession()

    // 1. Protect Route
    if (!session || session.role !== 'ADMIN') {
        redirect('/')
    }

    // 2. Fetch Data
    const users = await getUsers()

    return (
        <div className="container mx-auto py-10">
            <div className="flex flex-col space-y-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Admin Dashboard</h1>
                    <p className="text-muted-foreground">
                        Manage your application users and permissions here.
                    </p>
                </div>

                <UserTable initialUsers={users} />
            </div>
        </div>
    )
}
