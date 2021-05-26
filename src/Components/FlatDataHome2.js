import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import imagePath from '../constants/imagePath';

const FlatDataHome2=(props)=>{
    const item = props.item
    const index = props.index

    return(
        <View style={{ flex: 1, margin: 15 }}>
                                    <Image source={item.images} style={{ width: 65, height: 65, borderRadius: 50 }} />
                                    <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>{item.title}</Text>
                                </View>
    )
}
export default FlatDataHome2;