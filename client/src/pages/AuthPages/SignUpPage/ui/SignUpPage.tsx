import { SignUpForm } from '@/features/auth/ui/SignUpForm/SignUpForm';
import  React from 'react';

export function SignUpPage(): React.JSX.Element {
    return (
        <div>
            <h1 className='text-center mt-3'>Регистрация</h1>
            <SignUpForm />
        </div>
    )
}