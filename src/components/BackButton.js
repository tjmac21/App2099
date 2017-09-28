import React, { Component } from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

class BackButton extends Component {
    constructor(){
        super();
    }
    render(){
        return(
                <TouchableOpacity onPress={ () => {this.props.updateScreen(this.props.screenToPop)} }>
                    <Text>Back Button</Text>
                </TouchableOpacity>
        );
    }
}

export default BackButton;