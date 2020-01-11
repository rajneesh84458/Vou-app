import React, { Component } from 'react';
//import react in our code. 
import { View, StyleSheet, Text, Linking } from 'react-native';
//import all the components we are going to use.

export default class Results extends Component {
    render() {
        return (
            <View style={styles.container}>
 {/* open a web browser when we click on the box */}
                <View style={styles.boxStyle}>
                    <Text onPress={() => { Linking.openURL('https://aboutreact.com') }}
                        style={styles.textStyle}>
                        Marks : Ist Sem
                    </Text>
                </View>
                <View style={styles.boxStyle}>
                    <Text onPress={() => { Linking.openURL('https://aboutreact.com') }}
                        style={styles.textStyle}>
                        Marks : IInd Sem
                    </Text>
                </View>
                <View style={styles.boxStyle}>
                    <Text onPress={() => { Linking.openURL('https://aboutreact.com') }}
                        style={styles.textStyle}>
                        Marks : Vth Sem
                    </Text>
                </View>
                <View style={styles.boxStyle}>
                    <Text onPress={() => { Linking.openURL('https://aboutreact.com') }}
                        style={styles.textStyle}>
                        Marks : VIth Sem
                    </Text>
                </View>
                <View style={styles.boxStyle}>
                    <Text onPress={() => { Linking.openURL('https://aboutreact.com') }}
                        style={styles.textStyle}>
                        Marks : VIIth Sem
                    </Text>
                </View>
                <View style={styles.boxStyle}>
                    <Text onPress={() => { Linking.openURL('https://aboutreact.com') }}
                        style={styles.textStyle}>
                        Marks : VIIIth Sem
                    </Text>
                </View>
                <View style={styles.boxStyle}>
                    <Text onPress={() => { Linking.openURL('https://aboutreact.com') }}
                        style={styles.textStyle}>
                        Marks : IIIrd Sem
                    </Text>
                </View>
                <View style={styles.boxStyle}>
                    <Text onPress={() => { Linking.openURL('https://aboutreact.com') }}
                        style={styles.textStyle}>
                        Marks : IVth Sem
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#ecf0f1',
    },
    textStyle: {
        padding: 5,
        color: '#616C6F',
        fontSize: 15
    },

    boxStyle:
    {
        width: '95%',
        height: 30,
        borderColor: '#3498DB',
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 10,
        marginBottom:10
    }

});