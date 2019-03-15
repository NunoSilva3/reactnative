import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import Week from './Week'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
export default class ModalTester extends Component {
  state = {
    isModalVisible: false,
  };
 
  _toggleModal = () =>{
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }
  render() {
    return (
      <View style={{ flex: 1}}>
        <TouchableOpacity onPress={this._toggleModal}>
        <MaterialCommunityIcons size={80} name='calendar-week' color={'black'} />
        </TouchableOpacity>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 0.8, backgroundColor: '#70e1f5', borderRadius: 10}}>
            <Week getCurrentLocation={this.props.getCurrentLocation}
              getLocationFromList={this.props.getLocationFromList} 
              getWeekForeCas={this.props.getWeekForeCast} 
              {...this.props}
            _toggleModal={this._toggleModal}/>
            <View style={{justifyContent:'space-around'}}>
            <TouchableOpacity onPress={this._toggleModal}>
            <Ionicons size={50} name='md-arrow-back' color={'black'} />
            </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}