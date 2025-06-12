import { createSlice } from '@reduxjs/toolkit';
import { getAllPriceThunk, updatePriceThunk } from '../api/priceThunkApi';
import type { TypePrice } from '../model/TypePrice';

interface IPriceState {
  prices: TypePrice[][];
  isLoading: boolean;
  error: string | null;
}

const initialState: IPriceState = {
  prices: [],
  isLoading: false,
  error: null,
};

const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get all price
      .addCase(getAllPriceThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllPriceThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.prices = action.payload.data;
      })
      .addCase(getAllPriceThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          action.payload?.message || 'Ошибка при получении списка цен';
      })

      // update price
      .addCase(updatePriceThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePriceThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        const updated = action.payload.data;
        state.prices = state.prices.map((group) =>
          group.map((item) => (item.id === updated.id ? updated : item))
        );
      })
      .addCase(updatePriceThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || 'Ошибка при обновлении цены';
      });
  },
});

export const { actions: priceActions } = priceSlice;
