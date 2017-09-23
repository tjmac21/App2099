import MapView from 'react-native-maps';
import React, { Component } from 'react';
import {
  Image, 
  StyleSheet,
  View,
  Text,
} from 'react-native';

class MapTest extends Component {
    render() {
        return (
            <View style ={styles.container}>
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
              
              <Text>FUUUCK</Text>
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
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 200,
    },
  });

export default MapTest;