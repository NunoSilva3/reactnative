import { View , Text , StyleSheet ,TouchableOpacity } from 'react-native'
import React from 'react';
import {FontAwesome } from '@expo/vector-icons'


export default class CurrentLocation extends React.Component{



render(){

return (

<TouchableOpacity onPress={()=>this.props.getCurrentLocation()}>
   <FontAwesome size={80} name='location-arrow' color={'black'} />
</TouchableOpacity>

)

}

}