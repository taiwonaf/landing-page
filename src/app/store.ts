import { configureStore } from "@reduxjs/toolkit";
import { landingApi } from "./services/apiServices";

export const store = configureStore({
  reducer: {
    [landingApi.reducerPath]: landingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(landingApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
