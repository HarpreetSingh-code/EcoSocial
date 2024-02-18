import { Alert, Share } from "react-native"
import { setAppState } from "../store/slice/appSlice"
import { clearAllStroage, clearLocalData, getLocalObject } from "./asyncStorage"
import { extraConstants, storageKeysConstants } from "./constants"

export const isLoggedIn = () => {
    return new Promise((resolve, reject) => {
        getLocalObject(storageKeysConstants.userDetails)
            .then((details) => {
                if (details) { resolve(true) }
                else { resolve(false) }
            })
    })
}
export const logoutUser = (dispatch: any) => {
    dispatch(setAppState(extraConstants.auth))
    clearAllStroage()
}
export const onShareText = async (message: string) => {
    try {
        const result = await Share.share({ message });
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }
    } catch (error: any) {
        Alert.alert(error.message);
    }
};