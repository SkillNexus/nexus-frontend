import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["auth/setCredentials"],
        // Ignore these paths in the state
        ignoredPaths: ["auth.user", "auth.token"],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});
