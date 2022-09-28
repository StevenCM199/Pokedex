import { createSlice } from "@reduxjs/toolkit";

export const pokeNameSlice = createSlice({
  name: "pokeName",
  initialState: "",
  reducers: {
    changeName: (state, action) => {
      const pokeName = action.payload;
      return pokeName
    }
  }
});

export const { changeName } = pokeNameSlice.actions;

export default pokeNameSlice.reducer;
