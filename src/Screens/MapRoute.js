import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View, Modal, TouchableOpacity, TextInput, Button, Image, ScrollView } from 'react-native';
import imagePath from '../constants/imagePath'
import navigationStrings from '../constants/navigationStrings';
import MapView , { Marker } from 'react-native-maps';

class MapRoute extends Component{
constructor(){
    super()
    this.state = {
        region : {
    latitude: 51.5078788,
    longitude: -0.0877321,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009
        }
    }
}

render(){
    return(
<View style ={{flex : 1}}>
<MapView
      style={{ flex: 1 }}
      region={this.state.region}
      onRegionChangeComplete={region => setRegion(region)}
    >
      <Marker coordinate={{ latitude: 51.5078788, longitude: -0.0877321 }} />
    </MapView>

</View>








    )
}









}
export default MapRoute;