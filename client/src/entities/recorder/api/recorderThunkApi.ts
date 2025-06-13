import { AxiosError } from 'axios';
import { axiosInstance } from '../../../shared/lib/axiosInstance';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type {
  IApiResponseSuccess,
  IApiResponseReject,
} from '../../../shared/types';
import type {
  TypeRecording,
  TypeRecordingResponse,
} from '../model/TypeRecording';
import { RECORDER_THUNKS_TYPES } from '../../../shared/enums/recorderThunksTypes';
import { RECORDER_THUNKS_ROUTES } from '../../../shared/enums/recorderThunkRoutes';

export const sendRecordingThunk = createAsyncThunk<
  IApiResponseSuccess<TypeRecordingResponse>,
  TypeRecording,
  { rejectValue: IApiResponseReject }
>(
  RECORDER_THUNKS_TYPES.SEND_RECORDING,
  async (recording, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post<
        IApiResponseSuccess<TypeRecordingResponse>
      >(RECORDER_THUNKS_ROUTES.SEND_RECORDING, recording);
      return data;
    } catch (error) {
      const err = error as AxiosError<IApiResponseReject>;
      return rejectWithValue(
        err.response?.data || {
          statusCode: 500,
          message: 'Ошибка при отправке записи',
          data: null,
          error: err.message || 'Unknown error',
        }
      );
    }
  }
);
