import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import { firebaseReducer, firestoreReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

export type RootState = ReturnType<typeof rootReducer>


export default rootReducer;