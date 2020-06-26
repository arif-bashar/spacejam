import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import signIn from "./signInReducer";

const rootReducer = combineReducers({
  signIn,
  // auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
