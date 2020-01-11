import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen'
import AppIntroSlider from 'react-native-app-intro-slider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import { ScrollView, StyleSheet, Dimensions, Text, View, SafeAreaView, StatusBar, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'

import PayFees from './screens/BottomTabs/PayFees';
import Profile from './screens/BottomTabs/Profile';
import Messages from './screens/LeftDrawer/Messages';
import Gallery from './screens/LeftDrawer/Gallery';
import MyAttendance from './screens/LeftDrawer/MyAttendance';
import Myfees from './screens/LeftDrawer/Myfees';
import MyCalender from './screens/LeftDrawer/MyCalender';
import Results from './screens/LeftDrawer/Results';
import Admission from './screens/LeftDrawer/Admission';
import AccountSettings from './screens/LeftDrawer/AccountSettings';
import Help from './screens/LeftDrawer/Help';
import Campus from './screens/RightDrawer/Campus';
import Books from './screens/RightDrawer/Books';
import Videos from './screens/RightDrawer/Videos';
import Preps from './screens/RightDrawer/Preps';
import Interns from './screens/RightDrawer/Interns';
import Jobs from './screens/RightDrawer/Jobs';
import News from './screens/RightDrawer/News';
import Skills from './screens/RightDrawer/Skills';


import Home from './screens/MyStack/Home';
import Login from './screens/MyStack/Login';
import Register from './screens/MyStack/Register';


const slides = [
  {
    key: 's1',
    text: ' Shri Venkateshwara University is an autonomous body promulgated by the Govt. of Uttar Pradesh Act. No. 26 of 2010,passed by Uttar Pradesh Assembly.The University is further approved by the UGC Act 1956,with the riggt to confer degree u/s 22(1) of the UGC Act. ',
    title: 'Shri Venkateshwara University',
    image: require('./screens/images/svu.png'),
    backgroundColor: 'white',
  },
  {
    key: 's2',
    title: 'Admission Proceed',
    text: ' The application can be sent to DDE directly or through its Head Office at Directorate of Distance Education,Shri Venkateshwara University,NH-24,Rajabpur,Gajraula,Dist-Amroha-244236 (UP) or through online web portal i.e. www.svu.edu.in for the centralized registration of ODL.',
    image: require('./screens/images/cap.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 's3',
    title: 'Vision & Mission',
    text: '  To be a global center of academic excellence eith the state-of-art facilities and the best educational resources for imparting innovative knowledge and learning environment and resources:',
    image: require('./screens/images/vision.jpeg'),
    backgroundColor: ' #74B9FF',
  },

];
const DEVICE_WIDTH = Dimensions.get('window').width;
export default class App extends Component {

  componentDidMount() {

    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
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
        <Text style={{ fontWeight: 'bold', fontSize: 30, paddingTop: 20 }}>Welcome</Text>
        <Text style={{ fontSize: 20, marginLeft: 5 }}>{item.text}</Text>

      </View>
    );
  };
  render() {
    if (this.state.showRealApp) {
      return <SafeAreaView style={{ flex: 1 }}>
        <MyApp />
      </SafeAreaView>
    } else {
      return <View style={{ flex: 1, backgroundColor: '#ccc' }}>
          <ImageBackground source={require('./screens/images/bgr.png')} style={{ flex: 1, width: '100%', height: '50%', resizeMode: 'contain' }} >

            <AppIntroSlider
              slides={slides}
              renderItem={this._renderItem}
              onDone={this._onDone}
              showSkipButton={true}
              onSkip={this._onSkip}
              bottomButton />
          </ImageBackground>

        </View>
      
    }
  }
}

// Custom Right Drawer ........


const CustomContentDrawerComponent1 = (props) => (


  <ScrollView style={{ flex: 1, }}>
    <View style={{ width: DEVICE_WIDTH, height: 50, backgroundColor: 'skyblue', padding: 10 }}>
      <Text style={{ color: 'white', fontSize: 20 }}>SVU Apps</Text>
    </View>
    <View style={{ width: '100%', }}>
      <DrawerItems {...props} />

    </View>
    <View style={{ width: '100%', height: 0.5, borderColor: 'blue', borderWidth: 0.5 }}></View>
    <Text style={{ padding: 10, color: 'grey', fontSize: 15 }}>For any help or assistance ,please contact support@svu.com</Text>
  </ScrollView>


)


