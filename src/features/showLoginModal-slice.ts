import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IShowLoginModal {
  value: boolean;
}

const initialState: IShowLoginModal = {
  value: false,
};

const showLoginModal = createSlice({
  name: "showLoginModal",
  initialState,
  reducers: {
    closeLoginModal(state) {
      state.value = false;
    },
    openLoginModal(state) {
      state.value = true;
    },
  },
});

export const { closeLoginModal, openLoginModal } = showLoginModal.actions;
export default showLoginModal.reducer;
