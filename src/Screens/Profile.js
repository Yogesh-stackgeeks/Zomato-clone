import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View, Modal, TouchableOpacity, TextInput, Button, Image, ScrollView } from 'react-native';
import imagePath from '../constants/imagePath'
import navigationStrings from '../constants/navigationStrings';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-picker';

class Profile extends Component {
    constructor() {
        super()
        this.state ={
            localuri : 0
        }
    }



    
    openImagePickerAsync = ()=>{
    var options = {
            titlr : 'Select Image',
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };
          launchCamera(options , res =>{  
               console.log('Response = ', res);
        }
          );

          launchImageLibrary(options , res2 =>{
              console.log("res" , res2)
              if (res2.didCancel) {
                console.log('User cancelled image picker');
              } else if (res2.error) {
                console.log('ImagePicker Error: ', res2.error);
              } else {
                let source = res2;
                this.setState({
                  localuri : source,
                });
              }
            });
          };


          

      


    
    
moveHome = ()=>{
    this.props.navigation.navigate(navigationStrings.Home)
}


moveLogin =()=>{
    this.props.navigation.navigate(navigationStrings.Login)
}

    render() {
        const { navigation } = this.props
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: '#F08080', flexDirection: 'column', padding: 20, height: 250 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                        <TouchableOpacity onPress ={this.moveLogin}>
                            <Image source={imagePath.back} style={{ height: 22, width: 22, marginTop: 10 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Edit Profile</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <TouchableOpacity activeOpacity={0.5} onPress ={this.moveHome}>
                                <Text style={{ textAlign: 'right', fontSize: 20, fontWeight: 'bold', color: 'white' }}>SAVE</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <Image source={imagePath.profile} style={{ height: 100, width: 100 , borderRadius : 50 }} />
                        </View>
                        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: "flex-start" }}>
                            <TouchableOpacity onPress ={this.openImagePickerAsync}>
                                <Image source={imagePath.add} style={{ height: 20, width: 20 }} />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

                <View style={{ flex: 1, marginTop: 60 }}>
                    <View style={{ flex: 1, flexDirection: 'row', padding: 20 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.texts}>Name</Text>

                        </View>
                        <View style={{ flex: 1.5 }}>
                            <TextInput placeholder="Enter Name" style={styles.inputs} />

                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', padding: 20 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.texts}>Location</Text>

                        </View>
                        <View style={{ flex: 1.5 }}>
                            <TextInput placeholder="Enter Location" style={styles.inputs} />

                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', padding: 20 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.texts}>Email</Text>

                        </View>
                        <View style={{ flex: 1.5 }}>
                            <TextInput keyboardType = "email-address" placeholder="Enter Email" style={styles.inputs} />

                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', padding: 20 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.texts}>Password</Text>

                        </View>
                        <View style={{ flex: 1.5 }}>
                            <TextInput keyboardType ="visible-password" placeholder="Enter Password" style={styles.inputs} />

                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', padding: 20 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.texts}>Confirm Password</Text>

                        </View>
                        <View style={{ flex: 1.5 }}>
                            <TextInput  keyboardType ="visible-password" placeholder="Enter Password Again" style={styles.inputs} />

                        </View>
                    </View>
                </View>
            </ScrollView>

        )


    }

}
export default Profile;


const styles = StyleSheet.create({
    inputs: {
        height: 40,
        borderBottomWidth: 2,
        width: 180

    },
    texts: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'serif',
        fontStyle: 'italic'
    }
});