const RightDrawer = createDrawerNavigator({
  Screen1: {
    screen: Home,
    navigationOptions: {
      drawerLabel: 'Home',

      drawerIcon: (
        <Image source={require('./screens/images/house.png')} style={{ width: 40, height: 40, }} />

      )

    },
  },
  Screen2: {
    screen: Campus,
    navigationOptions: {
      drawerLabel: 'Campus',

      drawerIcon: (
        <Image source={require('./screens/images/school.png')} style={{ width: 40, height: 40, overlayColor: 'white' }} />
      )
    },
  },
  Screen3: {
    screen: Books,
    navigationOptions: {
      drawerLabel: 'Books',

      drawerIcon: (
        <Image source={require('./screens/images/book.png')} style={{ width: 40, height: 40, overlayColor: 'white' }} />
      )
    },
  },
  Screen4: {
    screen: Videos,
    navigationOptions: {
      drawerLabel: 'Videos',

      drawerIcon: (
        <Image source={require('./screens/images/video.png')} style={{ width: 40, height: 40, overlayColor: 'white' }} />
      )
    },
  },
  Screen5: {
    screen: Skills,
    navigationOptions: {
      drawerLabel: 'Skills',

      drawerIcon: (
        <Image source={require('./screens/images/skills.png')} style={{ width: 40, height: 40, overlayColor: 'white' }} />
      )
    },
  },
  Screen6: {
    screen: Preps,
    navigationOptions: {
      drawerLabel: 'Preps',

      drawerIcon: (
        <Image source={require('./screens/images/contract.png')} style={{ width: 40, height: 40, overlayColor: 'white' }} />
      )
    },
  },
  Screen7: {
    screen: Interns,
    navigationOptions: {
      drawerLabel: 'Interns',

      drawerIcon: (
        <Image source={require('./screens/images/man.png')} style={{ width: 40, height: 40, overlayColor: 'white' }} />
      )
    },
  },
  Screen8: {
    screen: Jobs,
    navigationOptions: {
      drawerLabel: 'Jobs',

      drawerIcon: (
        <Image source={require('./screens/images/briefcase.png')} style={{ width: 40, height: 40, }} />
      )
    },
  },
  Screen9: {
    screen: News,
    navigationOptions: {
      drawerLabel: 'News',

      drawerIcon: (
        <Image source={require('./screens/images/newspaper.png')} style={{ width: 50, height: 50, }} />
      )
    },
  },

}, {

  drawerPosition: 'right',
  contentComponent: CustomContentDrawerComponent1,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  drawerWidth: DEVICE_WIDTH - 120,
  contentOptions: {
    //activeTintColor: '#e91e63',
    activeBackgroundColor: 'white',
    itemsContainerStyle: {
      marginVertical: 0,
      //paddingVertical:20
    },
    iconContainerStyle: {
      opacity: 1
    }
  }
})





const TabBottom = createBottomTabNavigator({

  Home: {

    screen: RightDrawer,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./screens/images/home.png')}
          style={{ tintColor, width: 30, height: 30 }} />
      )
    }
  },
  PayFees: {
    screen: PayFees,
    navigationOptions: {
      tabBarLabel: 'PayFees',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./screens/images/payfees.png')}
          style={{ tintColor, width: 30, height: 30 }} />
      )
    }
  },
  ProfilePage: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./screens/images/user.png')}
          style={{ tintColor, width: 30, height: 30 }} />
      )
    }
  },
  MessageScreen: {
    screen: Messages,
    navigationOptions: {
      tabBarLabel: 'messages',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./screens/images/chat.png')}
          style={{ tintColor, width: 20, height: 20 }} />
      )
    }
  },
},

  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#74B9FF',
      inactiveTintColor: 'gray',
      barStyle: {
        backgroundColor: '#fff',

      },
      labelStyle: {
        fontSize: 13,
        margin: 0,
        padding: 0,
      },
      style: {
        padding: 5
      }
    },

  })

//Left Custom drawer
const CustomContentDrawerComponent = (props) => (

  <ScrollView style={{ flex: 1, }}>

    <LinearGradient
      start={{ x: 0.0, y: 0 }} end={{ x: 0.2, y: 2.0 }}
      locations={[0, 0.4,]}
      colors={['#fff', '#192A56',]} style={styles.linearGradient}>

      <View style={{ borderRadius: 100, borderWidth: 1, borderColor: 'transparent', width: 80, height: 80, marginHorizontal: 10 }}>
        <TouchableOpacity style={{ width: 60, height: 60, }} onPress={() => alert("Profile Image")}>
          <Image source={require('./screens/images/profiles.png')} style={{ width: 70, height: 70, borderRadius: 100 }} />
        </TouchableOpacity>
      </View>
      <View style={{ padding: 20 }}>
        <Text style={{ color: 'white', fontSize: 20 }}>We</Text>
        <Text style={{ color: 'white', fontSize: 20 }}>Login</Text>

      </View>
    </LinearGradient>


    <View style={{ width: '100%', height: 0.5, borderColor: 'blue', borderWidth: 0.5 }}></View>

    <View style={{ width: '100%', marginVertical: 30 }}>
      <DrawerItems {...props} />

    </View>

  </ScrollView>


)

