import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type currentState = {
    isPlaying: boolean;
    currentTimecode: number;
};

let initialState: currentState = {
    isPlaying: false,
    currentTimecode: 0
};

const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        onChangeTimecode(
            state,
            action: PayloadAction<{ timecode: number }>) {
            state.currentTimecode = action.payload.timecode;
        },
        onPlayPress(state) {
            state.isPlaying = !state.isPlaying;
        }
    },
});

export const { onChangeTimecode, onPlayPress } = playerSlice.actions;
export default playerSlice.reducer;
