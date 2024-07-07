import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isLoggedIn: false,
    username: '',
    password: '',
    email: '',
    fullname: '',
    address: '',
    state: '',
    city: '',
    pincode: null,
    orders: [],
    number: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setFullname: (state, action) => {
            state.fullname = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setNumber: (state, action) => {
            state.number = action.payload;
        },
        setAddress: (state, action) => {
            state.address = action.payload;
        },
        setState: (state, action) => {
            state.state = action.payload;
        },
        setCity: (state, action) => {
            state.city = action.payload;
        },
        setPincode: (state, action) => {
            state.pincode = action.payload;
        },
        setOrders: (state, action) => {
            state.orders = action.payload;
        },
        deleteUser(state){
            state.isLoggedIn = false;
            state.username = ""
            state.fullname =""
            state.address = ""
            state.city = ""
            state.email = ""
            state.number = null
            state.orders = ""
            state.pincode = null
            state.state = ""
        },
        setUser(state, action) {
            state.isLoggedIn = true;
            state.username = action.payload.username;
            state.fullname = action.payload.fullname;
            state.address = action.payload.address;
            state.city = action.payload.city;
            state.email = action.payload.email;
            state.number = action.payload.number;
            state.orders = action.payload.orders;
            state.pincode = action.payload.pincode;
            state.state = action.payload.state;
        },
    }
});

export const {
    setLogin,
    setUsername,
    setFullname,
    setEmail,
    setNumber,
    setAddress,
    setState,
    setCity,
    setPincode,
    setOrders,
    setUser,
    deleteUser
} = userSlice.actions;

export default userSlice.reducer;