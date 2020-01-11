import React, { Component } from 'react'
import { Text, View, SafeAreaView, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export default class PayFees extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <View style={{ marginHorizontal: 50 }}>
                    <TextInput style={styles.textInput}
                        placeholder="Enter amount"></TextInput>
                    <TextInput style={styles.textInput}
                        placeholder="Enrollment no,if existing student."></TextInput>
                    <TextInput style={styles.textInput}
                        placeholder="Enter name"></TextInput>
                    <TextInput style={styles.textInput}
                        placeholder="Enter mobile"></TextInput>
                    <TextInput style={styles.textInput}
                        placeholder="Enter Description"></TextInput>

                    <LinearGradient
                        start={{ x: 0.0, y: 0.1 }}

                        end={{ x: 1, y: 3.4 }}
                        colors={['#277ccb', '#fff',]} style={styles.linearGradient}>

                        <TouchableOpacity onPress={() => alert('payment..... ')}
                            style={{ width: 200, height: 50, paddingLeft: 50, paddingVertical: 14 }}>
                            <Text style={{ color: 'white', fontSize: 16, justifyContent: 'center' }}>MAKE PAYMENT</Text>
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
        borderBottomColor: '#277ccb',
        borderBottomWidth: 1,
        width: 300,
        paddingVertical: 15,

    },
    linearGradient: {
        width: 200,
        height: 50,
        borderRadius: 15,
        marginTop: 50,
        left: 50
    },

})