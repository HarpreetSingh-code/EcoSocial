import { createSlice } from "@reduxjs/toolkit";

// * contains user profile and more.
const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        userDetails: null
    },
    reducers: {
        userDetails: (state, action) => {
            return {
                ...state,
                userDetails: action.payload,
            };
        },
    },
});

export const setUserDetails = userSlice.actions.userDetails;

export default userSlice.reducer;