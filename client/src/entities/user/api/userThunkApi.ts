import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance, setAccessToken } from "@/shared/lib/axiosInstance";
import type { IApiResponseSuccess, IApiResponseReject } from "@/shared/types";
import type {
  UserWithTokenType,
  ISignInData,
  ISignUpData,
  Verify2FADataType,
  TwoFAResponseType,
  UserType,
} from "@/entities/user/model/userTypes";
import { USER_THUNK_TYPES } from "@/shared/enums/userThunkTypes";
import { AUTH_API_ROUTES } from "@/shared/enums/authApiRoutes";

// ! (non-null assertion) говорит TypeScript, что err.response точно существует
// ? (optional chaining) используется когда мы не уверены, существует ли свойство.

// Обновление токенов
export const refreshTokenThunk = createAsyncThunk<
  IApiResponseSuccess<UserWithTokenType>,
  void,
  { rejectValue: IApiResponseReject }
>(USER_THUNK_TYPES.REFRESH_TOKEN, async (_, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.post<
      IApiResponseSuccess<UserWithTokenType>
    >(AUTH_API_ROUTES.REFRESH_TOKEN);
    console.log("refreshTokenThunk full response:", JSON.stringify(data, null, 2));  // убрать когда пофиксю ошибки
    setAccessToken(data.data.accessToken);
    return data;
  } catch (error) {
    const err = error as AxiosError<IApiResponseReject>;
    console.error("refreshTokenThunk error:", err.response?.data);
    return rejectWithValue(err.response!.data);
  }
});

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
>(USER_THUNK_TYPES.SIGN_OUT, async (_, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.post(
      AUTH_API_ROUTES.SIGN_OUT
    );
    setAccessToken("");
    return data;
  } catch (error) {
    const err = error as AxiosError<IApiResponseReject>;
    return rejectWithValue(err.response!.data);
  }
});

// регистрация под 2FA
export const signUpThunk = createAsyncThunk<
  IApiResponseSuccess<TwoFAResponseType>,
  ISignUpData,
  { rejectValue: IApiResponseReject }
>(USER_THUNK_TYPES.SIGN_UP, async (userData, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.post<
      IApiResponseSuccess<TwoFAResponseType>
    >(AUTH_API_ROUTES.SIGN_UP, userData);
    return data;
  } catch (error) {
    const err = error as AxiosError<IApiResponseReject>;
    return rejectWithValue(err.response!.data);
  }
});

// санка на подтверждение почты при реге
export const verifySignUp2FAThunk = createAsyncThunk<
  IApiResponseSuccess<UserWithTokenType>,
  Verify2FADataType,
  { rejectValue: IApiResponseReject }
>(
  USER_THUNK_TYPES.SIGN_UP_VERIFY_FA,
  async (verifyData, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post<
        IApiResponseSuccess<UserWithTokenType>
      >(AUTH_API_ROUTES.SIGN_UP_2FA, verifyData);
      setAccessToken(data.data.accessToken);
      return data;
    } catch (error) {
      const err = error as AxiosError<IApiResponseReject>;
      return rejectWithValue(err.response!.data);
    }
  }
);

// санка на вход
export const signInThunk = createAsyncThunk<
  IApiResponseSuccess<UserWithTokenType | TwoFAResponseType>,
  ISignInData,
  { rejectValue: IApiResponseReject }
>(USER_THUNK_TYPES.SIGN_IN, async (userData, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.post<
      IApiResponseSuccess<UserWithTokenType | TwoFAResponseType>
    >(AUTH_API_ROUTES.SIGN_IN, userData);
    if ("accessToken" in data.data) {
      setAccessToken(data.data.accessToken);
    }
    return data;
  } catch (error) {
    const err = error as AxiosError<IApiResponseReject>;
    return rejectWithValue(err.response!.data);
  }
});

// Подтверждение 2FA при входе (для админов)
export const verifySignIn2FAForAdminThunk = createAsyncThunk<
  IApiResponseSuccess<UserWithTokenType>,
  Verify2FADataType,
  { rejectValue: IApiResponseReject }
>(
  USER_THUNK_TYPES.SIGN_IN_VERIFY_FA,
  async (verifyData, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post<
        IApiResponseSuccess<UserWithTokenType>
      >(AUTH_API_ROUTES.SIGN_IN_2FA, verifyData);
      setAccessToken(data.data.accessToken);
      return data;
    } catch (error) {
      const err = error as AxiosError<IApiResponseReject>;
      return rejectWithValue(err.response!.data);
    }
  }
);

// получение текующего юзера
export const getProfileThunk = createAsyncThunk<
  IApiResponseSuccess<UserType>,
  void,
  { rejectValue: IApiResponseReject }
>(USER_THUNK_TYPES.GET_PROFILE, async (_, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get<IApiResponseSuccess<UserType>>(
      "/auth/me",
      { withCredentials: true }
    );
    console.log("getProfileThunk data:", data); // Для отладки
    return data;
  } catch (error) {
    const err = error as AxiosError<IApiResponseReject>;
    console.error("getProfileThunk error:", err.response?.data);
    return rejectWithValue(err.response?.data || {
      statusCode: 500,
      message: "Ошибка получения профиля",
      data: null,
      error: err.message || "Unknown error",
    });
  }
});