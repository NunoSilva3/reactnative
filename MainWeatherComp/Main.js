import { View , Text , StyleSheet } from 'react-native'
import React from 'react';
import IconComp from './Icon';
import TempComp from './Temp'
import { MaterialIcons } from '@expo/vector-icons';


export default class MainWeatherComp extends React.Component{



render(){

return (

    <View>
        <Text style={styles.text}>{this.props.name}</Text>
        <Text style={{textAlign: 'center', fontSize: 50,}}>
         { this.props.temp} °C
        </Text>
        <IconComp style={{flex:0.4}} icon = {this.props.icon}/>

        <TempComp 
        style={{flex:0.1 }}
          temp_min={this.props.temp_min} 
          temp_max={this.props.temp_max} 
        />

        <View style={{ flexDirection: 'row', justifyContent:"space-between"}}>       
          <View><MaterialIcons size={100} name={'keyboard-arrow-right'} color={'black'} /></View>
          <View><MaterialIcons size={100} name={'keyboard-arrow-left'} color={'black'} /></View>
        </View>
        
          
    </View>


)

}
}

const styles = StyleSheet.create({
    text:{
      textAlign: 'center',
      fontSize: 70,
  },
  });