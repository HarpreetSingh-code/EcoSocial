import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from '../screens/signin/signin';
import { navigationConstants } from '../utils/constants';
import VerifyOtp from '../screens/verifyOtp/verifyOtp';

const Stack = createNativeStackNavigator();

function Auth() {
    return (
        <Stack.Navigator screenOptions={{headerShown:false,animation:"fade_from_bottom"}}>
            <Stack.Screen name={navigationConstants.signin} component={Signin} />
            <Stack.Screen name={navigationConstants.verifyOtp} component={VerifyOtp} />
        </Stack.Navigator>
    );
}

export default Auth;