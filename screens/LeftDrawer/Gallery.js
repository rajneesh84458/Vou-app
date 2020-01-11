import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Modal } from 'react-native';
import FastImage from 'react-native-fast-image';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageuri: '',
      ModalVisibleStatus: false,
    };
  }

  ShowModalFunction(visible, imageURL) {
    //handler to handle the click on image of Grid
    //and close button on modal
    this.setState({
      ModalVisibleStatus: visible,
      imageuri: imageURL,
    });
  }

  componentDidMount() {
    var that = this;
    let items = Array.apply(null, Array(120)).map((v, i) => {
      return { id: i, src: 'https://unsplash.it/400/400?image=' + (i + 1) };
    });
    that.setState({
      dataSource: items,
    });
  }

  render() {
    if (this.state.ModalVisibleStatus) {
      return (
        <Modal
          transparent={false}
          animationType={'fade'}
          visible={this.state.ModalVisibleStatus}
          onRequestClose={() => {
            this.ShowModalFunction(!this.state.ModalVisibleStatus, '');
          }}>
          <View style={styles.modelStyle}>
            <FastImage
              style={styles.fullImageStyle}
              source={{ uri: this.state.imageuri }}
              resizeMode={FastImage.resizeMode.contain}
            />
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.closeButtonStyle}
              onPress={() => {
                this.ShowModalFunction(!this.state.ModalVisibleStatus, '');
              }}>
                <FastImage
                  source={{
                    uri:
                      'https://raw.githubusercontent.com/AboutReact/sampleresource/master/close.png',
                  }}
                  style={{ width: 35, height: 35, marginTop: 26 }}
                />
            </TouchableOpacity>
          </View>
        </Modal>
      );
    } else {
      return (
        <View style={styles.container}>

          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) => (
              <View style={{ flex: 1, margin: 1 }}>
                <TouchableOpacity
                  key={item.id}
                  style={{ flex: 1 }}
                  onPress={() => {
                    this.ShowModalFunction(true, item.src);
                  }}>
                  <FastImage
                    style={styles.image}
                    source={{
                      uri: item.src,
                    }}
                  />
                </TouchableOpacity>
              </View>
            )}
            //Setting the number of column
            numColumns={3}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   margin:10
  },
  image: {
    height: 120,
    width: '100%',
  },
  fullImageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '98%',
    resizeMode: 'cover',
  },
  modelStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  closeButtonStyle: {
    width: 25,
    height: 25,
    top: 9,
    right: 9,
    position: 'absolute',
  },
});
