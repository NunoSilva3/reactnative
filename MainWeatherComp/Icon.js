import { View , Text , StyleSheet } from 'react-native'
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const icons = {

    '01d': 'weather-sunny',
    '02d': 'weather-partlycloudy',
    '03d': 'weather-cloudy',
    '04d': 'weather-cloudy',
    '09d': 'weather-rainy',
    '10d': 'weather-rainy',
    '11d': 'weather-lightning',
    '13d': 'weather-snowy',
    '50d': 'weather-fog',
    
    
    }

export default class IconComp extends React.Component{



render(){
return (


    <View style={{justiftyContent:"center", alignItems:"center"}}>
        <MaterialCommunityIcons size={200} name={icons[this.props.icon]} color={'black'} />
    </View>

)

}
}