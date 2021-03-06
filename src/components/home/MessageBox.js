import React, { Component } from 'react';
import {
  Animated,
  Modal,
  TextInput,
  Text,
  Image, 
  StyleSheet,
  View,
  TouchableHighlight,
} from 'react-native';
import * as firebase from "firebase";

export default class MessageBox extends Component {
  constructor(props) {
      super(props);
      this.state = {
          dropText: '',
      }
  }

  dropMessage() {
      //figure out json structure of each "drop" object
      // object needs:
      //    unique id
      //    user info( need to know who to attribute to) (can set to anon)
      //    location (long/lat)
      //    radius it will be visible 
      //    message
      //    img?
      //    life span
      //    store to firebase db

      this.props.setModalVisible(!this.props.modalVisible);
  }

  render() {
    const { dropText } = this.state;
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={this.props.modalVisible}>
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#00000080'}}>
            <View style={{
                    width: 300,
                    height: 300,
                    backgroundColor: '#fff', 
                    padding: 20,
                    borderRadius: 30,
                }}>
                <Text>Drop a message!</Text>
                <TextInput 
                    style={{width: 250, height: 200, padding:20, borderColor: 'grey', borderWidth: 1}}
                    ref= {(input) => { this.dropText = input; }}
                    onChangeText={(dropText) => this.setState({dropText})}
                    value={dropText}
                    placeholder=""
                    clearButtonMode='unless-editing'
                    enablesReturnKeyAutomatically={true}
                    returnKeyType='next'
                    underlineColorAndroid='transparent'
                />
                <TouchableHighlight onPress={() => {
                    this.dropMessage.bind(this)
                }}>
                    <Text>Drop</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => {
                    this.props.setModalVisible(!this.props.modalVisible)
                }}>
                    <Text>Cancel</Text>
                </TouchableHighlight>

            </View>
        </View>
      </Modal>
    );
  }
}
