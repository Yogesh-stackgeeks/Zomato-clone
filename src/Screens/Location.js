import React, { Component } from 'react';
import {Text , StyleSheet ,TouchableOpacity, View } from 'react-native';
import Geolocation from '@react-native-community/geolocation'
import openMap from 'react-native-open-maps';

class Location extends Component{
constructor(){
    super()
    this.state ={
        location : null,
        latitude : '',
        longitude : ''
    }

}

locationget =()=>{
    Geolocation.getCurrentPosition(
        (position) => {
          const currentLongitude =
            JSON.stringify(position.coords.longitude);
            console.log(position.coords.longitude)
      
          const currentLatitude =
            JSON.stringify(position.coords.latitude);
            console.log(position.coords.latitude)
            this.setState({latitude : position.coords.latitude, longitude : position.coords.longitude})
            
         }, (error) => alert(error.message), { 
           enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 
         }
      );
}
       mapsopen = ()=>{
        openMap({ latitude: this.state.latitude ,  longitude: this.state.longitude});
       }
   
render(){
    
return(
      <View style ={{flex :1 , justifyContent : 'center' , alignItems : 'center'}}>
      <TouchableOpacity onPress = {this.locationget} style ={{backgroundColor : 'red' , height : 40 , justifyContent : 'center' , borderRadius : 20 , width : 200}} >
          <Text style ={{textAlign : 'center'}}>Get Location</Text>
      </TouchableOpacity>
          <Text>Helo this is my app </Text>

          <Text>LATITUDE :- {this.state.latitude}</Text>
          <Text>LONGITUDE :- {this.state.longitude}</Text>
          <TouchableOpacity onPress = {this.mapsopen} style ={{backgroundColor : 'red' , height : 40 , justifyContent : 'center' , borderRadius : 20 , width : 200}} >
          <Text style ={{textAlign : 'center'}}>OPEN MAP</Text>
      </TouchableOpacity>
      </View>
)
}
}

export default Location;