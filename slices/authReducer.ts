import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type currentState = {
  isLoading: boolean;
  userName: string | null;
  userToken: string | null;
};

let initialState: currentState = {
  isLoading: true,
  userName: null,
  userToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn(state, action: PayloadAction<currentState>) {
      state.isLoading = action.payload.isLoading;
      state.userName = action.payload.userName;
      state.userToken = action.payload.userToken;
    },
  },
});

export const { signIn: signInAction } = authSlice.actions;
export default authSlice.reducer;
