import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getFirebase } from "react-redux-firebase";
import AsyncStorage from "@react-native-community/async-storage";

type currentState = {
  isLoading: boolean;
  isSignOut: boolean;
};

let initialState: currentState = {
  isLoading: true,
  isSignOut: false,
};

// Used when user is just signing in
type UserCredentials = {
  email: string;
  password: string;
};

// Used when user is creating account for the first time
type NewUser = UserCredentials & {
  firstName: string;
  lastName: string;
};

export const register = createAsyncThunk(
  "auth/register",
  async (user: NewUser) => {
    try {
      const firebase = getFirebase();
      const firestore = firebase.firestore();

      // Create the new user first
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password);

      // Grab the user's ID while we're at it
      const id = response.user?.uid;

      // Using the ID, store additional information into firestore
      await firestore.collection("users").doc(id).set({
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      });
    } catch (error) {
      return error;
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (user: UserCredentials) => {
    try {
      const firebase = getFirebase();
      await firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password);
    } catch (error) {
      return error;
    }
  }
);

export const signOut = createAsyncThunk("auth/signOut", async () => {
  try {
    const firebase = getFirebase();
    await firebase.auth().signOut();
  } catch (error) {
    return error;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.isSignOut = false;
    });
    builder.addCase(signOut.fulfilled, (state, action) => {
      state.isSignOut = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.isSignOut = false;
    });
  },
});

// export const {} = authSlice.actions;
export default authSlice.reducer;