const MyStack1 = createStackNavigator({
  Home: TabBottom
},
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        //headerTitle:null,
        headerStyle: {
          backgroundColor: '#74B9FF',


        },
        headerLeft: () => (
          <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingBottom: 10 }}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} >
              <Ionicons name="ios-menu" size={32} color="white" style={{ bottom: 5 }} />

            </TouchableOpacity>
            {/* <Text style={{ marginLeft: 20, fontSize: 20, fontWeight: 'bold', color: 'white' }}>Home</Text> */}
          </View>
        ),
      }
    },
  })
const MyStack2 = createStackNavigator({
  defaultHome: Gallery
},
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          backgroundColor: '#277ccb',
        }, headerLeft: () => (
          <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingBottom: 20 }}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} >
              <Ionicons name="ios-menu" size={32} color="white" style={{ bottom: 5 }} />

            </TouchableOpacity>
            <Text style={{ marginLeft: 20, fontSize: 20, fontWeight: 'bold', color: 'white' }}>Gallery</Text>
          </View>
        ),
      }
    },
  }
)
const MyStack3 = createStackNavigator({
  defaultHome: MyAttendance
},
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          backgroundColor: '#277ccb',
        }, headerLeft: () => (
          <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingBottom: 20 }}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} >
              <Ionicons name="ios-menu" size={32} color="white" style={{ bottom: 5 }} />
            </TouchableOpacity>
            <Text style={{ marginLeft: 20, fontSize: 20, fontWeight: 'bold', color: 'white' }}>My Attendance</Text>
          </View>
        ),
      }
    },
  })
const MyStack4 = createStackNavigator({
  defaultHome: Myfees
},
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          backgroundColor: '#277ccb',
        }, headerLeft: () => (

          <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingBottom: 20 }}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} >
              <Ionicons name="ios-menu" size={32} color="white" style={{ bottom: 5 }} />
            </TouchableOpacity>

            <Text style={{ marginLeft: 20, fontSize: 20, fontWeight: 'bold', color: 'white' }}>My Fees</Text>


          </View>

        ),
      }
    },
  })
const MyStack5 = createStackNavigator({
  defaultHome: MyCalender
},
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          backgroundColor: '#277ccb',
        }, headerLeft: () => (

          <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingBottom: 20 }}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} >
              <Ionicons name="ios-menu" size={32} color="white" style={{ bottom: 5 }} />
            </TouchableOpacity>

            <Text style={{ marginLeft: 20, fontSize: 20, fontWeight: 'bold', color: 'white' }}>Calender</Text>


          </View>

        ),
      }
    },
  })
const MyStack6 = createStackNavigator({
  defaultHome: Messages
},
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          backgroundColor: '#277ccb',
        }, headerLeft: () => (

          <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingBottom: 20 }}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} >
              <Ionicons name="ios-menu" size={32} color="white" style={{ bottom: 5 }} />
            </TouchableOpacity>

            <Text style={{ marginLeft: 20, fontSize: 20, fontWeight: 'bold', color: 'white' }}>Messages</Text>


          </View>

        ),
      }
    },
  })
const MyStack7 = createStackNavigator({
  defaultHome: Results
},
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          backgroundColor: '#277ccb',
        }, headerLeft: () => (

          <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingBottom: 20 }}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} >
              <Ionicons name="ios-menu" size={32} color="white" style={{ bottom: 5 }} />
            </TouchableOpacity>

            <Text style={{ marginLeft: 20, fontSize: 20, fontWeight: 'bold', color: 'white' }}>Results</Text>


          </View>

        ),
      }
    },
  })
const MyStack8 = createStackNavigator({
  defaultHome: Admission
},
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          backgroundColor: '#277ccb',
        }, headerLeft: () => (

          <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingBottom: 20 }}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} >
              <Ionicons name="ios-menu" size={32} color="white" style={{ bottom: 5 }} />
            </TouchableOpacity>

            <Text style={{ marginLeft: 20, fontSize: 20, fontWeight: 'bold', color: 'white' }}>Admission</Text>


          </View>

        ),
      }
    },
  })
