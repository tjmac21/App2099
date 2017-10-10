import MapView from 'react-native-maps';
import React, { Component } from 'react';
import {
  AsyncStorage,
  Image, 
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Header from './Header';
import MessageBox from './MessageBox';
import { mapStyle } from '../../lib/helpers';

class MapContainer extends Component {
  static navigationOptions = {
      header:  null,
  }
  constructor(){
    super();
    watchID: (null: ?number);
    this.state = {
      modalVisible: false,
      initialPosition: 'unknown',
      lastPosition: 'unknown',
      latitude: -130,
      longitude: 24,
    };
    this.setModalVisible = this.setModalVisible.bind(this);
  }
  componentWillMount(){
    AsyncStorage.getItem('coords')
    .then( 
      (coords) => { 
        this.setState({latitude: JSON.parse(coords.latitude), longitude: JSON.parse(coords.longitude)})
      }).catch(
        (error) => {
            console.log("ERROR BIATCH: " + error);
        }
      );
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = JSON.stringify(position);
        this.setState({
          initialPosition: initialPosition, 
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
        AsyncStorage.setItem('coords', JSON.stringify(position.coords));
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true}
    );/*
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lastPosition = JSON.stringify(position);
      this.setState({ lastPosition });
      this.setState({latitude: position.coords.latitude});
      this.setState({longitude: position.coords.latitude});
    });*/
  }
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
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
                customMapStyle={mapStyle}
                region={{
                  latitude: this.state.latitude,
                  longitude: this.state.longitude,
                  latitudeDelta: 0.049757,
                  longitudeDelta: 0.004666,
                }}
                zoomEnabled={true}
                showsUserLocation={true}
                followsUserLocation={true}
                showsPointOfInterest={false}
              >
                <MapView.Circle 
                  center= {{
                    latitude: this.state.latitude,
                    longitude: this.state.longitude,
                  }}
                  radius={1750} 
                  strokeWidth={1} 
                  strokeColor='rgba(143, 29, 33, 0.6)'
                  fillColor='rgba(143, 29, 33, 0.1)'
                />
              </MapView>
              {/*<View style={styles.overlay}>
                <View style={styles.circle}/>
              </View>*/}
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
      //backgroundColor: '#8F1D21',
    },
    map: {
      position: 'absolute',
      top: 40,
      left: 0,
      right: 0,
      bottom: 0,
    },
    overlay: {
      backgroundColor: 'rgba(143, 29, 33, 0.6)',
      position: 'absolute',
      top: 40,
      right: 0,
      bottom: 0,
      left: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    circle: {
      backgroundColor: 'black',
      borderRadius: 200,
      alignSelf: 'stretch',
      flex: 1,
      margin: 50,
    }
  });

export default MapContainer;