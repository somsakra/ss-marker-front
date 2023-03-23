import {
  createAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import { initializeConnect } from "react-redux/es/components/connect";

interface INote {
  _id: string;
  title: string;
  content: string;
  isDone: boolean;
  request: {
    type: string;
    url: string;
  };
}

interface IValue {
  count: number;
  notes: INote[];
}

interface State {
  value: IValue;
  isLoading: boolean;
}

const initialState: State = {
  value: { count: 0, notes: [] },
  isLoading: false,
};

export const getAllNote = createAsyncThunk(
  "getAllNote",
  async (token: string) => {
    const response = await axios({
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
      url: "http://localhost:3001/note",
    });
    return response.data;
  }
);

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllNote.pending, (state, action) => {
        if (state.isLoading === false) {
          state.isLoading = true;
        }
      })
      .addCase(getAllNote.fulfilled, (state, action) => {
        if (state.isLoading === true) {
          state.isLoading = false;
          state.value = action.payload;
        }
      });
  },
});

export default noteSlice.reducer;
