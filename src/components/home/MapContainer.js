import MapView from 'react-native-maps';
import React, { Component } from 'react';
import {
  Image, 
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Header from './Header';
import MessageBox from './MessageBox';

class MapContainer extends Component {
  static navigationOptions = {
      header:  null,
  }
  constructor(){
    super();
    this.state = {
      modalVisible: false,
    };
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
    //swim upstream 
  }
    render() {
        return (
            <View style ={styles.container}>
              <View style={{position: 'absolute', top: 0, left: 0, right: 0,}}>
                <Header setModalVisible={this.setModalVisible} />
              </View>
              <MapView
                style={styles.map}
                region={{
                  latitude: 49.246292,
                  longitude: -123.116226,
                  latitudeDelta: 0.199757,
                  longitudeDelta: 0.099866,
                }}
                zoomEnabled={true}
              >
              </MapView>
              <MessageBox modalVisible={this.state.modalVisible} setModalVisible={this.setModalVisible} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      alignSelf: 'flex-end',
      backgroundColor: '#8F1D21',
    },
    map: {
      position: 'absolute',
      top: 40,
      left: 0,
      right: 0,
      bottom: 0,
    },
  });

export default MapContainer;