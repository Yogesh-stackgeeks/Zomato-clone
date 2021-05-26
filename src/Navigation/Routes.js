import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import navigationStrings from '../constants/navigationStrings'
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import Cart from '../Screens/Cart';
import Otp from '../Screens/Otp';
import SignUp from '../Screens/SignUp';
import CheckOut from '../Screens/CheckOut';
import History from '../Screens/History';
import Address from '../Screens/Address';
import TabBar from './TabBar';
import Profile from '../Screens/Profile';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options = {{headerShown : false}} name={navigationStrings.Login} component={Login} />
        <Stack.Screen options = {{headerShown : false}} name={navigationStrings.Home} component={Home} />
        <Stack.Screen options = {{headerShown : false}} name={navigationStrings.Cart} component={Cart} />
        <Stack.Screen options = {{headerShown : false}} name={navigationStrings.Otp} component={Otp} />
        <Stack.Screen options = {{headerShown : false}} name={navigationStrings.SignUp} component={SignUp} />
        <Stack.Screen options = {{headerShown : false}} name={navigationStrings.CheckOut} component={CheckOut} />
        <Stack.Screen options = {{headerShown : false}} name={navigationStrings.History} component={History} />
        <Stack.Screen options = {{headerShown : false}} name={navigationStrings.Address} component={Address} />
        <Stack.Screen options = {{headerShown : false}} name={navigationStrings.Profile} component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Routes;