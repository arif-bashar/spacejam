import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import { getFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";


const store = configureStore({
  reducer: rootReducer,
});

export default store;