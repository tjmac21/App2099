import React, { Component } from 'react';
import { View, Animated, TouchableOpacity, Text, StyleSheet } from 'react-native';

class Animations extends Component {
    constructor(props) {
        super(props);
        this.state = {
          bounceValue: new Animated.Value(0),
        };
      }
      render() {
        return (
          <View>
            <Animated.Image                         // Base: Image, Text, View
              source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}
              style={{
                flex: 1,
                transform: [                        // `transform` is an ordered array
                  {scale: this.state.bounceValue},  // Map `bounceValue` to `scale`
                ]
              }}
            />
          </View>
        );
      }
      componentDidMount() {
        this.state.bounceValue.setValue(1.5);     // Start large
        Animated.spring(                          // Base: spring, decay, timing
          this.state.bounceValue,                 // Animate `bounceValue`
          {
            toValue: 0.8,                         // Animate to smaller size
            friction: 0.4,                          // Bouncier spring
          }
        ).start();                                // Start the animation
      }
    }

export default Animations;
