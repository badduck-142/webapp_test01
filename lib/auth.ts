'use server'

import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'

const SECRET_KEY = new TextEncoder().encode('secret-key-change-me')
const ALG = 'HS256'

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: ALG })
        .setIssuedAt()
        .setExpirationTime('1d') // Set expiration time to 1 day
        .sign(SECRET_KEY)
}

export async function decrypt(input: string): Promise<any> {
    const { payload } = await jwtVerify(input, SECRET_KEY, {
        algorithms: [ALG],
    })
    return payload
}

export async function login(prevState: any, formData: FormData) {

    const username = formData.get('username') as string
    const password = formData.get('password') as string

    // Query the database
    const user = await prisma.user.findUnique({
        where: { username },
    })

    // Compare the password (plain text for now)
    // TODO: Implement bcrypt later
    if (!user || user.password !== password) {
        // Handle invalid credentials
        // For now, we can just return an error or throw
        // Since this is a server action, returning an object is better
        return { error: 'Invalid username or email' }
    }

    // Create JWT payload
    const payload = {
        userId: user.id,
        role: user.role,
        name: user.name,
        department: user.department,
        tel: user.tel,
    }

    // Create the session
    const token = await encrypt(payload)

    // Set the cookie
    const cookieStore = await cookies()

    // Set the cookie with proper options
    cookieStore.set('session', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
    })

    // Redirect to /it-service
    redirect('/it-service')
}

export async function logout() {

    const cookieStore = await cookies()
    cookieStore.delete('session')
    redirect('/')
}

export async function getSession() {
    const cookieStore = await cookies()
    const session = cookieStore.get('session')?.value
    if (!session) return null
    try {
        return await decrypt(session)
    } catch (error) {
        return null
    }
}
