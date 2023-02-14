import { configureStore } from "@reduxjs/toolkit";
import addAccountSlice from "./addAccountSlice";

const store = configureStore({
  reducer: {addAccount: addAccountSlice.reducer },
});
export default store;