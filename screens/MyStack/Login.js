import React, { Component } from 'react'
import { Text, View, SafeAreaView, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
         text: ''
        }
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{width:'100%',height:70,backgroundColor:'#277ccb',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:30,color:'white',fontWeight:'bold'}}>Login</Text>
                </View>
               <Image source={require('../images/svu.png')}
                    style={{ width: 120, height: 120, marginHorizontal: 130, marginVertical: 40 }} />
                <Text style={{ fontWeight: 'bold', fontSize: 30, marginHorizontal: 40, color: '#ccc' }}> Welcome  To SVU !</Text>
                <View style={{ marginHorizontal: 50 }}>
                    <TextInput style={styles.textInput}
                       
                        autoCapitalize='none'
                        autoCompleteType ='cc-number'
                        keyboardType="numeric"
                        placeholder="Enrollment Number"
                        autoFocus={true} 
                        maxLength={20}
                        onChangeText={(text) => this.setState({text})}>

                    </TextInput>
                    <TextInput style={styles.textInput}
                        placeholder="Enter MOTHER's name"
                        secureTextEntry ={true}
                        autoCapitalize='none'
                        ></TextInput>
                        
                    <Text style={{ marginTop: 30, fontStyle: 'italic', color: '#AE1438' }}>NOTE: Enter MOTHER's name as password.</Text>

                    <LinearGradient
                        start={{ x: 0.0, y: 0.15 }} end={{ x: 0.5, y: 3.0 }}

                        colors={['#277ccb', '#fff',]} style={styles.linearGradient}>

                        <TouchableOpacity onPress={() => alert('Login ')}
                            style={{ width: 200, height: 50, paddingLeft: 70, marginVertical: 10 }}>
                            <Text style={{ color: 'white', fontSize: 20, justifyContent: 'center' }}>Login</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
  

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        marginTop: 30,
        fontSize: 20,
        marginBottom: 10,
        borderBottomColor: '#277ccb',
        borderBottomWidth: 1,
        width: 250
    }, linearGradient: {
        width: 200,
        height: 50,

        borderRadius: 15,
        marginTop: 50,
        left: 50
    },

})

