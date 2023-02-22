import { configureStore } from "@reduxjs/toolkit";
import time from "../modules/time";
const store = configureStore({
  reducer: {
    time,
  },
});

export default store;
