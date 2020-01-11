import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View, SafeAreaView, ImageBackground, Dimensions, Image } from 'react-native'
const { width, height } = Dimensions.get('window');
import Ionicons from 'react-native-vector-icons/Ionicons';
const DEVICE_WIDTH = Dimensions.get('window').width;

  
      export default class Home extends Component {
          static navigationOptions ={
              header:null
          }
        constructor(props) {
          super(props);
          this.state = {
            showRealApp: false,
            //To show the main page of the app
          };
        }
        _onDone = () => {
          this.setState({ showRealApp: true });
        };
        _onSkip = () => {
          this.setState({ showRealApp: true });
        };
        _renderItem = ({ item }) => {
         return (
        
            <View
              style={{
                flex: 1,
               
                alignItems: 'center',
                justifyContent: 'space-around',
                paddingBottom: 110
              }}>
      
              <Text style={styles.title}>{item.title}</Text>
              <Image style={styles.image} source={item.image} />
              <Text style={{ fontWeight: 'bold', fontSize: 30,paddingTop:20 }}>Welcome</Text>
              <Text style={{ fontSize: 20, marginLeft: 5 }}>{item.text}</Text>
      
            </View>
          );
        };
    render() {
        return (
            <SafeAreaView style={styles.MainContainer}>
                <ImageBackground resizeMode="cover" d
                    source={require('../images/bg.png')}
                    style={{
                        width: width, height: 200, backgroundColor: 'rgb(0,0,0)'

                    }}>
                    <View style ={{flexDirection:'row',flex:1,padding:50,}}>
                        <View>
                            <Image source={require('../images/svu.png')}
                                style={{ width: 60, height: 60, resizeMode: 'cover', }} />
                        </View>

                        <View style={{height:50,marginLeft:10,marginVertical:5}}>
                            <Text style={{ zIndex: 1, color: 'white', fontSize: 20 }}>Shri Venkkateshwara University</Text>
                            <Text style={{ elevation: 1, color: 'white' }}>Rajabpur Gajraula - 244236,Distt,Amroha</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', width: width, height: 60, borderColor: 'red', borderWidth: 0, justifyContent: 'space-around',padding:10 }}>
                        <TouchableOpacity onPress ={()=>this.props.navigation.navigate('Register')}
                        style={styles.button}>
                            <Text style={{ fontWeight:'bold',fontSize: 16, color: 'white', textAlign: 'center' }}>SIGN UP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress ={()=>this.props.navigation.navigate('Login')}
                        style={styles.button}>
                            <Text style={{ fontWeight:'bold',fontSize: 16, color: 'white', textAlign: 'center' }}>SIGN IN</Text>
                        </TouchableOpacity>
                    </View>

                </ImageBackground>



                <TouchableOpacity onPress ={()=>this.props.navigation.navigate('AppIntro')}
                                  style={{ flexDirection: 'row', backgroundColor: '#74B9FF', borderRadius: 50, height: 50, width: '90%', marginHorizontal: 20, marginVertical: 20, paddingHorizontal: 70, paddingVertical:10 }}>
                                    
                    <Image source={require('../images/college.png')}
                           style={{ width: 35, height: 35, resizeMode: 'cover' }} />
                    <Text style={{ fontSize: 20,fontWeight:'bold', color: 'white', paddingHorizontal: 10 }}>About University</Text>
                </TouchableOpacity>
                
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
},
  button :
    { 
        backgroundColor: '#74B9FF', 
        borderRadius: 50, 
        height: 40, 
        width: '40%',
        paddingTop:10 
    }
  

});