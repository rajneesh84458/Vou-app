import React, { Component } from 'react'
import { Linking, Text, View, SafeAreaView, Image, TextInput, StyleSheet, TouchableOpacity, Picker } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import CountryPicker from 'rn-country-picker-minimal'
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone_number: '',
            language: '',
            cca2: 'IN',
            callingCode: '91',
            countryImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAMAAABpA6zvAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAqZQTFRF53MA5HIC43ID53MB9XcA+3oA9ngA53QB83cA6XMCpV8oX0hPR0RkSUVlXkdPpF8o53EA428B9ncArmIkL0OAG02vZo3TfJ3agqLcZYzTJFSzLkJ/6X0R6X0S5XsS+IQOl2E+BDqjgJ7X5eny5enz5uv05er05OjyjancCD6llmE+/fXu+/Ps///zvMPUCDefqbre8fP32ODwyNPpwMzmwc3mxNDo1N3u8fL3v8znEj+kucHS/////v//NVuwf5bK9/n7vcrkma3WgZnMf5fLlKnUusjjzdfr+Pn7iZ/OOmCz/f7///7+/Pz9tcPgGUWh4efz2eDwvMrkf5nMXH2+aojDa4jEW3y9gJnMuMbi6u/3Jk+ms8Hf+/z9aofDXn2+9ff70Nrsm6/XXHy+jKPRxNDnxdHol6vVWXq8kqfTz9ns9vj7co3Ga4fD/P3+UHK5dZDI8fT5w8/ngpvNaIbDxM/nvMnku8jkcIzGfZfLws7m8/b6iaDQU3W6dI/H8vT6aIbCu8nkucfjydTpepXK9Pb6UnS67vL4ztfrmKzWWnu9kKbTmK3WW3u9kqjTy9Xq8PP5cY3GbIjD/v/+GEWh4ujz1t7ugZrNbInEfJbL7fH4JlCns8LgOVuxfpbKzNbqlqrUfpbLe5TKytTqj6XRPWCz/v7/8fju7vXt/v/zssXUCTigs8Hi8fT309zuxtHo0Nns7vL2wMznFECkr8LT///0QJkUQJoUPpcVSKIRKHVADDqki6DY4+ny4ujy4Oby4ejyl6ndEj+mJ3Q/LpAAL5AALI4BNZgAJHomD0iAJk6xd47Uip7bjqHceI7VLlW0LY4BM5IEM5MEMZEFNZcAMpMDIXUqDFZQDE9lDlBmDFVQMpIDNpgAOJsANpkAOZsAMZEGMpEFwJ5XlQAAAAFiS0dEPKdqYc8AAAAJcEhZcwAAAEgAAABIAEbJaz4AAAGtSURBVDjLY2AY1oCRiRGICCtjZmFlY2NlYcZQyo4CGDk4ubh5ePn4OTkYUWUYBJCBoJCwiKiYuISklLSwkCCKFIMMAsjKySsoKimrqKqpq2toasnLySJJMmgjgI6unr6BoZGxiamZuYWllbWuDpIkgw0c2NrY2tk7mDk6Obu4url7eHp5A4XggMEHDnxt/PwDAoOCQ0LDwiMi3aOiY2x8EbJIJsbaxMUnJCYlp6SmpWdkZmXn5AKFECYimHk2+QWFRcUlpWXlxhWVVdU1tUAhHArr6k0jGooam5orWkxaa9pwKIy1yY1v7+js6k4t6unt658wcRKK1ZPhINbGb8rUaeXTw0NndM1sMp81e45NLEIWJXhs5s5zmF+2YOGivsjFDkuWLkMJnuUIsGLlqtVr1q5bXxZUumHjps1btq5AkmTYhgDbd+zctXvP3n1T9x/Ye/DQ4Z07tiNJMhxBAkePHT9x8tTpM2fPnT954viFo8hyDBeRwKVLl69cvXb9xs1b125fuXzpErIcw21UcPn2nbv37t2/A2SgAnSFQKUPHj58cBlDGFMhDjAUFAIALMfjyKVz+egAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTMtMTAtMDdUMTM6MTQ6MzQrMDI6MDDj9ijFAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDEzLTEwLTA3VDEzOjE0OjM0KzAyOjAwkquQeQAAAABJRU5ErkJggg==',
            showCountryModal: false
        }
    }

    setCountryData(selectedCountryData) {
        this.setState({ showCountryModal: false, ...selectedCountryData })
    }


    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Image source={require('../images/svu.png')}
                    style={{ width: 120, height: 120, marginHorizontal: 130, marginVertical: 40 }} />
                <Text style={{ fontSize: 20, marginHorizontal: 20, color: 'black' }}> Enter your Email ID and Mobile Number</Text>
                <Text style={{ fontSize: 15, marginHorizontal: 25, color: 'black', marginTop: 30 }}> You'll use this number/email id to login or if you ever need to reset this password</Text>

                <Picker
                    selectedValue={this.state.language}
                    style={{ height: 90, width: 300 }}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({ language: itemValue })
                    }>
                    <Picker.Item label="New Student" value="new" />
                    <Picker.Item label="Existing Student" value="existing" />
                    <Picker.Item label="Alumini" value="alumini" />
                </Picker>

                <View style={{ marginTop: 90 }}>
                    <TextInput style={styles.textInput}
                        autoCapitalize='none'
                        autoCompleteType='cc-number'
                        keyboardType="numeric"
                        placeholder="Name"
                        autoFocus={true}
                        maxLength={20}
                        value={this.state.name}
                        onChangeText={(name) => this.setState({ name })}
                    >
                    </TextInput>
                    <TextInput style={styles.textInput}
                        placeholder="Email id"
                        keyboardType='email-address'
                        autoCapitalize='none'
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })}>

                    </TextInput>

                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => { this.setState({ showCountryModal: true }) }}
                            style={{ flexDirection: 'row' }} >
                            <Image source={{ uri: this.state.countryImage }}
                                style={{ marginLeft: 10, width: 35, height: 25, borderRadius: 5 }} />
                            <Text style={{ fontSize: 20, paddingHorizontal: 10 }}>+{this.state.callingCode}
                            </Text>

                        </TouchableOpacity>

                        {
                            this.state.showCountryModal &&
                            <CountryPicker
                                onHide={() => this.setState({ showCountryModal: false })}
                                setCountryData={(callingCode) => this.setCountryData(callingCode)}
                                animationType ="fade"
                            />
                        }
                        <TextInput style={styles.textInput}
                            placeholder="Phone Number"
                            keyboardType='number-pad'
                            autoCapitalize='none'
                            value={this.state.phone_number}
                            onChangeText={(phone_number) => this.setState({ phone_number })}>

                        </TextInput>
                    </View>
                </View>
                <LinearGradient
                    start={{ x: 0.0, y: 0.1 }} end={{ x: 0.2, y: 2.0 }}

                    colors={['#74B9FF', '#30336B',]} style={styles.linearGradient}>

                    <TouchableOpacity onPress={() => alert('Login ')}
                        style={{ width: 350, height: 50, marginVertical: 10 }}>
                        <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>Next</Text>
                    </TouchableOpacity>
                </LinearGradient>

                <Text onPress={() => { Linking.openURL('https://svu.edu.in/') }}
                    style={{ padding: 30, fontSize: 15 }}>Having trouble?Contact <Text style={{ color: 'skyblue' }}>support@svu.edu.in</Text></Text>


            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    textInput: {
        marginTop: 30,
        fontSize: 20,
        width: 250, marginHorizontal: 20
    },
    linearGradient: {
        width: 350,
        height: 50,
        marginTop: 50,
        left: 30
    },

})