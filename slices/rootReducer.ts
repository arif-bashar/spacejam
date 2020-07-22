import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authReducer";
import addSpaceSlice from "./addSpaceReducer";
import playerSlice from "./playerReducer";

const rootReducer = combineReducers({
  auth: authSlice,
  addSpace: addSpaceSlice,
  player: playerSlice
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
