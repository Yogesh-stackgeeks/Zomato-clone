import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import FlatDataHistory from '../Components/FlatDataHistory';
import imagePath from '../constants/imagePath';
import navigationStrings from '../constants/navigationStrings';

class History extends Component {
    constructor() {
        super()
        this.state = {
            arrData: [
                {
                    title: "BURGER POINT",
                    images: imagePath.point1,
                    price: "INR 500.00",
                },
                {
                    title: "MC DONALD'S",
                    images: imagePath.point2,
                    price: "INR 250.00",
                },
                {
                    title: "CHINA EXPRESS",
                    images: imagePath.point5,
                    price: "INR 300.00",
                },
                {
                    title: "BURGER KING",
                    images: imagePath.point4,
                    price: "INR 524.00",
                },
                {
                    title: "CHINA EXPRESS",
                    images: imagePath.point5,
                    price: "INR 897.00",
                },
                {
                    title: "MC DONALD'S",
                    images: imagePath.point2,
                    price: "INR 1050.00",
                },
                {
                    title: "FOOD VILLA",
                    images: imagePath.point7,
                    price: "INR 200.00",
                }]
        }
    }

    moveBack = () => {
        this.props.navigation.navigate(navigationStrings.Home)
    }




    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F8F8FF' }}>
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'green', borderBottomRightRadius: 50, borderBottomWidth: 0.4, borderBottomLeftRadius: 50 }}>
                    <View style={{ flex: 0, justifyContent: 'center', marginLeft: 20 }}>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 30, fontWeight: 'bold' }}>Order History</Text>
                    </View>
                </View>
                <View style={{ flex: 5, marginTop: 50 }}>
                    <FlatList
                        data={this.state.arrData}
                        showsVerticalScrollIndicator={false}
                        scrollEnabled={true}
                        ItemSeparatorComponent={this.flatListItemSeparator}
                        renderItem={({ item, index }) =>
                            <FlatDataHistory item={item}
                                index={index}
                            />
                        }
                    />
                </View>
            </View>
        )
    }

}
export default History;