import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import imagePath from '../constants/imagePath';

const FlatDataHistory = (props)=>{
    const item = props.item
    const index = props.index


    return(
<View style = {{flex : 1 , backgroundColor : 'white' , margin: 15 , flexDirection : 'row' , height : 80 , borderRadius : 20 , borderWidth : 1 ,borderColor: '#ddd',borderBottomWidth: 0, }}>

<View style = {{flex : 1 , justifyContent : 'center'}}>
<Image source ={item.images} style ={{height : 70 , width : 80 , marginLeft : 10 , borderRadius : 15}} />
</View>
<View style ={{flex : 1.5 , justifyContent : 'center'}}>
<Text style ={{fontSize : 20 , fontWeight : 'bold'}}>{item.title}</Text>
<Text style = {{fontSize : 12 , color : 'gray'}}>May 21st at 05:00 PM</Text>
</View>
<View style ={{flex : 1.1 , justifyContent : 'flex-end'}}>
<Text style ={{fontSize : 20 , fontWeight : 'bold'}}>{item.price}</Text>
</View>


</View>
 )

}
export default FlatDataHistory;