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
import Otp from './src/Screens/Otp';
import Profile from './src/Screens/Profile';
import SignUp from './src/Screens/SignUp';
import {Drawer} from './src/Screens/Drawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import navigationStrings from './src/constants/navigationStrings';
import { SlideDrawer } from './src/Navigation/SlideDrawer';

const Draw = createDrawerNavigator();

export default function App() {
  return (
<SlideDrawer />
  )}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});