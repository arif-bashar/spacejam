import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type currentState = {
  isLoading: boolean;
  isSignOut: boolean;
  userToken: string | null | undefined;
  userID: string | null | undefined;
};

let initialState: currentState = {
  isLoading: true,
  isSignOut: false,
  userToken: null,
  userID: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn(
      state,
      action: PayloadAction<{ userToken: string | null; userID: string | null }>
    ) {
      state.isSignOut = false;
      state.userToken = action.payload.userToken;
      state.userID = action.payload.userID;
    },
    signOut(state) {
      state.isSignOut = true;
      state.userToken = null;
      state.userID = null;
    },
    getToken(
      state,
      action: PayloadAction<{
        userToken: string | null | undefined;
        userID: string | null | undefined;
      }>
    ) {
      state.isLoading = false;
      state.userToken = action.payload.userToken;
      state.userID = action.payload.userID;
    },
  },
});

export const {
  signIn: signInAction,
  signOut: signOutAction,
  getToken: getTokenAction,
} = authSlice.actions;
export default authSlice.reducer;
