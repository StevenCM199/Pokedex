import { configureStore } from "@reduxjs/toolkit";
import pokeNameSlice from "./slices/pokeName.slice";

export default configureStore({
  reducer: {
    pokeName: pokeNameSlice
  }
});
