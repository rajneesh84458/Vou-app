import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity, Image,Picker,TextInput,Linking } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Dialog from 'react-native-popup-dialog';

export default class Help extends Component {

    state ={
        visible:false,
        items:'',
        greivence:''
  }
  dialCall = () => {
 
    let phoneNumber = '';
 
    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${1234567890}';
    }
    else {
      phoneNumber = 'telprompt:${1234567890}';
    }
 
    Linking.openURL(phoneNumber);
  };


  dialEmail = () => {
 
    let email= '';
 
    if (Platform.OS === 'android') {
      email = 'mailto:foo@example.com?cc=?subject=yourSubject&body=yourMessage';
    }
    else {
     email= 'mailto:foo@example.com?cc=&subject=yourSubject&body=yourMessage';
    }
 
    Linking.openURL('mailto:?somethingemail@gmail.com&subject=abcdefg&body=body')
  };

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                {/* <LinearGradient
                    start={{ x: 1.0, y: 0.1 }} end={{ x: 0.2, y: 0 }}
                    colors={['#0A3D62', '#D63031',]} style={styles.linearGradient}>
                </LinearGradient> */}
                <Text style={{ fontSize: 20, padding: 20 }}>For any help from IT university team,send mail at :</Text>

                <TouchableOpacity  onPress={this.dialEmail} activeOpacity={0.7}
                   style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: 150 }}>
                    <Image source={require('../images/envelope.png')}
                        style={{ width: 35, height: 35 }} />

                    <Text style={{ fontSize: 20, }}>Email</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 20, color: 'blue', marginLeft: 80 }}>support@svu.edu.in</Text>
                <LinearGradient
                    start={{ x: 1.0, y: 0.1 }} end={{ x: 0.2, y: 0 }}
                    colors={['#0A3D62', '#D63031',]} style={styles.linearGradient}>
                </LinearGradient>

                <Text style={{ fontSize: 20, padding: 20,fontWeight:'bold',color:'#999' }}>For any suggestion,related to application enhancement,call us on :</Text>
                <TouchableOpacity onPress={this.dialCall} activeOpacity={0.7}
                style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: 150 }}>
                    <Image source={require('../images/phone.png')}
                        style={{ width: 35, height: 35 }} />

                    <Text style={{ fontSize: 20, }}>Mobile</Text>
                </TouchableOpacity>

                <LinearGradient
                    start={{ x: 0, y: 0.1 }} end={{ x: 0.2, y: 1.5 }}

                    colors={['#74B9FF', '#30336B',]} style={styles.linearGradientButton}>

                    <TouchableOpacity onPress={() => {
                        this.setState({ visible: true });
                    }}
                        style={{ width: 350, height: 50, marginVertical: 10 }}>
                        <Text style={{ color: 'white', fontSize: 19,left:10}}>GRIEVANCES? WRITE HERE</Text>
                    </TouchableOpacity>
                </LinearGradient>

                <Dialog
                    visible={this.state.visible}
                    onTouchOutside={() => {
                        this.setState({ visible: false });
                    }}
                >
                   
                     <View style={{width:370,height:400}}>
                     <View style={{width:370,backgroundColor:'#74B9FF',justifyContent:'center',alignItems:'center',height:50,}}>

                         <Text style ={{fontSize:20,color:'white'}}>Grievance Cell</Text>
                         </View>

                <Picker style={{padding:0,margin:0}}
                    selectedValue={this.state.items}
                   
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({ items: itemValue })
                    }>
                    <Picker.Item label="Select Type" value="select" />
                    <Picker.Item label="Name correction on marks" value="marks" />
                    <Picker.Item label="Marks correction" value="correction" />
                    <Picker.Item label="Mark sheet reprint" value="reprint" />
                    <Picker.Item label="Marks carry over update" value="carry over" />
                    <Picker.Item label="Fees and Fine" value="fine" />
                    <Picker.Item label="Diploma Degree" value="diploma" />
                    <Picker.Item label="ID Card related" value="id" />
                    <Picker.Item label="Others" value="others" />
                </Picker>
                    <TextInput placeholder ="Enter your grievances here"
                                placeholderTextColor ="#777E8B"
                                maxLength={200}
                                numberOfLines ={3}
                                value ={this.state.greivence}
                                onChangeText={(greivence)=>this.setState({greivence})}
                                multiline={true}
                                style={{fontSize:18,padding:5}}
                                />

                         </View>      
                <LinearGradient
                        start={{ x: 0.0, y: 0.1 }}

                        end={{ x: 1, y: 3.4 }}
                        colors={['#277ccb', '#fff',]} style={styles.linearGradientgrivence}>

                        <TouchableOpacity onPress={() => alert('submitting.... ')}
                            style={{ width: 200, height: 50, paddingLeft: 50, paddingVertical: 14 }}>
                            <Text style={{ fontWeight:'bold',color: 'white', fontSize: 16, justifyContent: 'center' }}>SUBMIT</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </Dialog>

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

        width: '100%',
        height: StyleSheet.hairlineWidth,
        marginTop: 15,
        marginVertical: 6

    },

    linearGradientButton: {
        width: 270,
        height: 50,
        marginTop: 50,
        left: 70
    },
    linearGradientgrivence: {
        width: 170,
        height: 50,
         left: 70,
         borderRadius:50,
         marginBottom:20,
         marginLeft:30
    },

})