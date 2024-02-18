import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Signin from './src/screens/signin/signin'
import Auth from './src/routes/auth'
import Root from './src/routes/root'
import { Provider } from 'react-redux'
import store from './src/store/store'

const App = () => {
  useEffect(() => {
    StatusBar.setTranslucent(true)
    StatusBar.setBackgroundColor("rgba(1,1,1,0)")
  }, [])
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})