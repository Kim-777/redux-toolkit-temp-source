import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { dogApiSlice } from "../features/dogs/dogsApiSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [dogApiSlice.reducerPath]: dogApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(dogApiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
