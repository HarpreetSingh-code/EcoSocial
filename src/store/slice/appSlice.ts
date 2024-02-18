import { createSlice } from "@reduxjs/toolkit";
import { extraConstants } from "../../utils/constants";
// * contains app state and settings (i.e. push notifications enabled, internet enabled, etc)
const appSlice = createSlice({
    name: "appSlice",
    initialState: {
        appState: extraConstants.auth,
     },
    reducers: {
        appState: (state, action) => {
            return {
                ...state,
                appState: action.payload,
            };
        }
    },
});

export const setAppState = appSlice.actions.appState;

export default appSlice.reducer;