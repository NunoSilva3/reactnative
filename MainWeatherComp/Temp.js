import { View , Text , StyleSheet } from 'react-native'
import React from 'react';


export default class TempComp extends React.Component{


    render(){
        const style= {
            flexDirection:'row',
            justifyContent:'space-around',
            
        },
        text ={
            fontSize: 25,
        }
        return (
            <View style={style}>
                <View>
                  <Text style={text}>Min</Text> 
                  <Text style={text}>{this.props.temp_min} °C </Text>                    
                </View>
                <View>
                  <Text style={text}>Max</Text>
                  <Text style={text}>{this.props.temp_max} °C </Text>                    
                </View>


            </View>

        )

    }

}