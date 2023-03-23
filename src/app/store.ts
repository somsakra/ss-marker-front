import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter-slice";
import dogReducer from "../features/dog-slice";
import showLoginModalReducer from "../features/showLoginModal-slice";
import showRegisterModalReducer from "../features/showRegisterModal-slice";
import notesReducer from "../features/note-slice";
import userReducer from "../features/user-slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    dogs: dogReducer,
    showLoginModal: showLoginModalReducer,
    showRegisterModal: showRegisterModalReducer,
    notes: notesReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
