import { createSlice } from "@reduxjs/toolkit";

const stockSlices = createSlice({
  name: "stockSlice",
  initialState: {
    // functions: [],
    pageState: 0,
    formIndex: null,
  },
  reducers: {
    openForm(state, action) {
      state.formIndex = action.payload;

    //   console.log("modall open redux", action.payload);
    },
  },
});

export default stockSlices;

export const { openForm } = stockSlices.actions;
