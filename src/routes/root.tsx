import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from '../screens/signin/signin';
import { extraConstants, navigationConstants } from '../utils/constants';
import Auth from './auth';
import { isLoggedIn } from '../utils/commonMethods';
import { useDispatch, useSelector } from 'react-redux';
import Main from './main';
import { setAppState } from '../store/slice/appSlice';

const Stack = createNativeStackNavigator();

function Root() {

  const dispatch = useDispatch();
  const appState: any = useSelector((state: any) => state?.appReducer?.appState);
  React.useEffect(() => {
    isLoggedIn()
      .then((isLoggedIn) => {
        if (isLoggedIn) {
          dispatch(setAppState(extraConstants.main))
        } else {
          dispatch(setAppState(extraConstants.auth))
        }

      })
  }, [])
  return (
    <NavigationContainer>
      {
        appState == extraConstants.main
          ? (<Main />)
          : (<Auth />)
      }
    </NavigationContainer>
  );
}

export default Root;