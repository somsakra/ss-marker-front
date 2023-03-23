import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICounter {
  value: number;
}

const initialState: ICounter = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value = state.value + 1;
    },
    decrement(state) {
      state.value = state.value - 1;
    },
    addAmount(state, action: PayloadAction<number>) {
      state.value = state.value + action.payload;
    },
  },
});

export const { increment, decrement, addAmount } = counterSlice.actions;
export default counterSlice.reducer;
