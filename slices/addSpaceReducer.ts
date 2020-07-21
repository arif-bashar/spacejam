import { createSlice, PayloadAction, createStore } from "@reduxjs/toolkit";

type currentState = {
  optionShow: boolean;
  createShow: boolean;
  joinShow: boolean;
};

let initialState: currentState = {
  optionShow: false,
  createShow: false,
  joinShow: false,
};

const addSpaceSlice = createSlice({
  name: "addSpace",
  initialState,
  reducers: {
    onAddPress(state) {
      state.optionShow = !state.optionShow;
    },
    onCreatePress(state) {
      state.createShow = !state.createShow;
      state.optionShow = false;
    },
    onJoinPress(state) {
      state.joinShow = !state.joinShow;
      state.optionShow = false;
    },
    onClosePress(state) {
      state.joinShow = false;
      state.createShow = false;
    },
  },
});

export const {
  onAddPress,
  onCreatePress,
  onJoinPress,
  onClosePress,
} = addSpaceSlice.actions;
export default addSpaceSlice.reducer;
