import { configureStore, Action, getDefaultMiddleware } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { createFirestoreInstance } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";

import firebase from "./components/Firebase";
import { rrfConfig } from './firebaseConfig';
import rootReducer, { RootState } from "./slices/rootReducer";

const middleware = getDefaultMiddleware({
  serializableCheck: false,
  thunk: {
    extraArgument: { getFirebase },
  },
});

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
}

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

export default store;
