import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getFirebase } from "react-redux-firebase";
import { DocumentData } from "@firebase/firestore-types";
import shortid from "shortid";

type currentState = {
  optionShow: boolean;
  createShow: boolean;
  joinShow: boolean;
  rooms: Array<DocumentData>;
};

let initialState: currentState = {
  optionShow: false,
  createShow: false,
  joinShow: false,
  rooms: [],
};

type roomProps = {
  roomName: string;
  host: string;
};

export const fetchRooms = createAsyncThunk(
  "addSpace/fetchRooms",
  async (userID: string) => {
    try {
      let rooms: DocumentData[] = [];
      const firebase = getFirebase();
      const firestore = firebase.firestore();
      const querySnapshot = await firestore
        .collection("users")
        .doc(userID)
        .collection("rooms")
        .get();
      querySnapshot.forEach((doc) => {
        rooms.push(doc.data());
      });
      console.log(rooms);
      return rooms;
    } catch (error) {
      return error;
    } 
  }
);

export const onCreateRoom = createAsyncThunk(
  "addSpace/createRoom",
  async (user: roomProps) => {
    try {
      const firebase = getFirebase();
      const firestore = firebase.firestore();
      await firestore
        .collection("users")
        .doc(user.host)
        .collection("rooms")
        .add({
          roomName: user.roomName,
          host: user.host,
          inviteCode: shortid.generate(),
        });
    } catch (error) {
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
    builder.addCase(onCreateRoom.fulfilled, (state, action) => {});
    builder.addCase(
      fetchRooms.fulfilled,
      (state, { payload }) => {
        state.rooms = [...payload];
      }
    );
  },
});

export const {
  onAddPress,
  onCreatePress,
  onJoinPress,
  onClosePress,
} = addSpaceSlice.actions;
export default addSpaceSlice.reducer;
