import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, FlatList, TouchableOpacity, ScrollView, ImageEditor } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import Routes from './Routes';
import History from '../Screens/History';
import CheckOut from '../Screens/CheckOut';
import Profile from '../Screens/Profile';
import Cart from '../Screens/Cart';
import Address from '../Screens/Address';
import imagePath from '../constants/imagePath';
import SignUp from '../Screens/SignUp';

const Tab = createBottomTabNavigator();

const TabBar =()=>{
return(
<Tab.Navigator tabBarOptions={{
  activeTintColor: 'red',
  inactiveTintColor: 'black',
  showLabel : false ,
  style: {
    elevation: 0,
    position : 'relative',
    bottom : 10,
    backgroundColor : '#F8F8FF',
    borderRadius : 15,
    height : 70,
    ...styles.shadow
  },
}} >
        <Tab.Screen name="Home" component={Home} 
        options ={{
          tabBarIcon : ({focused})=>(
        <View style = {{alignItems : 'center', justifyContent : 'center' , top : 10}}>
          <Image source = {imagePath.home}  resizeMode = 'contain' style ={{width : 25 , height : 25 , tintColor : focused ? 'red': 'black'}}/>
          <Text style ={{color :focused ? 'red': 'black'}}>HOME</Text>
        </View>

          )
        }}
        />
        <Tab.Screen name="History" component={History} 
           options ={{
          tabBarIcon : ({focused})=>(
        <View style = {{alignItems : 'center', justifyContent : 'center' , top : 10}}>
          <Image source = {imagePath.history}  resizeMode = 'contain' style ={{width : 25 , height : 25 , tintColor : focused ? 'red': 'black'}}/>
          <Text style ={{color :focused ? 'red': 'black'}}>HISTORY</Text>
        </View>

          )
        }}
        />
        <Tab.Screen name="CheckOut" component={CheckOut}
         options ={{
          tabBarIcon : ({focused})=>(
        <View style = {{alignItems : 'center', justifyContent : 'center' , top : 10}}>
          <Image source = {imagePath.bag}  resizeMode = 'contain' style ={{width : 25 , height : 25 , tintColor : focused ? 'red': 'black'}}/>
          <Text style ={{color :focused ? 'red': 'black'}}>CART</Text>
        </View>

          )
        }} />
        <Tab.Screen name="Profile" component={Profile}
         options ={{
          tabBarIcon : ({focused})=>(
        <View style = {{alignItems : 'center', justifyContent : 'center' , top : 10}}>
          <Image source = {imagePath.profile}  resizeMode = 'contain' style ={{width : 25 , height : 25 , tintColor : focused ? 'red': 'black'}}/>
          <Text style ={{color :focused ? 'red': 'black'}}>PROFILE</Text>
        </View>

          )
        }} />
         <Tab.Screen name="Cart" component={Cart}
          options ={{
          tabBarIcon : ({focused})=>(
        <View style = {{alignItems : 'center', justifyContent : 'center' , top : 10}}>
          <Image source = {imagePath.menu2}  resizeMode = 'contain' style ={{width : 25 , height : 25 , tintColor : focused ? 'red': 'black'}}/>
          <Text style ={{color :focused ? 'red': 'black'}}>MENU</Text>
        </View>

          )
        }} />
         <Tab.Screen name="Address" component={Address} 
            options ={{
          tabBarIcon : ({focused})=>(
        <View style = {{alignItems : 'center', justifyContent : 'center' , top : 10}}>
          <Image source = {imagePath.address}  resizeMode = 'contain' style ={{width : 25 , height : 25 , tintColor : focused ? 'red': 'black'}}/>
          <Text style ={{color :focused ? 'red': 'black'}}>ADDRESS</Text>
        </View>

          )
        }}
         />

      </Tab.Navigator>

)
}
export default TabBar;

const styles = StyleSheet.create({
  shadow : {
    shadowColor : 'black',
    shadowOffset : {
      width : 0 ,
      height : 10 ,}
      ,
      shadowOpacity : 0.25 ,
      shadowRadius : 3.5 ,
      elevation : 5,
    }
    
  }
);