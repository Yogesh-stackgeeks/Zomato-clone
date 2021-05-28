import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View, Modal, TouchableOpacity, TextInput, Button, Image, ScrollView } from 'react-native';
import imagePath from '../constants/imagePath'
import navigationStrings from '../constants/navigationStrings';

class SignUp extends Component {
    constructor() {
        super()

        this.state = {
            named: '',
            email: '',
            password: '',
            confirmPassword: '',
            locations : ''
        }
    }

    onChangeName = (name) => {
        this.setState({ named: name })
    }

    onChangeEmail = (email) => {
        this.setState({ email: email })
    }
    onChangePassword = (passcode) => {
        this.setState({ password: passcode })
    }
    onChangePass = (cpasscode) => {
        this.setState({ confirmPassword : cpasscode })
    }

    moveBack = () => {
        this.props.navigation.navigate(navigationStrings.Login)
    }

    moveHome = () => {
        if(this.state.named === '' || this.state.email === "" ,this.state.password === "",this.state.confirmPassword === "" ){
            alert("Fill All Fields")
        }
        else if(this.state.password !== this.state.confirmPassword){
            alert("Password and Confirm Password Dont Match")
        }
        else{
        this.props.navigation.navigate(navigationStrings.Home , {data : this.state.locations , new : ''})
        }
    }

    render() {
        const { navigation } = this.props
        return (
            <ImageBackground source={imagePath.bg} style={{ width: '100%', height: '100%' }}>
                <View style={{ marginTop: 50, marginLeft: 15 }}>
                    <TouchableOpacity onPress={this.moveBack}>
                        <Image source={imagePath.back} style={{ height: 25, width: 25 }} />
                    </TouchableOpacity>
                </View>
                <ScrollView style={{ flex: 1 }}>

                    <View style={{ margin: 40, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 50, fontWeight: 'bold', fontFamily: 'italic', color: 'gray', width: 200 }}>SIGN UP</Text>
                    </View>
                    <View style={{ flexDirection: 'column', margin: 40 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontFamily: 'italic', fontSize: 16, fontWeight: 'bold' }}>Name</Text>
                        </View>
                        <View style={{ marginTop: 5 }}>
                            <TextInput onChangeText={(name) => this.onChangeName(name)} placeholder="Enter Name" style={{ height: 40, borderWidth: 1, borderRadius: 10, padding: 5 }} />
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ fontFamily: 'italic', fontSize: 16, fontWeight: 'bold' }}>Email</Text>
                        </View>
                        <View style={{ marginTop: 5 }}>
                            <TextInput onChangeText={(email) => this.onChangeEmail(email)} placeholder="Enter Email" style={{ borderWidth: 1, borderRadius: 10, height: 40, padding: 5 }} />
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <Text style={{ fontFamily: 'italic', fontSize: 16, fontWeight: 'bold' }}>Password</Text>
                        </View>
                        <View style={{ marginTop: 5 }}>
                            <TextInput onChangeText={(passcode) => this.onChangePassword(passcode)} placeholder="Enter Password" style={{ borderWidth: 1, borderRadius: 10, height: 40, padding: 5 }} />
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <Text style={{ fontFamily: 'italic', fontSize: 16, fontWeight: 'bold' }}> Confirm Password</Text>
                        </View>
                        <View style={{ marginTop: 5 }}>
                            <TextInput onChangeText={(cpasscode) => this.onChangePass(cpasscode)} placeholder="Enter Password Again" style={{ borderWidth: 1, borderRadius: 10, height: 40, padding: 5 }} />
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ fontFamily: 'italic', fontSize: 16, fontWeight: 'bold' }}>Location</Text>
                        </View>
                        <View style={{ marginTop: 5 }}>
                            <TextInput onChangeText={(text) => this.setState({locations : text})} placeholder="Enter Location" style={{ borderWidth: 1, borderRadius: 10, height: 40, padding: 5 }} />
                        </View>
                    </View>

                    <View style={{ flex: 1 }}>

                        <TouchableOpacity onPress={this.moveHome} style={{ alignItems: 'center', borderWidth: 0.5, margin: 40, height: 40, backgroundColor: 'green', justifyContent: 'center', borderRadius: 15 }}>
                            <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>SIGN UP</Text>
                        </TouchableOpacity>

                    </View>













                </ScrollView>
            </ImageBackground>






        )





    }


}

export default SignUp;