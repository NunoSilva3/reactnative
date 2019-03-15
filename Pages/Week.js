import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
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
export default class Week extends React.Component {
    componentDidMount() {
        this.props.getWeekForeCast()
    }

    render() {
        return (


            <View style={{ flex: 1 }}>
                {/* <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text style={{ fontSize: 40, textAlign: 'center', marginBottom: '4%', marginTop: '3%', marginRight: '6%' }} >  {this.props.name}
                    </Text>
                </View> */}

                <View style={{ borderBottomWidth: 1 }}>

                    <Text style={{
                        borderBottomWidth: 1, 
                        borderTopWidth: 1, 
                        fontSize: 23, 
                        marginBottom: '5%',
                        textAlign: 'center'
                    }}> Full Week </Text>
                </View>



                {this.props.week.map((ele, i) => {

                    return (<View style={styles.linecomponent} key={i} >

                        <View style={styles.each}>
                            <Text style={{ fontSize: 20, marginTop: '3%' }}>
                                {new Date(ele.dt * 1000).toDateString().split(' ')[0]}
                            </Text>

                        </View>

                        <View style={styles.each} >
                            <Text>
                                {Math.round(ele.temp.day) + ' °C'}
                            </Text>
                        </View >

                        <View style={styles.each} ><MaterialCommunityIcons size={20} name={icons[ele.weather[0].icon]} color={'black'} /></View>
                    </View>
                    )
                })}

            </View >


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