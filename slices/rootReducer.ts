import { combineReducers } from "@reduxjs/toolkit";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

// Reducers
import authSlice from "./authReducer";
import addSpaceSlice from "./addSpaceReducer";
import playerSlice from "./playerReducer";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authSlice,
  addSpace: addSpaceSlice,
  player: playerSlice
});

export type RootState = ReturnType<typeof rootReducer>;


export default rootReducer;
