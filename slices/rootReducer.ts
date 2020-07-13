import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authReducer";
import addSpaceSlice from "./addSpaceReducer";

const rootReducer = combineReducers({
  auth: authSlice,
  addSpace: addSpaceSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
