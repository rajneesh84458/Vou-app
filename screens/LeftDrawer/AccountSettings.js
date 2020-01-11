import React, { Component } from 'react'
import { Text, View,SafeAreaView ,StyleSheet,TouchableOpacity,Linking} from 'react-native'
import  LinearGradient from 'react-native-linear-gradient'
export default class AccountSettings extends Component {
    render() {
        return (
            <SafeAreaView style={{flex:1}}>

             
                     <View style={{margin:20,}}>    
                    <Text onPress={() => { Linking.openURL('https://google.com') }}
                        style={styles.textInput}>
                           Terms of Services  
                    </Text>
                    <LinearGradient
                    start={{ x: 1.0, y: 0.1 }} end={{ x: 0.2, y: 0 }}
                    colors={['#0A3D62', '#D63031',]} style={styles.linearGradient}>
                </LinearGradient>
                    <Text onPress={() => { Linking.openURL('https://google.com') }}
                        style={styles.textInput}>
                         Privacy Policy 
                    </Text>
                    <LinearGradient
                    start={{ x: 1.0, y: 0.1 }} end={{ x: 0.2, y: 0 }}
                    colors={['#0A3D62', '#D63031',]} style={styles.linearGradient}>
                </LinearGradient>
                    <Text onPress={() => { Linking.openURL('https://google.com') }}
                        style={styles.textInput}>
                               Take Down Policy  
                    </Text>
                    </View>
               <LinearGradient
                        start={{ x: 0.0, y: 0.1 }}

                        end={{ x: 1, y: 3.4 }}
                        colors={['#277ccb', '#fff',]} style={styles.linearGradientButton}>

                        <TouchableOpacity onPress={() => alert('payment..... ')}
                            style={{ width: 200, height: 50, paddingLeft: 50, paddingVertical: 14 }}>
                            <Text style={{ color: 'white', fontSize: 16,fontWeight:"bold"  }}>LOG OUT</Text>
                        </TouchableOpacity>
                    </LinearGradient>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
     textInput: {
        marginVertical:10,
        fontSize:20,
        color:'blue'
        
    },
    linearGradient: {

        width: '100%',
        height: StyleSheet.hairlineWidth,
        marginTop: 15,
        marginVertical: 6

    },
    linearGradientButton: {
        width: 200,
        height: 50,
        marginTop: 50,
        left: 100,
         borderRadius:10
    },
      
})