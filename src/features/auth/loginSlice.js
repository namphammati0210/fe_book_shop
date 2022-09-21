import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {},
  reducers: {
    setLoggedInUser: (state, action) => (state = action.payload),
  },
});

export const { setLoggedInUser } = loginSlice.actions;

export default loginSlice.reducer;
