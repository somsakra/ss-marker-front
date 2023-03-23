import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IShowRegisterModal {
  value: boolean;
}

const initialState: IShowRegisterModal = {
  value: false,
};

const showRegisterModal = createSlice({
  name: "showRegisterModal",
  initialState,
  reducers: {
    closeRegisterModal(state) {
      state.value = false;
    },
    openRegisterModal(state) {
      state.value = true;
    },
  },
});

export const { closeRegisterModal, openRegisterModal } =
  showRegisterModal.actions;
export default showRegisterModal.reducer;
