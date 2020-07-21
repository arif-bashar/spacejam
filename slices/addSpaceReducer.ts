import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type currentState = {
  optionShow: boolean;
};

let initialState: currentState = {
  optionShow: false,
};

const addSpaceSlice = createSlice({
  name: "addSpace",
  initialState,
  reducers: {
    onAddPress(state) {
      state.optionShow = !state.optionShow;
    },
  },
});

export const { onAddPress } = addSpaceSlice.actions;
export default addSpaceSlice.reducer;
