import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from '../screens/signin/signin';
import { navigationConstants } from '../utils/constants';
import VerifyOtp from '../screens/verifyOtp/verifyOtp';
import Dashboard from '../screens/dashboard/dashboard';
import Profile from '../screens/profile/profile';

const Stack = createNativeStackNavigator();

function Main() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={navigationConstants.dashboard} component={Dashboard} />
            <Stack.Screen name={navigationConstants.profile} component={Profile}options={{animation:"slide_from_right"}} />
        </Stack.Navigator>
    );
}

export default Main;