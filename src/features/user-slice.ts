import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface IUser {
  token: string | null;
}

interface State {
  value: IUser;
  isLoading: boolean;
}

const initialState: State = {
  value: { token: null },
  isLoading: false,
};

export const userLogin = createAsyncThunk(
  "userLogin",
  async (credential: { email: string; password: string }) => {
    const response = await axios.post("http://localhost:3001/user/login", {
      email: credential.email,
      password: credential.password,
    });
    console.log(response);
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(userLogin.pending, (state, action) => {
        if (state.isLoading === false) {
          state.isLoading = true;
        }
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        if (state.isLoading === true) {
          state.isLoading = false;
          state.value = action.payload;
        }
      });
  },
});

export default userSlice.reducer;
