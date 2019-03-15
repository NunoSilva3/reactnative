import React from 'react';
import { View , Text} from 'react-native';
import MainWeatherComp from '../MainWeatherComp/Main'
import WorldModal from '../LocationComp/WorldModal';
import CurrentLocation from '../LocationComp/CurrentLocation';
import Week from './Week';
import WeekModal from './WeekModal'


export default class Main extends React.Component{


render(){
  //  console.log('PPPPPRRRRRROOOOOOOOSSSSSSSS', this.props)
return (
<View style={{flex:1}}>
    <View style={{height: '70%', paddingTop: 50}}>
              <MainWeatherComp             
                {...this.props}
              />
        </View >
            <View style={{height:'30%',flexDirection:"row", justifyContent:'space-around',width:'90%', marginLeft: '5%',marginBottom: '3%', alignItems: 'flex-end'}}>
              <WorldModal getLocationFromList={this.props.getLocationFromList}/>              
              <WeekModal
              getCurrentLocation={this.props.getCurrentLocation}
              getLocationFromList={this.props.getLocationFromList} 
              getWeekForeCas={this.props.getWeekForeCast} 
              {...this.props}/> 
              <CurrentLocation getCurrentLocation={this.props.getCurrentLocation}/>
        </View>

         {/* <View style={{
        flexDirection:"row",
        height: '10%', 
        justifyContent:'space-around',
        alignItems: 'center' }}>

            
        </View> */}
</View>
)

}


}