import {Drawer} from '../Screens/Drawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import navigationStrings from '../constants/navigationStrings';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from '../Screens/Home';
import History from '../Screens/History';
import CheckOut from '../Screens/CheckOut';
import Login from '../Screens/Login';
import Cart from '../Screens/Cart';
import Address from '../Screens/Address';
import SignUp from '../Screens/SignUp';
import Otp from '../Screens/Otp';
import Profile from '../Screens/Profile';


const Draw = createDrawerNavigator();

export function SlideDrawer() {

return(
    <NavigationContainer>

    <Draw.Navigator drawerContent = {props => <Drawer {...props} /> } >
    <Draw.Screen name = {navigationStrings.Login} component = {Login} />
    
    <Draw.Screen name = {navigationStrings.Home} component = {Home} />
    <Draw.Screen name = {navigationStrings.History} component = {History} />
    <Draw.Screen name = {navigationStrings.CheckOut} component = {CheckOut} />
    
    <Draw.Screen name = {navigationStrings.Cart} component = {Cart} />
    <Draw.Screen name = {navigationStrings.Address} component = {Address} />
    <Draw.Screen name = {navigationStrings.SignUp} component = {SignUp} />
    <Draw.Screen name = {navigationStrings.Otp} component = {Otp} />
    <Draw.Screen name = {navigationStrings.Profile} component = {Profile} />
    </Draw.Navigator> 
    </NavigationContainer>



)
}