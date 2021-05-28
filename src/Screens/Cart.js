import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, FlatList, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { color } from 'react-native-reanimated';
import FlatDataCart from '../Components/FlatDataCart';
import imagePath from '../constants/imagePath';
import navigationStrings from '../constants/navigationStrings';


class Cart extends Component {
    constructor() {
        super()
        this.state = {

            arrData: [{
                title: "Pasta",
                images: imagePath.pasta,
                price: "Rs.100",
                conting: 0,
                isActive: true
            },
            {
                title: "PIZZA",
                images: imagePath.pizza,
                price: "Rs.150",
                conting: 0,
                isActive: true
            },
            {
                title: "Coffee",
                images: imagePath.cofe,
                price: "Rs.50",
                conting: 0,
                isActive: true
            },
            {
                title: "Combo Meal",
                images: imagePath.combo,
                price: "Rs.120",
                conting: 0,
                isActive: true
            },
            {
                title: "Corn",
                images: imagePath.corn,
                price: "Rs.60",
                conting: 0,
                isActive: true
            },
            {
                title: "Chesse Chilly",
                images: imagePath.paner,
                price: "Rs.220",
                conting: 0,
                isActive: true
            },
            {
                title: "Veg Roll",
                images: imagePath.roll,
                price: "Rs.70",
                conting: 0,
                isActive: true
            },
            {
                title: "Sandwich",
                images: imagePath.sandwich,
                price: "Rs.80",
                conting: 0,
                isActive: true
            },
            {
                title: "Noodles",
                images: imagePath.noodles,
                price: "Rs.100",
                conting: 0,
                isActive: true

            },],
            count: 0,

        }
    }

    moveBack = () => {
        this.props.navigation.navigate(navigationStrings.Home)
    }

    moveToCheckOut = () => {

        this.props.navigation.navigate(navigationStrings.CheckOut ,  {name : '' , add : '',
            numbers : ''})

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



    onAddNow = (index) => {
        let store = this.state.arrData
        store[index].isActive = false
        this.setState({ count: this.state.count + 1 })
    }

    onAdd = (index) => {
        let store = this.state.arrData
        let add = store[index].conting + 1
        store[index].conting = add
        this.setState({ arrData: store })
    }
    onMinus = (index) => {
        if (this.state.arrData[index].conting > 0) {
            let store = this.state.arrData
            let minus = store[index].conting - 1
            store[index].conting = minus
            this.setState({ arrData: store })
        }
        else {
            let store = this.state.arrData
            store[index].isActive = true
            this.setState({ count: this.state.count - 1 })
        }

    }
    render() {
        const { navigation } = this.props
        return (

            <View style={{ flex: 1 }}>
                <ImageBackground source={imagePath.momos} style={{ height: 200, width: '100%' }}>
                    <View style={{ flex: 0, flexDirection: 'row', marginTop: 40 }}>
                        <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 10 }}>
                            <TouchableOpacity onPress={this.moveBack}>
                                <Image source={imagePath.back} style={{ height: 20, width: 20 }} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'column', alignItems: "flex-end", margin: 6, paddingRight: 15 }}>
                            <View style={{ paddingRight: 10 }}>
                                <Text style={{ fontWeight: 'bold' }}>{this.state.count}</Text>
                            </View>
                            <View >
                                <TouchableOpacity onPress={this.moveToCheckOut}>
                                    <Image source={imagePath.shopping} style={{ height: 30, width: 30 }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>

                    <View style={{ flex: 0, flexDirection: 'row', margin: 20 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.texts} >PIZZA CAFE</Text>
                            <Text style={styles.texts}>Street Foods</Text>
                            <Text style={styles.texts}>Sec-17 , Chandigarh</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end' }}>

                            <View style={{ flex: 0, flexDirection: 'row', backgroundColor: 'yellow', borderRadius: 10, margin: 5, alignItems: 'center', height: 30, width: 80 }}>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text>4.3</Text>

                                </View>
                                <View style={{ flex: 1 }}>
                                    <Image source={imagePath.star} style={{ height: 20, width: 20 }} />
                                </View>
                            </View>
                            <View style={{ flex: 0, alignItems: 'center', margin: 5, backgroundColor: 'green', borderRadius: 10, height: 30, justifyContent: 'center', width: 80 }}>
                                <Text>8 PHOTOS</Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                <View style={{ flex: 0.2, flexDirection: 'row', backgroundColor: 'gray' }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <Text style={styles.texts}>DELIEVERY</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <Text style={styles.texts}>DINING</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity >
                            <Text style={styles.texts}>REVIEWS</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 0, margin: 5 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'italic' }}>FULL MENU </Text>

                </View>
                <View
                    style={{
                        borderBottomColor: 'gray', borderBottomWidth: 2, marginTop: 20
                    }}
                />
                <View style={{ flex: 3 }} >
                    <FlatList
                        data={this.state.arrData}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={this.flatListItemSeparator}
                        renderItem={({ item, index, onAddNow }) =>
                            <FlatDataCart
                                item={item}
                                index={index}
                                onAddNow={this.onAddNow}
                                onAdd={this.onAdd}
                                onMinus={this.onMinus}
                            />
                        }

                    />

                </View>
                <View style={{ flex: 0.5 }}>
                    <TouchableOpacity onPress={() => this.moveToCheckOut()} style={{ alignItems: 'center', borderWidth: 2, margin: 15, height: 50, justifyContent: 'center', borderRadius: 25, backgroundColor: 'lightgray' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>CHECKOUT</Text>
                    </TouchableOpacity>

                </View>

            </View>

        )
    }
}

export default Cart;

const styles = StyleSheet.create({
    texts: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'


    }
});