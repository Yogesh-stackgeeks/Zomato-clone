import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, FlatList, TouchableOpacity  } from 'react-native';
import {CheckBox} from 'react-native-elements';
import imagePath from '../constants/imagePath';

const FlatDataAddress = (props) => {
    console.log(props)
    const item = props.item
    const index = props.index
    const oncheck = props.oncheck


    const onclick = (index)=>{
        oncheck(index)
    }
    return (

        <View style={{ flex: 2, margin: 20, flexDirection: 'column', padding: 10, borderWidth: 1, borderRadius: 10 }}>
            <View style={{ flex: 1 }}>
                <Text style = {{fontSize : 15 , fontWeight : 'bold' , color : 'blue'}}>{item.named}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <Text style = {{fontSize : 15 , fontWeight : 'bold'}}>{item.adress}</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style = {{fontSize : 15 , fontWeight : 'bold'}}>{item.pinn}</Text>
                </View>
                <View style={{ flex: 0 }}>
            <CheckBox checked ={item.checked}
            title = {item.checked ? 'Selected' : 'Not Selected'}
  checkedIcon = {<Image source = {require('../assests/images/check.png')} style = {{height : 30 , width : 30}} /> }
  uncheckedIcon = {<Image source = {require('../assests/images/remove.png')} style = {{height : 30 , width : 30}} /> }
      onPress ={()=>{onclick(index)}}
  />           
            </View>
            </View>
            <View style={{ flex: 1 }}>
                <Text style = {{fontSize : 15 , fontWeight : 'bold'}}>+91-{item.numbered}</Text>
            </View>
        </View>

    )
}
export default FlatDataAddress;