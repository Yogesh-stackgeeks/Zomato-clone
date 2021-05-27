import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import FlatDataHome from '../Components/FlatDataHome';
import FlatDataHome2 from '../Components/FlatDataHome2';
import imagePath from '../constants/imagePath';
import navigationStrings from '../constants/navigationStrings';
import Sidebar from 'react-native-sidebar';
import TabBar from '../Navigation/TabBar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Drawer} from '../Screens/Drawer';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrData: [
                { title: "Max Safety" },
                { title: "Cuisines" },
                { title: "Fast Delievery" },
                { title: "TakeAway" },
                { title: "Offers" },
                { title: "Rating 4.0+" },
                { title: "Popular" },

            ],

            arrFood: [{ title: "PIZZA", images: imagePath.pizza },
            { title: "NOODLES", images: imagePath.noodles },
            { title: "BURGER", images: imagePath.burger },
            { title: "OMELETE", images: imagePath.egg }],

            arrFood2: [{ title: "SANDWICH", images: imagePath.sandwich },
            { title: "COFFEE", images: imagePath.cofe },
            { title: "CHESSE ", images: imagePath.paner },
            { title: "CORN", images: imagePath.corn }],



            arrShops: [
                { title: 'Pizza Cafe', images: imagePath.cafe, ratings: 4.9 },
                { title: 'China Town', images: imagePath.pizza, ratings: 4.4 },
                { title: 'Town Hub', images: imagePath.pasta, ratings: 4.1 },
                { title: 'Momos Cafe', images: imagePath.momos, ratings: 3.9 },
                { title: 'Chinese Express', images: imagePath.sandwich, ratings: 3.5 },
                { title: 'Hello Food', images: imagePath.combo, ratings: 4.6 },
                { title: 'Yo Pizza', images: imagePath.yo, ratings: 4.1 },
                { title: 'China Way', images: imagePath.noodles, ratings: 3.5 },
                { title: 'Indiano', images: imagePath.roll, ratings: 3.9 },
                { title: 'Street 99', images: imagePath.cofe, ratings: 4.5 }
            ]

        }
    }
    moveToCheckOut = () => {
        this.props.navigation.navigate(navigationStrings.CheckOut)
    }
    moveToCart =()=>{
        this.props.navigation.navigate(navigationStrings.Cart)
    }
    moveHistory =()=>{
        this.props.navigation.navigate(navigationStrings.History)
    }
    render() {
        console.log(this.props.route.params, "what getting")
        const Draw = createDrawerNavigator()
    
        const { navigation } = this.props

        

      
       
        return (
            <ScrollView showsVerticalScrollIndicator ={false}>
            
                <View style={{ flex: 1 }}>

                    <View style={{ flex: 0, flexDirection: 'row', marginTop: 50 }}>
                        <View style={{ flex: 0.5 }}>
                            <Image source={imagePath.location} style={{ height: 30, width: 30 }} />
                        </View>
                        <View style={{ flex: 4 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, fontStyle: 'serif' }}>{this.props.route.params.data}</Text>
                        </View>
                        <View style={{ flex: 0.7 }}>
                            <Image source= {{uri : this.props.route.params.new}} style={{ height: 40, width: 40, marginTop: 2 ,borderRadius : 30 }} />
                        </View>
                    </View>

                    <View style={{ flex: 0.09, flexDirection: 'row', margin: 20, borderWidth: 0.2, borderRadius: 10 }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={imagePath.search} style={{ height: 25, width: 25 }} />
                        </View>
                        <View style={{ flex: 5, justifyContent: 'center' }}>

                            <TextInput placeholder="Restaurent Name , Cuisine or dish" />
                        </View>
                    </View>

                    <View style={{ flex: 0 }}>
                        <FlatList
                            data={this.state.arrData}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) =>
                                <View style={{ borderWidth: 0.3, borderRadius: 10, margin: 5, width: 90, height: 30, justifyContent: 'center' }}>
                                    <Text style={{ textAlign: 'center' }}>{item.title}</Text>
                                </View>

                            }

                        />

                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', margin: 10 }}>
                        <View style={{ flex: 1, backgroundColor: 'skyblue', borderRadius: 20, margin: 10 }} >
                            <View>
                                <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', color: 'white' }}>home Style</Text>
                                <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>food!</Text>
                                <Text style={{ fontSize: 15, marginLeft: 10, color: 'white', fontStyle: 'serif' }}>a taste of home for {'\n'}you</Text>
                                <Image source={imagePath.next} style={{ height: 30, width: 30, margin: 20 }} />
                            </View>

                        </View>
                        <View style={{ flex: 1, backgroundColor: 'violet', borderRadius: 20, margin: 10 }} >
                            <View>
                                <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', color: 'white' }}>the best</Text>
                                <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>offers!</Text>
                                <Text style={{ fontSize: 15, marginLeft: 10, color: 'white', fontStyle: 'serif' }}>at the best restaurents</Text>
                                <Image source={imagePath.next} style={{ height: 30, width: 30, margin: 35 }} />
                            </View>

                        </View>
                    </View>

                    <View style={{ flex: 1.5, flexDirection: 'column' }}>
                        <Text style={{ margin: 10, fontSize: 20, fontWeight: 'bold' }}>Eat What makes you Happy</Text>
                        <FlatList
                            data={this.state.arrFood}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) =>
                                <FlatDataHome2 item={item}
                                    index={index}
                                />
                            }
                        />

                        <FlatList
                            data={this.state.arrFood2}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) =>
                                <FlatDataHome2 item={item}
                                    index={index}
                                />
                            }
                        />
                    </View>

                    <View style={{ flex: 0.4 }} >
                        <FlatList
                            data={this.state.arrShops}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) =>

                                <FlatDataHome item={item}
                                    index={index}
                                    moveToCart={this.moveToCart} />



                            }
                        />





                    </View>
                </View>
            </ScrollView>
            
        );
    }
}
export default Home;