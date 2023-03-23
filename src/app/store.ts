import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter-slice";
import dogReducer from "../features/dog-slice";
import showLoginModalReducer from "../features/showLoginModal-slice";
import showRegisterModalReducer from "../features/showRegisterModal-slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    dogs: dogReducer,
    showLoginModal: showLoginModalReducer,
    showRegisterModal: showRegisterModalReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
