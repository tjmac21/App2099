import React, { Component } from 'react';
import {
  Animated,
  Modal,
  TextInput,
  Text,
  Image, 
  StyleSheet,
  View,
  TouchableOpacity,
  Button,
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
      // open another modal (for sending msg and sent msg)
      this.props.setModalVisible(!this.props.modalVisible);
  }

  render() {
    const { dropText } = this.state;
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={this.props.modalVisible}
            onRequestClose={() => {this.props.setModalVisible(!this.props.modalVisible)}}>
            <TouchableOpacity onPress={() => {this.props.setModalVisible(!this.props.modalVisible)}} style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: '#00000080'}}>
            </TouchableOpacity>
            <View style={{position: 'absolute'}}>
                <View style={{padding: 20, flexDirection: 'row',alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                    <View style={{ width: 60,}}>
                        <Button 
                            title="Drop"
                            onPress={this.dropMessage.bind(this)} />
                    </View>
                </View>
                <View style={{padding: 20}}>
                    <View style={{
                            backgroundColor: '#fff',
                            borderRadius: 30,
                            padding: 10,
                            alignItems: 'center',
                        }}>
                        <View style={{alignItems:'flex-start', flexDirection: 'row', justifyContent:'flex-start'}}>
                            <TextInput 
                                style={{width:350,borderColor: 'grey', borderWidth: 1, borderRadius: 20,textAlignVertical: 'top'}}
                                ref= {(input) => { this.dropText = input; }}
                                onChangeText={(dropText) => this.setState({dropText})}
                                value={dropText}
                                multiline={true}
                                numberOfLines = {10}
                                maxLength = {300}
                                placeholder="Drop a message..."
                                clearButtonMode='unless-editing'
                                enablesReturnKeyAutomatically={true}
                                returnKeyType='send'
                                underlineColorAndroid='transparent'
                            />
                        </View>
                    </View>
                </View>
            </View>
      </Modal>
    );
  }
}