const MyStack9 = createStackNavigator({
  defaultHome: AccountSettings
},
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          backgroundColor: '#277ccb',
        }, headerLeft: () => (

          <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingBottom: 20 }}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} >
              <Ionicons name="ios-menu" size={32} color="white" style={{ bottom: 5 }} />
            </TouchableOpacity>

            <Text style={{ marginLeft: 20, fontSize: 20, fontWeight: 'bold', color: 'white' }}> Account Settings</Text>


          </View>

        ),
      }
    },
  })
const MyStack10 = createStackNavigator({
  defaultHome: Help
},
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          backgroundColor: '#277ccb',
        }, headerLeft: () => (

          <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingBottom: 20 }}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} >
              <Ionicons name="ios-menu" size={32} color="white" style={{ bottom: 5 }} />
            </TouchableOpacity>

            <Text style={{ marginLeft: 20, fontSize: 20, fontWeight: 'bold', color: 'white' }}>Help</Text>


          </View>

        ),
      }
    },
  })
const LeftDrawer = createDrawerNavigator({
  Screen1: {
    screen: MyStack1,
    navigationOptions: {
      drawerLabel: 'My Profiles',
      drawerIcon: (
        <Image source={require('./screens/images/profiles.png')} style={{ width: 30, height: 30, }} />
      )
    },
  },
  Screen2: {
    screen: MyStack2,
    navigationOptions: {
      drawerLabel: 'Gallery',

      drawerIcon: (
        <Image source={require('./screens/images/gallery.png')} style={{ width: 30, height: 30, }} />
      )
    },
  },
  Screen3: {
    screen: MyStack3,
    navigationOptions: {
      drawerLabel: 'My Attendance',

      drawerIcon: (
        <Image source={require('./screens/images/attendance.png')} style={{ width: 30, height: 30, overlayColor: 'white' }} />
      )
    },
  },
  Screen4: {
    screen: MyStack4,
    navigationOptions: {
      drawerLabel: 'My Fees',

      drawerIcon: (
        <Image source={require('./screens/images/fees.png')} style={{ width: 30, height: 30, overlayColor: 'white' }} />
      )

    },
  },
  Screen5: {
    screen: MyStack5,
    navigationOptions: {
      drawerLabel: 'My Calender',

      drawerIcon: (
        <Image source={require('./screens/images/calendar.png')} style={{ width: 30, height: 30, overlayColor: 'white' }} />
      )
    },
  },
  Screen6: {
    screen: MyStack6,
    navigationOptions: {
      drawerLabel: 'Messages',

      drawerIcon: (
        <Image source={require('./screens/images/messages.png')} style={{ width: 30, height: 30, overlayColor: 'white' }} />
      )
    },
  },
  Screen7: {
    screen: MyStack7,
    navigationOptions: {
      drawerLabel: 'Results',

      drawerIcon: (
        <Image source={require('./screens/images/results.png')} style={{ width: 30, height: 30, overlayColor: 'white' }} />
      )
    },
  },
  Screen8: {
    screen: MyStack8,
    navigationOptions: {
      drawerLabel: 'Admission',

      drawerIcon: (
        <Image source={require('./screens/images/admission.png')} style={{ width: 30, height: 30, overlayColor: 'white' }} />
      )
    },
  },
  Screen9: {
    screen: MyStack9,
    navigationOptions: {
      drawerLabel: 'Account Settings',

      drawerIcon: (
        <Image source={require('./screens/images/settings.png')} style={{ width: 30, height: 30, overlayColor: 'white' }} />
      )
    },
  },
  Screen10: {
    screen: MyStack10,
    navigationOptions: {
      drawerLabel: 'Help',

      drawerIcon: (
        <Image source={require('./screens/images/help.png')} style={{ width: 30, height: 30, overlayColor: 'white' }} />
      )
    },
  },

}, {
  initialRouteName: 'Screen1',
  drawerPosition: 'left',
  activeBackgroundColor: 'white', contentComponent: CustomContentDrawerComponent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  drawerWidth: DEVICE_WIDTH - 120,
})


//////////***************************** */


const LoginStack = createSwitchNavigator({
  //Home:HomePage,
  //welcome:Welcome,
  Home: LeftDrawer,
  Login: Login,
  Register: Register,
  //AppIntro:AppIntro
})
const MyApp = createAppContainer(LoginStack);

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    flexDirection: 'row',
    width: DEVICE_WIDTH,
    height: 200,
    padding: 10
  },
  image: {
    width: 200,
    height: 200,
    //marginTop:-50
  },

  title: {
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 36,
    fontWeight: 'bold',
    color: 'white'
  },
});