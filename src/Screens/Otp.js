import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View, Modal, TouchableOpacity, TextInput, Button, Image, ScrollView } from 'react-native';
import imagePath from '../constants/imagePath'
import navigationStrings from '../constants/navigationStrings';

class Otp extends Component {
    constructor() {
        super()
        this.state = {
            pin : '',
            status : false
        }
    }

    moveLogin = () => {
        this.props.navigation.navigate(navigationStrings.Login)
    }

    moveHome = () => {
        const reg = /^[0-9]\d{3}$/ ;
        if (this.state.pin === ""){
            alert("Enter OTP")
        }
        else if (reg.test(this.state.pin) === false){
            alert("Enter Correct Otp")
        }
        else{
        this.props.navigation.navigate(navigationStrings.Profile)
        }
    }
   
    getOtp =(otp)=>{
    this.setState({pin : otp})
    }
     
    sendAgain =()=>{
        this.setState({status : true})
    }

    render() {
        const { navigation } = this.props
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={this.moveLogin}>
                        <Image source={imagePath.back} style={{ height: 30, width: 30, marginTop: 60, marginLeft: 10 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Image source={imagePath.Otp} style={{ height: 250, width: 250 }} />
                </View>
                <View style={{ flex: 1, margin: 50, alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', color: 'gray', fontSize: 16, fontFamily: 'serif' }}>Please Enter the Verification Code Sent to your Number</Text>

                </View>
                {this.state.status ?
                <View style={{ alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', color: 'gray', fontSize: 14, fontFamily: 'serif' }}>We Have Re-sended the OTP</Text>  
                </View> : null
                }


                <View style={{ flex: 1 }}>
                    <TextInput onChangeText = {(otp)=>this.getOtp(otp)} maxLength = {4} placeholder="Enter OTP" keyboardType="numeric" style={{ height: 40, marginHorizontal: 60, marginVertical: 20, alignItems: 'center', borderWidth: 0.5, borderRadius: 20, textAlign: 'center' }} ></TextInput>
                </View>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'lightgray', fontSize: 16 }}>Didn't Receive an OTP ?</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity onPress = {this.sendAgain}>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 16, margin: 20, textDecorationLine: 'underline' }}>Resend OTP</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={this.moveHome} activeOpacity={0.5} style={{ alignItems: 'center', backgroundColor: 'red', margin: 50, height: 50, justifyContent: 'center', backgroundColor: 'green', borderRadius: 20 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }} >
                            VERIFY
</Text>

                    </TouchableOpacity>

                </View>

            </ScrollView>





        )




    }







}

export default Otp;