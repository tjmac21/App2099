import React, { Component } from 'react';
import {
  Animated,
  Image, 
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

export default class CreateMessage extends Component {
  constructor(props) {
      super(props);
      this.state = {
        bounceValue: new Animated.Value(0),
      };
  }
  handleClick(setModalVis){
    setModalVis(true);
    this.state.bounceValue.setValue(1);     // Start large
    this.doBounce();
    //alert('Make card that slides up for a message');
  }
  render() {
    return (
        <TouchableOpacity onPress={() => this.handleClick(this.props.setModalVisible)}>          
            <Animated.Image 
                source={require('../../img/pencil_icon.png')} 
                resizeMode='contain'
                style={
                  {margin: 15, height: 15, width: 15, padding: 15, flex: 1,
                  transform: [                        // `transform` is an ordered array
                    {scale: this.state.bounceValue},  // Map `bounceValue` to `scale`
                  ],}
                }
            />
        </TouchableOpacity>
    );
  }
  componentDidMount() {
    this.state.bounceValue.setValue(1.5);     // Start large
    this.doBounce();
  }
  componentWillUpdate(newProps,newState){
    if(newProps){
      this.state.bounceValue.setValue(1.5);
      this.doBounce();
    }
  }
  doBounce(){
    Animated.spring(                          // Base: spring, decay, timing
      this.state.bounceValue,                 // Animate `bounceValue`
      {
        toValue: 0.9,                         // Animate to smaller size
        friction: 0.4,                          // Bouncier spring
      }
    ).start();                                // Start the animation
  }
}
