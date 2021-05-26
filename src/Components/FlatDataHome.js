import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import imagePath from '../constants/imagePath';

const FlatDataHome=(props)=>{
    const item = props.item
    const index = props.index
    const moveToCart = props.moveToCart

    const Moving =()=>{
        moveToCart()
    }

    return(
<View>
        <TouchableOpacity onPress ={Moving} activeOpacity={0.4} style={{ flex: 0.4, flexDirection: 'row', margin: 10, borderWidth: 0.3, borderRadius: 50, borderColor: 'gray' }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={item.images} style={{ height: 75, width: 125, borderRadius: 30 }} />
        </View>

        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: 'blue' }}>{item.title}</Text>
            <Text style={{ fontSize: 10, fontWeight: 'bold', textAlign: 'center', color: 'red' }}>100+ Orders Placed</Text>
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                <Image source={imagePath.star} style={{ width: 30, height: 30 }} />
            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.ratings}</Text>
            </View>

        </View>
    </TouchableOpacity>
    </View>
    )
}
export default FlatDataHome;



