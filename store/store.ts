import { configureStore, Action } from "@reduxjs/toolkit";
import rootReducer, { RootState } from "./reducers/rootReducer";
import { ThunkAction } from "redux-thunk";

const store = configureStore({
  reducer: rootReducer,
});


export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

export default store;