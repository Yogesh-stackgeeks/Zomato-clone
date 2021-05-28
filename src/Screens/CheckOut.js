import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, FlatList, TouchableOpacity, ScrollView, ImageEditor } from 'react-native';
import FlatDataCheckOut from '../Components/FlatDataCheckOut';
import imagePath from '../constants/imagePath';
import navigationStrings from '../constants/navigationStrings';

class CheckOut extends Component {
    constructor() {
        super()
        this.state = {
            arrData: [
                {title : "PIZZA",
                prices : "Rs.200",
                images : imagePath.pizza},
                {title : "DOSA",
                prices : "Rs.120",
                images : imagePath.combo},
                {title : "NOODLES",
                prices : "Rs.150",
                images : imagePath.noodles},
                {title : "MOMOS",
                prices : "Rs.60",
                images : imagePath.momos},]
        }
    }

    flatListItemSeparator = () => {

        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: 'lightgray',
                    marginTop: 2,
                }}
            />
            
        );

    }


    moveBack = () => {
        this.props.navigation.navigate(navigationStrings.Home)
    }

    moveCart =()=>{
        this.props.navigation.navigate(navigationStrings.Cart)
    }

    moveAddress =()=>{
        this.props.navigation.navigate(navigationStrings.Address)
    }

    render() {
        console.log(this.props.route.params , "get data")
        const { navigation } = this.props
        return (
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator ={false} >
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 50, marginLeft: 15 }}>
                    <View style={{ flex: 2, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 35, fontWeight: 'bold' , textAlign : 'center' }}>Order Details</Text>
                    </View>
                </View>
                <View style={{ flex: 1, margin: 20, backgroundColor: 'black', borderRadius: 10 , flexDirection : 'row' }}>
                <View style = {{flex : 1}}>
                    <Text style={{ fontFamily: 'italic', fontSize: 20, fontWeight: 'bold', color: 'white', marginLeft: 20 }}>Your Order</Text>
                    </View>
                    <View style = {{flex : 0.5}}>
                    <TouchableOpacity onPress ={this.moveCart} style = {{backgroundColor : 'red' , borderWidth : 0.2 , borderRadius : 10}}>
                    <Text style={{ fontFamily: 'italic', fontSize: 20, fontWeight: 'bold', color: 'white' , marginLeft : 10 }}>Add More</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={this.state.arrData}
                        showsHorizontalScrollIndicator={false}
                        scrollEnabled={false}
                        ItemSeparatorComponent={this.flatListItemSeparator}
                        renderItem={({ item, index }) =>
                           <FlatDataCheckOut
                            item = {item}
                           index = {index}
                           />

                        }
                    />
                </View>
                <View style={{ backgroundColor: '#FFF8DC', margin: 10, borderRadius: 20 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.texts}>Sub-Total :</Text>
                        </View>
                        <View style={{ flex: 0.5 }}>
                            <Text style={styles.texts}>Rs. 530.00</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 15 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.texts}>Taxes :</Text>
                        </View>
                        <View style={{ flex: 0.5 }}>
                            <Text style={styles.texts}>Rs. 20.00</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 15 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.texts}>Total Price :</Text>
                        </View>
                        <View style={{ flex: 0.5 }}>
                            <Text style={styles.texts}>Rs. 550.00</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, backgroundColor: 'lightgray', margin: 10, borderRadius: 30 }}>
                    <View style={{ flex: 1, flexDirection: 'row', margin: 20 }}>
                        <View style={{ flex: 2 }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', fontFamily: 'italic' }}>Delievery Information</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <TouchableOpacity onPress = {this.moveAddress}>
                            <Image source={imagePath.edit} style={{ height: 20, width: 20 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', margin: 20 }}>
                        <View style={{ flex: 0.3 }}>
                            <Image source={imagePath.profile} style={{ height: 25, width: 25 }} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{this.props.route.params.name}</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', margin: 20 }}>
                        <View style={{ flex: 0.3 }}>
                            <Image source={imagePath.location} style={{ height: 25, width: 25 }} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{this.props.route.params.add}</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', margin: 20 }}>
                        <View style={{ flex: 0.3 }}>
                            <Image source={imagePath.call} style={{ height: 25, width: 25 }} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>+91-{this.props.route.params.numbers}</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', margin: 10, backgroundColor: '#F8F8FF', borderWidth: 0.2, borderRadius: 5 }}>
                    <View style={{ flex: 0, justifyContent: 'center', alignItems: 'flex-end' }}>
                        <Image source={imagePath.paytm} style={{ height: 50, width: 60 }} />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                        <TouchableOpacity>
                            <Image source={imagePath.down} style={{ height: 20, width: 20, marginLeft: 5 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <TouchableOpacity style={{ borderWidth: 0.5, borderRadius: 20, alignItems: 'center', height: 40, justifyContent: 'center', backgroundColor: 'purple' }}>
                            <Text style={{ color: 'white', fontSize: 15 }}>PAY NOW</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>




        );
    }

}

export default CheckOut;

const styles = StyleSheet.create({
    texts: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10

    }
});