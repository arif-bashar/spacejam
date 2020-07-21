import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type currentState = {
    show: boolean;
};

let initialState: currentState = {
    show: true,
};

const playerSlice = createSlice({
    name: "enterPlayer",
    initialState,
    reducers: {
        onEnterPlayer(state) {
            state.show = !state.show;
        },
    },
});

export const { onEnterPlayer } = playerSlice.actions;
export default playerSlice.reducer;
