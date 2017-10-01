import React, { Component } from 'react';
import {
  View,
  Image, 
  StyleSheet,
  ScrollView,
  Text,
  TouchableHighlight,
  StatusBar,
  PanResponder,
  RefreshControl,
} from 'react-native';
import CreateMessage from './CreateMessage';

export default class Header extends Component {
    constructor(props) {
      super(props);
      this.state = {
        refreshing: false,
      };
    }
    fetchData(){
        alert('Refresh');
        this.setState({refreshing: false});
    }
    _onRefresh() {
      this.setState({refreshing: true});
      this.fetchData();
    }
    render(){
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#C93756"
                    barStyle="light-content"
                />
                <ScrollView 
                    contentContainerStyle={styles.container}
                    refreshControl={
                        <RefreshControl
                          refreshing={this.state.refreshing}
                          onRefresh={this._onRefresh.bind(this)}
                        />
                    }
                >
                    <CreateMessage reAnimate={this.state.refreshing} setModalVisible={this.props.setModalVisible}/>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        top: 0, //gotta stay 0
        paddingTop: 5, //change this value to make the value grow
        zIndex: 50,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: '#C93756',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
});