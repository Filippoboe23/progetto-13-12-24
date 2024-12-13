import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTrack: null
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setCurrentTrack(state, action) {
      state.currentTrack = action.payload;
    }
  }
});

export const { setCurrentTrack } = playerSlice.actions;
export default playerSlice.reducer;
