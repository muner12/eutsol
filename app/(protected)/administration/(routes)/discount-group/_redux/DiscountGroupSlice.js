// slices/dataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const DiscountGroupSlice = createSlice({
  name: 'data',
  initialState: {
    // Define your initial state
    data:[],
    formData: [],
  },
  reducers: {
    setFormData(state, action) {
        console.log(action.payload);
      state.formData=action.payload;
    },
  },

});

export const { setFormData } = DiscountGroupSlice.actions;
export default DiscountGroupSlice
