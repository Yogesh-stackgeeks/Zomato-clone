import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View, Modal, TouchableOpacity, TextInput, Button, Image, ScrollView } from 'react-native';
import imagePath from '../constants/imagePath'
import navigationStrings from '../constants/navigationStrings';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            number: ''
        }
    }

    onChangeText = (e) => {
        this.setState({ number: e })
    }

    moveToHome = () => {
        this.props.navigation.navigate(navigationStrings.Home ,{data : '' , new : ''})
    }

    moveToOtp = () => {
        const reg = /^[789765]\d{9}$/;
        if (this.state.number === "") {
            alert("Enter  Mobile Number")
        }
        else if (reg.test(this.state.number) === false) {
            alert("Enter Correct  Number")
        }
        else {
            this.props.navigation.navigate(navigationStrings.Otp)
            this.setState({ number: '' })
        }
    }

    moveToSignUp = () => {
        this.props.navigation.navigate(navigationStrings.SignUp)
    }

    render() {
        const { navigation } = this.props
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#cb202d' }}>

                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <TouchableOpacity onPress={this.moveToHome} style={{ backgroundColor: '#696969', width: 80, borderRadius: 15, height: 32, margin: 30, justifyContent: 'center' }}>
                        <Text style={{ color: 'white', textAlign: 'center', fontFamily: 'italic' }}>Skip</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ alignItems: 'center', flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 0 }}>
                        <Image source={imagePath.foodlogo} style={{ width: 150, height: 150 }} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold', fontFamily: 'italic', textShadowColor: 'black', textShadowRadius: 10 }}>FOODIE PIE</Text>
                        <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold', fontFamily: 'italic', textShadowColor: 'white', textShadowRadius: 5 }}>Delievers your food at Time</Text>
                    </View>

                </View>

                <View style={{ flex: 1, flexDirection: 'column', margin: 40 }}>
                    <View style={{ flex: 1, flexDirection: 'row', borderRadius: 10, backgroundColor: 'white' }}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Image source={imagePath.india} style={{ height: 30, width: 30 }} />
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text>+91</Text>
                        </View>
                        <View style={{ flex: 5, justifyContent: 'center' }}>
                            <TextInput value={this.state.number} maxLength={10} onChangeText={(e) => { this.onChangeText(e) }} keyboardType='numeric' placeholder="Phone Number" style={{ height: 50 }} />
                        </View>
                    </View>
                    <TouchableOpacity onPress={(e) => this.moveToOtp(e)} style={{ flex: 1, borderRadius: 10, backgroundColor: 'black', justifyContent: 'center', marginTop: 15, height: 50 }}>

                        <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>LOG IN</Text>


                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.moveToSignUp} style={{ flex: 1, borderRadius: 10, backgroundColor: 'green', justifyContent: 'center', marginTop: 15, height: 50 }}>

                        <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>SIGN UP</Text>


                    </TouchableOpacity>
                </View>
                <View style={{ flex: 0, justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', fontFamily: 'italic', color: 'darkgray' }}>__________________OR__________________</Text>
                </View>

                <View style={{ flex: 1, flexDirection: 'column', margin: 30 }}>

                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row', backgroundColor: 'white', borderRadius: 10, height: 50 }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={imagePath.email} style={{ height: 30, width: 30 }} />
                        </View>
                        <View style={{ flex: 4, justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'center', fontFamily: 'italic' }}>Continue with Email</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 20 }}>
                        <TouchableOpacity style={{ flex: 1, flexDirection: 'row', backgroundColor: 'white', borderRadius: 10, height: 50 }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={imagePath.facebook} style={{ height: 30, width: 30 }} />
                            </View>
                            <View style={{ flex: 2, justifyContent: 'center' }}>
                                <Text style={{ textAlign: 'center', fontFamily: 'italic' }}>Facebook</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, flexDirection: 'row', backgroundColor: 'white', borderRadius: 10, marginLeft: 20, height: 50 }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                                <Image source={imagePath.gmail} style={{ height: 30, width: 30 }} />
                            </View>
                            <View style={{ flex: 2, justifyContent: 'center' }}>
                                <Text style={{ textAlign: 'center', fontFamily: 'italic' }}>Google</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'column' }} >
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', color: 'white', marginTop: 80, fontSize: 10 }}>By continuing, you agree to our</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, marginTop: 20 }}>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 10, color: 'white', textDecorationLine: 'underline' }}>Terms of Service</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 10, color: 'white', textDecorationLine: 'underline' }}>Privacy Policy</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 10, color: 'white', textDecorationLine: 'underline' }}>Content Policy</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>


        );
    }
}
export default Login;