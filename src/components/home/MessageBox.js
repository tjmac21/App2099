import React, { Component } from 'react';
import {
  Animated,
  Modal,
  Text,
  Image, 
  StyleSheet,
  View,
  TouchableHighlight,
} from 'react-native';

export default class MessageBox extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
        <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.modalVisible}
        onRequestClose={() => {alert("Modal has been closed.")}}
        >
       <View style={{marginTop: 22}}>
        <View>
          <Text>Hello World!</Text>

          <TouchableHighlight onPress={() => {
            this.props.setModalVisible(!this.props.modalVisible)
          }}>
            <Text>Hide Modal</Text>
          </TouchableHighlight>

        </View>
       </View>
      </Modal>
    );
  }
}
