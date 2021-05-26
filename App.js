import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/Navigation/Routes';
import TabBar from './src/Navigation/TabBar';
import Address from './src/Screens/Address';
import Cart from './src/Screens/Cart';
import CheckOut from './src/Screens/CheckOut';
import History from './src/Screens/History';
import Home from './src/Screens/Home';
import Login from './src/Screens/Login';
import MapRoute from './src/Screens/MapRoute';
import Otp from './src/Screens/Otp';
import Profile from './src/Screens/Profile';
import SignUp from './src/Screens/SignUp'

export default function App() {
  return (
    
<Routes />
  )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});