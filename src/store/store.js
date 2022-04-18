import { configureStore } from "@reduxjs/toolkit";
import dogsReducer from "./dogs/dogsSlice";

export const store = configureStore({
  reducer: {
    dogs: dogsReducer,
  },
});
