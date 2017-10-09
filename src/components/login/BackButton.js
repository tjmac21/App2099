import React, { Component } from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

class BackButton extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={ () => {this.props.updateScreen(this.props.screenToPop)} } >
                    <Image 
                        source={require('../../img/ChevronLeft.png')} 
                        resizeMode='contain'
                        style={{height:25, width:25}}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default BackButton;