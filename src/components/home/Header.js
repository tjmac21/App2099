import React, { Component } from 'react';
import {
  Image, 
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  StatusBar,
  PanResponder,
} from 'react-native';
import CreateMessage from './CreateMessage';

export default class Header extends Component {
    render(){
        return (
                <View style={styles.container}>
                    <StatusBar
                        backgroundColor="#C93756"
                        barStyle="light-content"
                    />
                    <CreateMessage/>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: '#C93756',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
});