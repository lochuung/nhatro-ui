import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import roomsReducer from './roomsReducer'; // Import your rooms reducer

export default configureStore({
  reducer: {
    user: userSlice,     // Your user slice
    rooms: roomsReducer, // Your rooms reducer handling room data and pagination
  },
  // No need to explicitly include thunk middleware, as it's already included by default
});
