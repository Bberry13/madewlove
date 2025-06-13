import { createSlice } from "@reduxjs/toolkit";
import { refreshTokenThunk, signInThunk, signOutThunk, signUpThunk } from "../api/userThunkApi";
import type { UserType } from "../model/userTypes"


type UserStateType = {
    user: UserType | null;
    isInitialized: boolean;
    loading: boolean;
    error: string | null;
}

const initialState: UserStateType = {
    user: null,
    isInitialized: false,
    loading: false,
    error: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        // токены
        .addCase(refreshTokenThunk.pending, (state) => {
            state.loading = true;
        })
        .addCase(refreshTokenThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.isInitialized = true;
            state.user = action.payload.data.user
        })
        .addCase(refreshTokenThunk.rejected, (state, action) => {
            state.error = action.payload?.message || 'Ошибка получения токена';
        })
        // рега
        .addCase(signUpThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(signUpThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.isInitialized = true;
            state.user = action.payload?.data.user
        })
        .addCase(signUpThunk.rejected, (state, action) => {
            state.error = action.payload?.message || 'Ошибка регистрации'
        })
        // авторизация 
        .addCase(signInThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(signInThunk.fulfilled, (state,action) => {
            state.loading = false;
            state.isInitialized = true;
            state.user = action.payload?.data.user
        })
        .addCase(signInThunk.rejected, (state, action) => {
            state.error = action.payload?.message || 'Ошибка входа в аккаунт'
        })
        // выход
        .addCase(signOutThunk.pending, (state) => {
            state.loading = true;
        })
        .addCase(signOutThunk.fulfilled, (state) => {
            state.loading = false;
            state.isInitialized = false;
            state.user = null;
        })
        .addCase(signOutThunk.rejected, (state,action) => {
            state.error = action.payload?.message || 'Ошибка выхода из аккаунта'
        })
    },

}) 

export const userReducer = userSlice.reducer;