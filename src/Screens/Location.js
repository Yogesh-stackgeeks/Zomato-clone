import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import Geolocation from '@react-native-community/geolocation'
import openMap from 'react-native-open-maps';

class Location extends Component {
  constructor() {
    super()
    this.state = {
      location: null,
      latitude: '',
      longitude: ''
    }

  }

  locationget = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const currentLongitude =
          JSON.stringify(position.coords.longitude);
        console.log(position.coords.longitude)

        const currentLatitude =
          JSON.stringify(position.coords.latitude);
        console.log(position.coords.latitude)
        this.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude })

      }, (error) => alert(error.message), {
      enableHighAccuracy: true, timeout: 20000, maximumAge: 1000
    }
    );
  }
  mapsopen = () => {
    if (this.state.latitude === "") {
      alert("Press Above To Get Locations")
    }
    else {
      openMap({ latitude: this.state.latitude, longitude: this.state.longitude });
    }
  }

  render() {

    return (
      <View style={{ flex: 1 }}>

        <View style={{ flex: 0.3, backgroundColor: '#F08080', justifyContent: 'center', borderBottomWidth: 0.3, borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}>
          <Text style={{ textAlign: 'center', fontSize: 20, fontStyle: 'italic', fontWeight: 'bold' }}>USER LIVE LOCATION</Text>
        </View>
        <View style={{ flex: 0.5, flexDirection: 'column', margin: 20, backgroundColor: '#F5F5F5', borderRadius: 50 }}>
          <View style={{ flex: 1, flexDirection: 'row', margin: 30 }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 15, fontStyle: 'italic', fontWeight: 'bold' }}>LATITUDE :-</Text>
            </View>
            <View style={{ flex: 2 }}>
              <Text style={{ fontSize: 15, fontStyle: 'italic', fontWeight: 'bold' }}>({this.state.latitude})</Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', margin: 30 }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 15, fontStyle: 'italic', fontWeight: 'bold' }}>LONGITUDE :-</Text>
            </View>
            <View style={{ flex: 2 }}>
              <Text style={{ fontSize: 15, fontStyle: 'italic', fontWeight: 'bold' }}>({this.state.longitude})</Text>
            </View>
          </View>

        </View>
        <View style={{ flex: 0.4, marginTop: 30 }}>
          <TouchableOpacity onPress={this.locationget} style={{ backgroundColor: 'blue', marginHorizontal: 50, height: 50, justifyContent: 'center', borderRadius: 20 }}>
            <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 16 }}>Get Location</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.4 }}>
          <TouchableOpacity onPress={this.mapsopen} style={{ backgroundColor: 'blue', marginHorizontal: 50, height: 50, justifyContent: 'center', borderRadius: 20 }}>
            <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 16 }}>Move To Maps</Text>
          </TouchableOpacity>
        </View>
      </View>
    )

  }
}

export default Location;