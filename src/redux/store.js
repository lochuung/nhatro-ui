import {configureStore} from '@reduxjs/toolkit';
import roomsReducer from './roomsReducer'; // Import your rooms reducer

export default configureStore({
  reducer: {
    rooms: roomsReducer, // Your rooms reducer handling room data and pagination
  },
  // No need to explicitly include thunk middleware, as it's already included by default
});
