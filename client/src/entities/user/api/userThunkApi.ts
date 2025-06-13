import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance, setAccessToken } from "@/shared/lib/axiosInstance";
import type { IApiResponseSuccess, IApiResponseReject } from "@/shared/types";
import type {
  UserWithTokenType,
  ISignInData,
  ISignUpData,
} from "@/entities/user/model/userTypes";
import { USER_THUNK_TYPES } from "@/shared/enums/userThunkTypes";
import { AUTH_API_ROUTES } from "@/shared/enums/authApiRoutes";

// ! (non-null assertion) говорит TypeScript, что err.response точно существует
// ? (optional chaining) используется когда мы не уверены, существует ли свойство.

// Обновление токенов
export const refreshTokenThunk = createAsyncThunk<IApiResponseSuccess<UserWithTokenType>, void, ({rejectValue: IApiResponseReject}) >(USER_THUNK_TYPES.REFRESH_TOKEN, async (_, {rejectWithValue}) => {
    try {
        const { data } = await axiosInstance.get<IApiResponseSuccess<UserWithTokenType>>(AUTH_API_ROUTES.REFRESH_TOKEN)
        setAccessToken(data.data.accessToken)
        return data;
    } catch (error) {
        const err = error as AxiosError<IApiResponseReject>;
        return rejectWithValue(err.response!.data)
    }
});

export const signUpThunk = createAsyncThunk<IApiResponseSuccess<UserWithTokenType>, ISignUpData , {rejectValue : IApiResponseReject}>(USER_THUNK_TYPES.SIGN_UP, async (userData, {rejectWithValue}) => {
    try {
        const {data} = await axiosInstance.post<IApiResponseSuccess<UserWithTokenType>>(AUTH_API_ROUTES.SIGN_UP, userData);
        setAccessToken(data.data.accessToken)
        return data
    } catch (error) {
        const err = error as AxiosError<IApiResponseReject>
        return rejectWithValue(err.response!.data)
    }
})

export const signInThunk = createAsyncThunk<IApiResponseSuccess<UserWithTokenType>, ISignInData, {rejectValue: IApiResponseReject}>(USER_THUNK_TYPES.SIGN_IN, async (userData, {rejectWithValue}) => {
try {
    const { data } = await axiosInstance.post<IApiResponseSuccess<UserWithTokenType>>(AUTH_API_ROUTES.SIGN_IN, userData)
    setAccessToken(data.data.accessToken)
    return data
} catch (error) {
    const err = error as AxiosError<IApiResponseReject>
    return rejectWithValue(err.response!.data)
}
})

// в случае выхода из система лучше использовать метод delete или post,так как изменения происходят 
// на уровне удаления текущей сессии,
// текущего токена. Get запрос может кешироваться и менять состояние, например при перезагрзки страницы.
// delete в свою очеред может быть заблокирован некоторыми прокси.
// для реализации RestAPI лучше использовать post - так как этот метод не только про создание
// но про изменение на сервере. post более безопасен,  чем delete
export const signOutThunk = createAsyncThunk<
  IApiResponseSuccess<null>,
  void,
  { rejectValue: IApiResponseReject }
>(USER_THUNK_TYPES.SIGN_OUT, async (_, {rejectWithValue}) => {
    try {
        const { data } = await axiosInstance.post(AUTH_API_ROUTES.SIGN_OUT);
        setAccessToken('')
        return data
    } catch (error) {
        const err = error as AxiosError<IApiResponseReject>
        return rejectWithValue(err.response!.data);
    }
});