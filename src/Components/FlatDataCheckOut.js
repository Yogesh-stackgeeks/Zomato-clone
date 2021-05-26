import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import imagePath from '../constants/imagePath';

const FlatDataCheckOut =(props)=>{
    console.log(props)
    const item = props.item
    const index = props.index

return(
    <View style={{ flex: 1, flexDirection: 'row', padding: 15 }}>
    <View style={{ flex: 1.5 }} >
        <Image source={item.images} style={{ height: 60, width: 60, borderRadius: 30 }} />
    </View>
    <View style={{ flex: 2 }}>
        <Text style={styles.texts}>{item.title}</Text>
    </View>
    <View style={{ flex: 2, justifyContent: 'center' }}>
        <Text style={styles.texts}>{item.prices}</Text>
    </View>

    <View style={{ flex: 1.5, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 1 }}>
            <TouchableOpacity>
                <Image source={imagePath.minus} style={{ height: 20, width: 20 }} />
            </TouchableOpacity>
        </View>
        <View style={{ flex: 0.6 }}>
            <Text style={{ fontWeight: 'bold' }}>1</Text>
        </View>
        <View style={{ flex: 1 }}>
            <TouchableOpacity>
                <Image source={imagePath.plus} style={{ height: 20, width: 20 }} />
            </TouchableOpacity>
        </View>
    </View>
</View>
)

}

export default FlatDataCheckOut;

const styles = StyleSheet.create({
    texts: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10

    }
});