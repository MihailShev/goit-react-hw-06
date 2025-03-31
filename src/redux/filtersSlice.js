import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filter",

  initialState: {
    name: "",
  },

  reducers: {
    filter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { filter } = filtersSlice.actions;

export default filtersSlice.reducer;
