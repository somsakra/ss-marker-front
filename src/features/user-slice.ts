import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface IUser {
  // message: string;
  email: string;
  // token: string | null;
}

interface State {
  value: IUser;
  isLoading: boolean;
}

const initialState: State = {
  value: { email: "" },
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

export const getUserInfo = createAsyncThunk(
  "getUserInfo",
  async (token: string) => {
    const response = await axios({
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      url: "http://localhost:3001/user/info",
    });
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
      })
      .addCase(getUserInfo.pending, (state, action) => {
        if (state.isLoading === false) {
          state.isLoading = true;
        }
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        if (state.isLoading === true) {
          state.isLoading = false;
          state.value = action.payload;
        }
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        if (state.isLoading === true) {
          state.isLoading = false;
        }
      });
  },
});

export default userSlice.reducer;
