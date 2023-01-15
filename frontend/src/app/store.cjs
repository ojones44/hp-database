import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../features/auth/authSlice.cjs';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
