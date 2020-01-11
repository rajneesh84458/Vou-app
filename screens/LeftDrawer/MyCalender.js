import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, Image, TouchableOpacity, TextInput
} from 'react-native';
import Dialog from 'react-native-popup-dialog';
import CalendarPicker from 'react-native-calendar-picker';
import TimePicker from 'react-native-simple-time-picker';
export default class MyCalender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      visible: false,
      timeVisible: false,
      selectedHours: 0,
      selectedMinutes: 0,
    };
  }

  onDateChange = (date) => {
    this.setState({
      selectedStartDate: date,
    });
  }
  render() {
    const { selectedStartDate } = this.state;
    const { selectedHours, selectedMinutes } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View style={styles.container}>
        <CalendarPicker
          onDateChange={this.onDateChange}
          selectedDayColor="#74B9FF"
        />

        <View>
          <Text>SELECTED DATE:{startDate}</Text>
        </View>
        <TouchableOpacity onPress={() => this.setState({ visible: true })}
          style={{ width: 60, height: 60 }}>
          <Image source={require('../images/svu.png')}
            style={{ resizeMode: 'cover', width: 60, height: 60, position: 'relative', left: 300, top: 130 }} />
        </TouchableOpacity>
        <Dialog style={{ height: 400 }}
          visible={this.state.visible}
          onTouchOutside={() => {
            this.setState({ visible: false });
          }}
        >

          <View style={{ width: 370, height: 330, }}>
            <View style={{ width: 370, backgroundColor: '#74B9FF', height: 50, padding: 10 }}>

              <Text style={{ fontSize: 20, color: 'white' }}>Create Task for {startDate}</Text>
            </View>


            <TextInput placeholder="Write task here..."
              placeholderTextColor="#777E8B"
              maxLength={200}
              numberOfLines={3}
              value={this.state.greivence}
              onChangeText={(greivence) => this.setState({ greivence })}
              multiline={true}
              style={{ marginHorizontal: 15, fontSize: 18, paddingTop: 15, width: '90%', height: 250, }}
            />
            <View style={{ width: '90%', height: 1, borderWidth: 1, borderColor: '#999', marginHorizontal: 20, marginTop: 10 }}></View>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
            <TouchableOpacity style={styles.buttonStyle}
              onPress={() => this.setState({ timeVisible: true })}>
              <Text style={{ padding: 18, color: 'black' }}>SET TIME</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle}
              onPress={() => alert("create Task...")}>
              <Text style={{ padding: 18 }}>CREATE</Text>
            </TouchableOpacity>

          </View>

        </Dialog>






        {/* /Time Picker */}




        <Dialog style={{ height: 400 }}
          visible={this.state.timeVisible}
          onTouchOutside={() => {
            this.setState({ timeVisible: false });
          }}
        >

          <View style={{ width: 370, height: 330, }}>
            <View style={{ width: 370, backgroundColor: '#74B9FF', height: 50, padding: 10, justifyContent: 'center', alignItems: 'center' }}>

              <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>{selectedHours}hr:{selectedMinutes}min</Text>
            </View>

            <TimePicker
              selectedHours={selectedHours}
              selectedMinutes={selectedMinutes}

              onChange={(hours, minutes) => this.setState({
                selectedHours: hours, selectedMinutes: minutes
              })}
            />


          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
            <TouchableOpacity style={styles.buttonStyle}
              onPress={() => alert("SET Time..")}>
              <Text style={{ padding: 18, color: 'black', fontSize: 20 }}>Ok</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle}
              onPress={() => this.setState({ timeVisible: false })}>
              <Text style={{ padding: 18, fontSize: 20 }}>Cancel</Text>
            </TouchableOpacity>

          </View>

        </Dialog>













      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
  },
  buttonStyle: {
    width: 100,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#74B9FF',
  }
});