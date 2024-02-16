// slices/dataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const DiscountGroupSlice = createSlice({
  name: 'data',
  initialState: {
    // Define your initial state
    formData: null,
  },
  reducers: {
    setFormData(state, action) {
      state.formData = action.payload;
    },
  },
});

export const { setFormData } = DiscountGroupSlice.actions;
export default dataSlice.reducer;
