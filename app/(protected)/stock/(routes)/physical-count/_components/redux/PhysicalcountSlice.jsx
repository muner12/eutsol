// slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const PhysicalcountSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = PhysicalcountSlice.actions;

// export default PhysicalcountSlice.reducer;
