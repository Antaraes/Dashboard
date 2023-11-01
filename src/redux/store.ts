import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/redux/Theme/themeSlice";
import userReducer from "@/redux/global/userSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./services/apiSlice";

export const store = configureStore({
  reducer: { theme: themeReducer, user: userReducer, [api.reducerPath]: api.reducer },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
