import { UserThunkTypes } from "@/shared/enums/userThunkTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance, setAccessToken } from "@/shared/lib/axiosInstance";
import type { IApiResponseSuccess, IApiResponseReject } from "@/shared/types";


const refreshTokenThunk = createAsyncThunk<IApiResponseSuccess<>>