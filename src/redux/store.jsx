import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./slices/playerSlice";
import likesReducer from "./slices/LikesSlice";
const store = configureStore({
  reducer: {
    player: playerReducer,
    likes: likesReducer
  }
});

export default store;
