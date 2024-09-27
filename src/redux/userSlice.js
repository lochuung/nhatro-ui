import {createSlice} from '@reduxjs/toolkit';
import AuthServices from "../services/AuthServices.js";
import {toast} from "react-toastify";

const initialState = {
    id: 0,
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    image: ""
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.id = action.payload.id
            state.username = action.payload.username
            state.email = action.payload.email
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
        },
        logout: (state) => {
            state.id = 0;
            state.username = "";
            state.email = "";
            state.firstName = "";
            state.lastName = "";
        },
    },
});

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;