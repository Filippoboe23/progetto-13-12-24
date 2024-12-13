import { createSlice } from "@reduxjs/toolkit";

const likesSlice = createSlice({
  name: "likes",
  initialState: {
    likedSongs: []
  },
  reducers: {
    toggleLike(state, action) {
      const songId = action.payload;
      if (state.likedSongs.includes(songId)) {
        state.likedSongs = state.likedSongs.filter((id) => id !== songId);
      } else {
        state.likedSongs.push(songId);
      }
    }
  }
});

export const { toggleLike } = likesSlice.actions;
export default likesSlice.reducer;
