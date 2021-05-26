import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, FlatList, TouchableOpacity, Modal, SafeAreaView, ScrollView } from 'react-native';
import FlatDataAddress from '../Components/FlatDataAddress';
import imagePath from '../constants/imagePath';
import navigationStrings from '../constants/navigationStrings';

class Address extends Component {
    constructor() {
        super()
        this.state = {
            arrData: [],
            modale: false,
            main : '',
            address : '',
            pin : '',
            number : ''
        }
    }

    oncheck = (index)=>{
       if(this.state.arrData[index].checked === false){
           let store = this.state.arrData
           store[index].checked = true
         this.setState({arrData : store})
       }
       else{
        let store = this.state.arrData
           store[index].checked = false
           this.setState({arrData : store})
       }
    }


    closeModal = () => {
        this.setState({ modale: false })
    }
    openModal = () => {
        this.setState({ modale: true })
    }

    moveBack = ()=>{
  if (this.state.arrData.checked == false){
      alert("select")
  }
  else{
        this.props.navigation.navigate(navigationStrings.CheckOut)
  }
       
    }

    moveData =()=>{
        const newData = [...this.state.arrData]
        newData.push({id : Math.random().toString() , named : this.state.main , adress : this.state.address , pinn : this.state.pin , numbered : this.state.number , checked : false})
        this.setState((prevState)=>{
          return {
            arrData : [...newData], 
        modale : false   }
          })}

    render() {
        const { navigation } = this.props
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'green', borderBottomRightRadius: 50, borderBottomWidth: 0.4, borderBottomLeftRadius: 50 ,height : 200 }}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 30, fontWeight: 'bold' }}>DELIEVERY ADDRESS</Text>
                    </View>
                </View>

                <View style={{ flex: 0, alignItems: 'flex-end', margin: 20 }}>
                    <TouchableOpacity onPress={this.openModal}>
                        <Image source={imagePath.add} style={{ height: 35, width: 35 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 3 }}>
                    <FlatList
                        data={this.state.arrData}
                        showsVerticalScrollIndicator={false}
                        scrollEnabled={true}
                        ItemSeparatorComponent={this.flatListItemSeparator}
                        renderItem={({ item, index }) =>
                            <FlatDataAddress item={item}
                                index={index}
                                oncheck = {this.oncheck}
                            />
                        } />
                </View>

                <View style ={{flex : 1}}>
                    <TouchableOpacity activeOpacity = {0.5} onPress = {this.moveBack} style ={{ backgroundColor : 'green' , height : 40 , margin : 20 , justifyContent :'center' , borderRadius : 15 , borderWidth : 0.5}}>
                        <Text style ={{textAlign: 'center', color: 'white', fontSize: 20, fontWeight: 'bold' }}>SAVE</Text>
                    </TouchableOpacity>
                </View>

                <Modal visible={this.state.modale}>
                    <ScrollView style={{ flex: 1, backgroundColor: '#FFF8DC' }} >
                        <View style={{ flex: 0, alignItems: 'flex-end', margin: 20 }}>
                            <TouchableOpacity onPress={this.closeModal}>
                                <Image source={imagePath.close} style={{ height: 40, width: 40 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, backgroundColor: 'white', borderWidth: 1, borderRadius: 30, marginVertical: 100, marginHorizontal: 30, padding: 20, height: 500 }}>
                            <View style={{ flex: 0 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Name</Text>
                            </View>
                            <View style={{ flex: 0.4 }}>
                                <TextInput onChangeText = {(text)=>this.setState({main : text})} style={{ borderWidth: 0.5, height: 40, borderRadius: 10, textAlign: 'center' }}  placeholder="Enter Name" />
                            </View>

                            <View style={{ flex: 0 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Address</Text>
                            </View>

                            <View style={{ flex: 0.4 }}>
                                <TextInput onChangeText = {(text)=>this.setState({address : text})} style={{ borderWidth: 0.5, height: 40, borderRadius: 10, textAlign: 'center' }} placeholder="Enter Address" />
                            </View>

                            <View style={{ flex: 0 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }} >ZIP Code</Text>
                            </View>

                            <View style={{ flex: 0.4 }}>
                                <TextInput onChangeText = {(text)=>this.setState({pin : text})} style={{ borderWidth: 0.5, height: 40, borderRadius: 10, textAlign: 'center' }} keyboardType ='numeric' placeholder="Enter Pin" />
                            </View>




                            <View style={{ flex: 0 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Mobile Number</Text>
                            </View>

                            <View style={{ flex: 0.4 }}>
                                <TextInput maxLength ={10} onChangeText = {(text)=>this.setState({number : text})} style={{ borderWidth: 0.5, height: 40, borderRadius: 10, textAlign: 'center' }} placeholder="Enter Number" keyboardType="numeric" />
                            </View>



                            <View>
                                <TouchableOpacity onPress = {this.moveData} style={{ backgroundColor: 'green', margin: 50, height: 40, justifyContent: 'center', borderRadius: 30, borderWidth: 0.5 }}>
                                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, fontWeight: 'bold'}}>ADD</Text>
                                </TouchableOpacity>
                            </View>



                        </View>

                    </ScrollView>

                </Modal>
            </ScrollView>

        )
    }









}
export default Address;