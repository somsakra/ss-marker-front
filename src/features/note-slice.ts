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

export const createNote = createAsyncThunk(
  "createNote",
  async (createInfo: {
    token: string | null;
    noteInfo: { title: string; content: string };
  }) => {
    const response = await axios({
      method: "POST",
      headers: { Authorization: `Bearer ${createInfo.token}` },
      data: createInfo.noteInfo,
      url: "http://localhost:3001/note",
    });
    return response.data;
  }
);

export const deleteNote = createAsyncThunk(
  "deleteNote",
  async (deleteInfo: { token: string | null; _id: string }) => {
    const response = await axios({
      method: "DELETE",
      headers: { Authorization: `Bearer ${deleteInfo.token}` },
      url: `http://localhost:3001/note/${deleteInfo._id}`,
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
      })
      .addCase(createNote.pending, (state, action) => {
        if (state.isLoading === false) {
          state.isLoading = true;
        }
      })
      .addCase(createNote.fulfilled, (state, action) => {
        if (state.isLoading === true) {
          state.isLoading = false;
          state.value = action.payload;
        }
      })
      .addCase(deleteNote.pending, (state, action) => {
        if (state.isLoading === false) {
          state.isLoading = true;
        }
      })
      .addCase(deleteNote.fulfilled, (state, action) => {
        if (state.isLoading === true) {
          state.isLoading = false;
          state.value = action.payload;
        }
      });
  },
});

export default noteSlice.reducer;
