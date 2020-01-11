import React, { Component } from 'react';
import { Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity,Linking } from 'react-native'
import { Form, Item, Input, Label } from 'native-base';
import LinearGradient from 'react-native-linear-gradient'

export default class Admission extends Component {

    state = {
        name: '',
        email: '',
        f_name: '',
        address: '',
        dob: '',
        p_number: '',
        last_qualification: '',
        course: '',
        f_marks: '',
        adhar_num: '',
        


    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <ScrollView>
                    <Text style={{ marginHorizontal: 80, fontSize: 20, marginTop: 5 }}>Admission Form / Enquiry</Text>
                    <Form>
                        <Item floatingLabel style={{ borderColor: '#fff' }} >
                            <Label style={{ fontSize: 20 }}>Name</Label>

                            <Input
                                autoCapitalize='none'
                                maxLength={20}
                                value={this.state.name}
                                onChangeText={(name) => this.setState({ name })} />
                        </Item>
                        <LinearGradient
                            start={{ x: 1.0, y: 0.1 }} end={{ x: 0.2, y: 0 }}
                            colors={['#0A3D62', '#D63031',]} style={styles.linearGradient}>
                        </LinearGradient>
                        <Item floatingLabel style={{ borderColor: '#fff' }}>
                            <Label style={{ fontSize: 20 }}>Email id</Label>
                            <Input autoCapitalize='none'
                                maxLength={20}
                                value={this.state.email}
                                onChangeText={(email) => this.setState({ email })} />
                        </Item>
                        <LinearGradient
                            start={{ x: 1.0, y: 0.1 }} end={{ x: 0.2, y: 0 }}
                            colors={['#0A3D62', '#D63031',]} style={styles.linearGradient}>
                        </LinearGradient>
                        <Item floatingLabel style={{ borderColor: '#fff' }}>
                            <Label style={{ fontSize: 20 }}>Father's Name</Label>
                            <Input autoCapitalize='none'
                                maxLength={20}
                                value={this.state.f_name}
                                onChangeText={(f_name) => this.setState({ f_name })} />
                        </Item>
                        <LinearGradient
                            start={{ x: 1.0, y: 0.1 }} end={{ x: 0.2, y: 0 }}
                            colors={['#0A3D62', '#D63031',]} style={styles.linearGradient}>
                        </LinearGradient>
                        <Item floatingLabel style={{ borderColor: '#fff' }}>
                            <Label style={{ fontSize: 20 }}>Address</Label>
                            <Input
                                autoCapitalize='none'
                                maxLength={20}
                                value={this.state.address}
                                onChangeText={(address) => this.setState({ address })} />
                        </Item>
                        <LinearGradient
                            start={{ x: 1.0, y: 0.1 }} end={{ x: 0.2, y: 0 }}
                            colors={['#0A3D62', '#D63031',]} style={styles.linearGradient}>
                        </LinearGradient>
                        <Item floatingLabel style={{ borderColor: '#fff' }}>
                            <Label style={{ fontSize: 20 }}>Date of Birth</Label>
                            <Input autoCapitalize='none'
                                maxLength={20}
                                value={this.state.dob}
                                onChangeText={(dob) => this.setState({ dob })} />
                        </Item>
                        <LinearGradient
                            start={{ x: 1.0, y: 0.1 }} end={{ x: 0.2, y: 0 }}
                            colors={['#0A3D62', '#D63031',]} style={styles.linearGradient}>
                        </LinearGradient>
                        <Item floatingLabel style={{ borderColor: '#fff' }}>
                            <Label style={{ fontSize: 20 }}>Phone Number</Label>
                            <Input style={{ fontSize: 40 }}
                                autoCapitalize='none'
                                maxLength={20}
                                keyboardType ="number-pad"
                                value={this.state.p_number}
                                onChangeText={(p_number) => this.setState({ p_number })} />
                        </Item>
                        <LinearGradient
                            start={{ x: 1.0, y: 0.1 }} end={{ x: 0.2, y: 0 }}
                            colors={['#0A3D62', '#D63031',]} style={styles.linearGradient}>
                        </LinearGradient>
                        <Item floatingLabel style={{ borderColor: '#fff' }}>
                            <Label style={{ fontSize: 20 }}>Last Qualification</Label>
                            <Input
                                autoCapitalize='none'
                                maxLength={20}
                                value={this.state.last_qualification}
                                onChangeText={(last_qualification) => this.setState({ last_qualification })} />
                        </Item>
                        <LinearGradient
                            start={{ x: 1.0, y: 0.1 }} end={{ x: 0.2, y: 0 }}
                            colors={['#0A3D62', '#D63031',]} style={styles.linearGradient}>
                        </LinearGradient>
                        <Item floatingLabel style={{ borderColor: '#fff' }}>
                            <Label style={{ fontSize: 20 }}>Course</Label>
                            <Input autoCapitalize='none'
                                maxLength={20}
                                value={this.state.course}
                                onChangeText={(course) => this.setState({ course })} />
                        </Item>
                        <LinearGradient
                            start={{ x: 1.0, y: 0.1 }} end={{ x: 0.2, y: 0 }}
                            colors={['#0A3D62', '#D63031',]} style={styles.linearGradient}>
                        </LinearGradient>
                        <Item floatingLabel style={{ borderColor: '#fff' }}>
                            <Label style={{ fontSize: 20 }}>Final Marks</Label>
                            <Input autoCapitalize='none'
                                maxLength={20}
                                value={this.state.f_marks}
                                onChangeText={(f_marks) => this.setState({ f_marks })} />
                        </Item>
                        <LinearGradient
                            start={{ x: 1.0, y: 0.1 }} end={{ x: 0.2, y: 0 }}
                            colors={['#0A3D62', '#D63031',]} style={styles.linearGradient}>
                        </LinearGradient>
                        <Item floatingLabel style={{ borderColor: '#fff' }}>
                            <Label style={{ fontSize: 20 }}>Aadhar Number</Label>
                            <Input autoCapitalize='none'
                                maxLength={20}
                                keyboardType ="number-pad"
                                value={this.state.adhar_num}
                                onChangeText={(adhar_num) => this.setState({ adhar_num })} />
                        </Item>
                        <LinearGradient
                            start={{ x: 1.0, y: 0.1 }} end={{ x: 0.2, y: 0 }}
                            colors={['#0A3D62', '#D63031',]} style={styles.linearGradient}>
                        </LinearGradient>
                        <LinearGradient
                            start={{ x: 0.0, y: 0.1 }} end={{ x: 0.2, y: 2.0 }}

                            colors={['#74B9FF', '#30336B',]} style={styles.linearGradientButton}>

                            <TouchableOpacity onPress={() => alert('Login ')}
                                style={{ width: 390, height: 50, marginVertical: 10 }}>
                                <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}>SUBMIT</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                      
                        <Text onPress={() => { Linking.openURL('https://svu.edu.in/') }}
                style={{ padding: 30, fontSize: 15 }}>Having trouble?Contact <Text style={{ color: 'skyblue' }}>support@svu.edu.in</Text></Text>
                    </Form>
                </ScrollView>
            </SafeAreaView>
        );
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

    },
    linearGradientButton: {
        width: 390,
        height: 50,
        marginTop: 50,
        left: 10
    },

})