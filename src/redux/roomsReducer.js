// roomsReducer.js
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import RoomServices from '../services/RoomServices';

// Thunk to fetch rooms with pagination and filtering
export const fetchRooms = createAsyncThunk(
    'rooms/fetchRooms',
    async ({page = 0, size = 10, status = null, search = null, sort = null}) => {
        const response = await RoomServices.getRooms(page, size, status, search, sort);
        return response.data;
    }
);

// Slice for room-related state
const roomsSlice = createSlice({
    name: 'rooms',
    initialState: {
        rooms: [],
        totalPages: 1,
        currentPage: 0,
        pageSize: 10,
        statusFilter: '',
        searchText: '',
        sort: null,
        loading: false,
        error: null,
    },
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setStatusFilter: (state, action) => {
            state.statusFilter = action.payload;
        },
        setSearchText: (state, action) => {
            state.searchText = action.payload;
        },
        setSort: (state, action) => {
            state.sort = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRooms.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchRooms.fulfilled, (state, action) => {
                state.loading = false;
                state.rooms = action.payload.content;
                state.totalPages = action.payload.totalPages;
            })
            .addCase(fetchRooms.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

// Export the actions and reducer
export const {setCurrentPage, setStatusFilter, setSearchText, setSort} = roomsSlice.actions;
export default roomsSlice.reducer;
