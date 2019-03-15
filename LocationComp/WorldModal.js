import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import GooglePlacesInput from './GooglePlacesInput'
import { Ionicons } from '@expo/vector-icons';
export default class ModalTester extends Component {
  state = {
    isModalVisible: false,
  };
 
  _toggleModal = () =>{
    // console.log('WORLLLLLDDDDD MODAL',this.props)
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }
  render() {
    return (
      <View style={{ flex: 1}}>
        <TouchableOpacity onPress={this._toggleModal}>
        <Ionicons size={80} name='md-globe' color={'black'} />
        </TouchableOpacity>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 0.6, backgroundColor: '#70e1f5', borderRadius: 10}}>
            <GooglePlacesInput getLocationFromList={this.props.getLocationFromList}
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