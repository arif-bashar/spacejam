import { RootState } from "./rootReducer";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  signedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn(state, action: PayloadAction<{ signedIn: boolean }>) {
      state.signedIn = action.payload.signedIn;
    },
  },
});

export const { signIn: signInAction } = authSlice.actions;
export default authSlice.reducer;
