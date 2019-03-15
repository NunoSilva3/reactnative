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
    '10n': 'weather-sunny'


}
export default class Tomorrow extends React.Component {
    componentDidMount() {
        this.props.getHoursForeCast()
    }

    render() {
        return (
<ImageBackground  
          source={{uri: 'https://res.cloudinary.com/dvxqcu3ig/image/upload/v1551904138/Shore_1.png'}} 
          style={{width: '100%',height: '100%'}}
          > 

            <View style={{ flex: 1, marginTop: '40%', marginBottom: 0, }}>
                <View >
                    <Text style={{ fontSize: 20, textAlign: 'center' }} > Tomorrow</Text>
                </View>

                {this.props.todayByHour.map((ele, i) => {
                    let today = new Date(ele.dt * 1000);
                    if (i > 8 && i < 17) {
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
                            </View >

                            <View style={styles.each} ><MaterialCommunityIcons size={30} name={icons[ele.weather[0].icon]} color={'black'} /></View>
                        </View>
                    }
                })
                }
            </View>
</ImageBackground>
        )
    }
}

var styles = StyleSheet.create({

    linecomponent: {

        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        height: '6%',
        marginTop: '4%',


        // // width: '100%'
    },

    each: {

        alignItems: 'center',

        width: '33.3%',

        justifyContent: 'space-around',

    }
})