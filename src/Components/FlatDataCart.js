import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import imagePath from '../constants/imagePath';
import Cart from '../Screens/Cart'






const FlatDataCart=(props)=>{
const item = props.item
const index = props.index
const onAddNow = props.onAddNow
const onAdd = props.onAdd
const onMinus = props.onMinus

 const onMode = (index)=>{
   onAddNow(index)
}

const onSub = (index)=>{
    onMinus(index)
}

const onInc = (index)=>{
    onAdd(index)
}


return(
    <View style={{ flex: 1, flexDirection: 'row', padding: 15 }}>
                                <View style={{ flex: 1.5 }} >
                                    <Image source={item.images} style={{ height: 60, width: 60, borderRadius: 30 }} />
                                </View>
                                <View style={{ flex: 2 }}>
                                    <Text style={styles.texts}>{item.title}</Text>
                                </View>
                                <View style={{ flex: 2, justifyContent: 'center' }}>
                                    <Text style={styles.texts}>{item.price}</Text>
                                </View>
                                 { item.isActive ?
                                    <View style={{ flex: 1.5, justifyContent: 'center' }}>
                                        <TouchableOpacity onPress={()=>onMode(index)}>
                                            <View style={{ backgroundColor: 'green', justifyContent: 'center', height: 30, alignItems: 'center', borderRadius: 20 }}>
                                                <Text>Add Now</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View> :
                                    <View style={{ flex: 1.5, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ flex: 1 }}>
                                            <TouchableOpacity onPress={() =>onSub(index)}>
                                                <Image source={imagePath.minus} style={{ height: 20, width: 20 }} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ flex: 0.6 }}>
                                            <Text style={{ fontWeight: 'bold' }}>{item.conting}</Text>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <TouchableOpacity onPress={() => onInc(index)}>
                                                <Image source={imagePath.plus} style={{ height: 20, width: 20 }} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                }
                            </View>
                    
)
}
export default FlatDataCart;

const styles = StyleSheet.create({
    texts: {
        fontSize: 20,
        fontWeight: 'bold'

    }
});