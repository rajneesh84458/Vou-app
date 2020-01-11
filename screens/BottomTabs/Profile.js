import React, { Component } from 'react'
import { Text, View, SafeAreaView, Image, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
export default class Profile extends Component {
    state = {
        name: ''
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1 }}>
                    <Image source={require('../images/svu.png')}
                        style={{ width: 100, height: 100, marginHorizontal: 150 }} />
                    <Text
                        style={{ fontSize: 20, marginHorizontal: 130, fontWeight: 'bold' }}>MOHD ARMAN</Text>
                    <LinearGradient
                        start={{ x: 1.0, y: 0.1 }} end={{ x: 0.2, y: 0 }}
                        colors={['#0A3D62', '#D63031',]} style={styles.linearGradient}>
                    </LinearGradient>

                    <View>
                        <Text style={{ fontSize: 20, padding: 10, color: '#4834DF' }}>Father's Name :  sheku</Text>
                        <LinearGradient
                            start={{ x: 1.0, y: 0.1 }} end={{ x: 0.2, y: 0 }}
                            colors={['#0A3D62', '#D63031',]} style={styles.linearGradient}>
                        </LinearGradient>

                        <Text style={{ fontSize: 20, padding: 10, color: '#4834DF' }}>Mother's Name :  Hasina Begum</Text>

                        <LinearGradient
                            start={{ x: 1.0, y: 0.1 }} end={{ x: 0.2, y: 0 }}
                            colors={['#0A3D62', '#D63031',]} style={styles.linearGradient}>
                        </LinearGradient>
                        <Text numberOfLines={5}
                            style={{ fontSize: 20, padding: 10, color: '#4834DF' }}>Address :  Hsanpur </Text>

                        <LinearGradient
                            start={{ x: 1.0, y: 0.1 }} end={{ x: 0.2, y: 0 }}
                            colors={['#0A3D62', '#D63031',]} style={styles.linearGradient}>
                        </LinearGradient>
                        <Text style={{ fontSize: 20, padding: 10, color: '#4834DF' }}>Roll No:  SET1010109190 </Text>

                        <LinearGradient
                            start={{ x: 1.0, y: 0.1 }} end={{ x: 0.2, y: 0 }}
                            colors={['#0A3D62', '#D63031',]} style={styles.linearGradient}>
                        </LinearGradient>
                        <Text style={{ fontSize: 20, padding: 10, color: '#4834DF' }}>Course:  B.Tech </Text>
                        <LinearGradient
                            start={{ x: 1.0, y: 0.1 }} end={{ x: 0.2, y: 0 }}
                            colors={['#0A3D62', '#D63031',]} style={styles.linearGradient}>
                        </LinearGradient>
                        <Text style={{ fontSize: 20, padding: 10, color: '#4834DF' }}>Admission Date:  7/09/2014   12:00 </Text>
                        <LinearGradient
                            start={{ x: 1.0, y: 0.1 }} end={{ x: 0.2, y: 0 }}
                            colors={['#0A3D62', '#D63031',]} style={styles.linearGradient}>
                        </LinearGradient>
                        <Text style={{ fontSize: 20, padding: 10, color: '#4834DF' }}>Location:  GAJRAULA </Text>
                        <LinearGradient
                            start={{ x: 1.0, y: 0.1 }} end={{ x: 0.2, y: 0 }}
                            colors={['#0A3D62', '#D63031',]} style={styles.linearGradient}>
                        </LinearGradient>
                        <Text style={{ fontSize: 20, padding: 10, color: '#4834DF' }}>Email:   </Text>
                        <LinearGradient
                            start={{ x: 1.0, y: 0.1 }} end={{ x: 0.2, y: 0 }}
                            colors={['#0A3D62', '#D63031',]} style={styles.linearGradient}>
                        </LinearGradient>
                    </View>
                    <View style={{ padding: 5, width: '90%', backgroundColor: '#FB6D4C', marginHorizontal: 20, height: 60, }}>

                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>General Aptitude Score</Text>
                        <Text style={{ fontSize: 15, color: 'white' }}>Click to improve score</Text>
                        <Text style={{ marginLeft: 300, fontSize: 30, color: 'white', marginTop: -30 }}>0%</Text>


                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    viewStyleForLine: {
        borderBottomColor: "black",
        borderBottomWidth: 0.3,
        alignSelf: 'stretch',
        width: "100%", marginHorizontal: 10
    },
    linearGradient: {

        width: '100%',
        height: StyleSheet.hairlineWidth,
        marginTop: 5,
        marginVertical: 6

    },

})

