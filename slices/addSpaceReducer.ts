import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getFirebase } from "react-redux-firebase";
import shortid from "shortid";

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

type roomProps = {
  roomName: string,
  host: string,
}

export const onCreateRoom = createAsyncThunk(
  "addSpace/createRoom",
  async (user: roomProps) => {
    try {
      const firebase = getFirebase();
      const firestore = firebase.firestore();
      await firestore.collection("users").doc(user.host).collection("rooms").add({
        roomName: user.roomName,
        host: user.host,
        inviteCode: shortid.generate(),
      })
    } catch(error) {
      return error;
    }
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(onCreateRoom.fulfilled, (state, action) => {
      
    })
  }
});

export const {
  onAddPress,
  onCreatePress,
  onJoinPress,
  onClosePress,
} = addSpaceSlice.actions;
export default addSpaceSlice.reducer;
