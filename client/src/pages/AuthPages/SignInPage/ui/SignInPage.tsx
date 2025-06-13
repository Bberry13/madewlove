import { SignInForm } from '@/features/auth/ui/SignInForm/SignInForm';
import React from 'react';

export function SignInPage(): React.JSX.Element {
    return (
        <div>
            <h1 className='text-center mt-3'>Sign In Page</h1>
            <SignInForm />
        </div>
    )
}