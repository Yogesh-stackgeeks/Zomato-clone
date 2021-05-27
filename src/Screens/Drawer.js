import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Switch } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import imagePath from '../constants/imagePath';
import { TouchableOpacity } from 'react-native-gesture-handler';
import navigationStrings from '../constants/navigationStrings';

export function Drawer(props) {


    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    }

    const moveHistory = () => {
        props.navigation.navigate(navigationStrings.History)
    }

    const moveProfile = () => {
        props.navigation.navigate(navigationStrings.Profile)
    }
    const moveLogin = () => {
        props.navigation.navigate(navigationStrings.Login)
    }
    const moveToCheckOut = () => {
        props.navigation.navigate(navigationStrings.CheckOut , {name : '' , add : '' , numbers : ''})
    }
    const moveHome = () => {
        props.navigation.navigate(navigationStrings.Home)
    }

    return (
       

        <ScrollView scrollEnabled={true} style={{ flex: 1, padding: 20, marginTop: 60 }} >
            <TouchableOpacity activeOpacity={0.8} onPress={moveProfile} style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <Image source={imagePath.main} style={{ height: 80, width: 80 }} />
                </View>
                <View style={{ flex: 1.6, flexDirection: 'column' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Yogesh Bansal</Text>
                    </View>
                    <View style={{ flex: 3 }}>
                        <Text style={{ color: 'gray', fontWeight: 'bold' }}>@itsme1234</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={{ flex: 1, flexDirection: 'row', marginTop: 30, backgroundColor: '#FFFAF0', borderRadius: 20 }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', color: 'black' }}>Total Orders :-</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>20</Text>
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'column', marginTop: 50 }}>
                <TouchableOpacity onPress={moveHome} activeOpacity={0.5} style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Image source={imagePath.homepage} style={{ height: 30, width: 30 }} />
                    </View>
                    <View style={{ flex: 2 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Home</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={moveToCheckOut} activeOpacity={0.5} style={{ flex: 1, flexDirection: 'row', marginTop: 30 }}>
                    <View style={{ flex: 1 }}>
                        <Image source={imagePath.bag} style={{ height: 30, width: 30 }} />
                    </View>
                    <View style={{ flex: 2 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Cart</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={moveHistory} activeOpacity={0.5} style={{ flex: 1, flexDirection: 'row', marginTop: 30 }}>
                    <View style={{ flex: 1 }}>
                        <Image source={imagePath.history} style={{ height: 30, width: 30 }} />
                    </View>
                    <View style={{ flex: 2 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>History</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} style={{ flex: 1, flexDirection: 'row', marginTop: 30 }}>
                    <View style={{ flex: 1 }}>
                        <Image source={imagePath.offer} style={{ height: 30, width: 30 }} />
                    </View>
                    <View style={{ flex: 2 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Offers</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} style={{ flex: 1, flexDirection: 'row', marginTop: 30 }}>
                    <View style={{ flex: 1 }}>
                        <Image source={imagePath.settings} style={{ height: 30, width: 30 }} />
                    </View>
                    <View style={{ flex: 2 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Settings</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} style={{ flex: 1, flexDirection: 'row', marginTop: 30 }}>
                    <View style={{ flex: 1 }}>
                        <Image source={imagePath.call} style={{ height: 30, width: 30 }} />
                    </View>
                    <View style={{ flex: 2 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Support</Text>
                    </View>
                </TouchableOpacity>
                <View
                    style={{
                        borderBottomColor: 'lightgray', borderBottomWidth: 1, marginTop: 20
                    }}
                />
            </View>
            <View style={{ flex: 1, marginTop: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'gray' }}>Preferences</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', marginTop: 20 }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Dark Theme</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Switch value={isEnabled}
                        onValueChange={toggleSwitch}
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "green" : "red"} />
                </View>
            </View>

            <TouchableOpacity onPress={moveLogin} activeOpacity={0.7} style={{ flex: 1, flexDirection: 'row', marginTop: 50, backgroundColor: '#F8F8FF', width: '100%', height: 50, borderRadius: 10 }}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Image source={imagePath.logout} style={{ height: 20, width: 20 }} />
                </View>
                <View style={{ flex: 3, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Sign Out</Text>
                </View>
            </TouchableOpacity>









        </ScrollView>
    )
}