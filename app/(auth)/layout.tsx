import React, { ReactNode } from 'react'

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='auth-layout'>
            <h1>{children}</h1>
        </div>
    )
}

export default AuthLayout
