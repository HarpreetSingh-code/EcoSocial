import AsyncStorage from "@react-native-async-storage/async-storage"
import { storageKeysConstants } from "./constants";

export const getLocalValue = async (key: string) => {//*                   ----------->    G E T - V A L U E 
    try {
        return await AsyncStorage.getItem(key)
    } catch (e) {
        // read error
        console.log("getLocalValue error==>>", e);
    }
}

export const setLocalValue = async (key: string, value: any) => {//*       ----------->    S E T - V A L U E 
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        // save error
        console.log("setLocalValue error==>>", e);
    }
}
export const getLocalObject = async (key: string) => {  //*                 ----------->  G E T - O B J E C T
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch (e) {
        // read error
        console.log("getLocalObject error==>>", e);
    }
}
export const setLocalObject = async (key: string, value: any) => {//*       ----------->  S E T - O B J E C T
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        // save error
        console.log("setLocalObject error==>>", e);
    }
}
export const clearLocalData = async (key: string) => {//*                   ----------->  C L E A R - V A L U E
    try {
        await AsyncStorage.removeItem(key)
    } catch (e) {
        // remove error
        console.log("clearLocalData error==>>", e);
    }
}
export const clearAllStroage = async () => {//*                             ----------->  C L E A R - S T O R A G E
    // @------> REMOVED EVERYTHING EXCEPT ONBOARDING STATUS <-------@ //
    try {
        let keys = [
            storageKeysConstants.userDetails,
        ]
        await AsyncStorage.multiRemove(keys)
    } catch (e) {
        // clear error
        console.log("clearAllStroage error==>>", e);
    }
}