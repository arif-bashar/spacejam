// import { RootState } from "./rootReducer";
// import { createSlice } from "@reduxjs/toolkit";

// let initialState = {
//   email: "",
//   password: "",
// };

// const signIn = createSlice({
//   name: "signIn",
//   initialState,
//   reducers: {
//     addEmail: (state, action) => {
//       const { email } = action.payload;
//       state.email = email;
//     },
//     addPassword(state, action) {
//       const { password } = action.payload;
//       state.password = password;
//     },
//   },
// });

// export const inputEmail = (state: RootState) => state.signIn.email;
// export const inputPassword = (state: RootState) => state.signIn.password;

// export const { addEmail, addPassword } = signIn.actions;
// export default signIn.reducer;
