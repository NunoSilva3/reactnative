import Sidebar from 'react-native-sidebar';
import { View , Text , StyleSheet, Platform , ImageBackground} from 'react-native'
import React from 'react'
import Main from './Pages/Main'
import Today from './Pages/Today'
import Tomorrow from './Pages/Tomorrow'


export default class App extends React.Component{



state = {

  name:'',
  icon:'',
  temp: 0,
  temp_min: 0,
  temp_max: 0,
  background: 'https://res.cloudinary.com/dvxqcu3ig/image/upload/v1551904138/Shore_1.png', 
  isReady: false,
  page: 'main',
  todayByHour: [],
  week: []
  
  }

  
  componentDidMount(){
    
    this.getCurrentLocation()
  }

getLocationFromList = (latitude,longitude) =>{


  const url ='http://api.openweathermap.org/data/2.5/weather?lat=' +
      latitude +
      '&lon=' +
      longitude +
      '&units=metric&APPID=16909a97489bed275d13dbdea4e01f59'

      fetch(url)
      .then((response)=> {
        return response.json()
        .then( (resjson) =>{
          this.setState({
            name: resjson.name,
            icon: resjson.weather[0].icon,
            temp: Math.round(resjson.main.temp, 2),
            temp_min: Math.round(resjson.main.temp_min,2),
            temp_max: Math.round(resjson.main.temp_max, 2),
            latitude: latitude,
            longitude: longitude
        }, ()=>{
          this.getHoursForeCast()
          this.getWeekForeCast()
        })
        // console.log('++++++++++++++++++++++++++',resjson)
        })
      }).catch((error)=>{
        console.log(error)
      })
    }

getCurrentLocation = () =>{
  this.setState({
    isReady: false
  })
  navigator.geolocation.getCurrentPosition(
    position => {
      const {latitude,longitude} = position.coords 
      // console.log('+++++++++Position++++++++++',latitude, longitude)
      const url ='http://api.openweathermap.org/data/2.5/weather?lat=' +
      latitude +
      '&lon=' +
      longitude +
      '&units=metric&APPID=16909a97489bed275d13dbdea4e01f59'

      fetch(url)
      .then((response)=> {
        return response.json()
        .then( (resjson) =>{
          this.setState({
            name: resjson.name,
            icon: resjson.weather[0].icon,
            temp: Math.round(resjson.main.temp, 2),
            temp_min: Math.round(resjson.main.temp_min,2),
            temp_max: Math.round(resjson.main.temp_max, 2),
            latitude: latitude,
            longitude: longitude
        }, ()=>{
        this.getHoursForeCast()
        this.getWeekForeCast()
        this.setState({
          isReady: true
        })
        })
        // console.log('++++++++++++++++++++++++++',resjson)
        })
      }).catch((error)=>{
        console.log(error)
      })
    })
}

getHoursForeCast = () => {
  let { latitude, longitude } = this.state;
  let url = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&APPID=16909a97489bed275d13dbdea4e01f59`
  fetch(url)
    .then((res) => res.json().then((resjson) => {
      this.setState({ todayByHour: resjson.list })
      console.log('RRRRRRRRRRRRREEEEEEEEEEEEEESSSSSSSSSSSSSSSSS', resjson.list)
    })).catch((error) => {

    })
}
getWeekForeCast = () => {
  let { latitude, longitude } = this.state;
  const url = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&units=metric&cnt=8&APPID=16909a97489bed275d13dbdea4e01f59`
  fetch(url)
    .then((response) => {
      return response.json()
        .then((resjson) => {
          debugger
          this.setState({
            week: resjson.list
          })

        })
    }).catch((error) => {
      console.log(error)
    })
}

    render() {
      let page ;
      if(this.state.page == 'main'){page = <Main
        getCurrentLocation={this.getCurrentLocation}
        getLocationFromList={this.getLocationFromList}  
        getWeekForeCast={this.getWeekForeCast}
        {...this.state}
        />}
      if(this.state.isReady === true){
        return (
        <Sidebar
          rightSidebar={<Tomorrow
            getHoursForeCast={this.getHoursForeCast}
            getCurrentLocation={this.getCurrentLocation}
            getLocationFromList={this.getLocationFromList}  
            {...this.state}
            style={{ flex:1}}/>}
          leftSidebar={ <Today
          getHoursForeCast={this.getHoursForeCast}
          todayByHour={this.state.todayByHour}/>}
          style={{ flex:1}}>
          <ImageBackground  
          source={{uri: this.state.background}} 
          style={{width: '100%',height: '100%'}}>
             {page}  
            </ImageBackground>
        </Sidebar>
        )}
      else {   
        return <ImageBackground source={
          {uri:'https://i.pinimg.com/originals/9b/4d/3f/9b4d3f25ca2e77f9ecba5d959463756b.gif'} }
        style={{width: '100%',height: '100%'}}>
        </ImageBackground>
      }
      
}
}

