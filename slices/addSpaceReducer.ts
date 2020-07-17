import { createSlice, PayloadAction, createStore } from "@reduxjs/toolkit";

type currentState = {
  show: boolean;
  createShow: boolean;
  joinShow: boolean;
};

let initialState: currentState = {
  show: true,
  createShow: false,
  joinShow: false
};

const addSpaceSlice = createSlice({
  name: "addSpace",
  initialState,
  reducers: {
    onAddPress(state) {
      state.show = !state.show;
    },
    onCreatePress(state) {
      state.createShow = !state.createShow;
    },
    onJoinPress(state) {
      state.joinShow = !state.joinShow;
    }
  },
});

export const { onAddPress, onCreatePress, onJoinPress } = addSpaceSlice.actions;
export default addSpaceSlice.reducer;
