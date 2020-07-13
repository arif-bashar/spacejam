import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type currentState = {
  show: boolean;
};

let initialState: currentState = {
  show: true,
};

const addSpaceSlice = createSlice({
  name: "addSpace",
  initialState,
  reducers: {
    onAddPress(state) {
      state.show = !state.show;
    },
  },
});

export const { onAddPress } = addSpaceSlice.actions;
export default addSpaceSlice.reducer;
