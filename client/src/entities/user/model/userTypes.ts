// Тип авторизации
export interface ISignInData {
    email: string;
    password: string;
}

// Тип регистрации
export interface ISignUpData extends ISignInData {
    name: string;
}

// Тип юзера
export type UserType = {
    id: string;
    email: string;
    name: string;
    createdAt: string;
    updatedAt: string;
}
// Тип юзера с токеном доступа
export type UserWithTokenType = {
    user: UserType;
    accessToken: string;
    // refreshToken: string;
}

// тип ответа для получения кода на почту
export type UserCodeForTwoFAType = {
    userId: number;
}