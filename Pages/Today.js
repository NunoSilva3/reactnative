import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
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

export default class Today extends React.Component {

    
   componentDidMount() {
       this.props.getHoursForeCast()
   }
   render() {
       return (
<ImageBackground  
          source={{uri: 'https://res.cloudinary.com/dvxqcu3ig/image/upload/v1551904138/Shore_1.png'}} 
          style={{width: '100%',height: '100%'}}
          > 


            <View style={{ flex: 1, marginTop: '30%', marginBottom: 0, }}>
                <Text style={{ fontSize: 20, textAlign: 'center' }}> Today </Text>


                {this.props.todayByHour.map((ele, i) => {

                    let today = new Date(ele.dt * 1000);
                    if (i < 9) {
                        return <View style={styles.linecomponent} key={i}>

                            <View style={styles.each}>
                                <Text style={{ fontSize: 20 }}>
                                    {today.getHours() + 'h'}
                                </Text>
                            </View>


                            <View style={styles.each}>
                                <Text>
                                    {Math.round(ele.main.temp) + ' °C'}
                                </Text>
                            </View>
                            <MaterialCommunityIcons size={30} name={icons[ele.weather[0].icon]} color={'black'} />
                        </View>

                    }
                })
               }
           </View>
</ImageBackground>
       )
   }
}

//View on the week is the whole thing > -
// flexDirection: row
// height and weight, alignItems: center


//daily
// width: 33.3%
// alignItems: center
//justifycontet: spacearound


var styles = StyleSheet.create({

    linecomponent: {

        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        height: '7%',
        marginTop: '4%',


        // // width: '100%'
    },

    each: {

        alignItems: 'center',

        width: '33.3%',

        justifyContent: 'space-around',

    }
})