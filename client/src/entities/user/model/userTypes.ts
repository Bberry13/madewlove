export interface IUserSignIn {
    email: string;
    password: string;
}

export interface IUserSignUp extends IUserSignIn {
    name: string;
}

export type UserType = {
    id: string;
    email: string;
    name: string;
    createdAt: string;
    updatedAt: string;
}

