import { isAuthenticated } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react'

const AuthLayout = async ({ children }: { children: ReactNode }) => {
    const isUserAuthenticated = await isAuthenticated();

    if (isUserAuthenticated) redirect('/');
    return (
        <div className='auth-layout'>
            <h1>{children}</h1>
        </div>
    )
}

export default AuthLayout
