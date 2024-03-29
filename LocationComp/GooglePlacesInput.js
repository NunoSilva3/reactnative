import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';





const GooglePlacesInput = (props) => {

    // console.log('GGGGOOOOOOGGGGGGLLLLLLLEEEEEE', props)

    return (

        <GooglePlacesAutocomplete
            placeholder='Search'
            minLength={2} // minimum length of text to search
            autoFocus={false}
            returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
            listViewDisplayed='auto'    // true/false/undefined
            fetchDetails={true}
            renderDescription={row => row.description} // custom description render
            onPress={(data, details = null) => { 
                props.getLocationFromList(details.geometry.location.lat,details.geometry.location.lng)
                props._toggleModal()
                // console.log('============DETAILS=============>', details.geometry.location);
            }}

            getDefaultValue={() => ''}

            query={{
                // available options: https://developers.google.com/places/web-service/autocomplete
                key: 'AIzaSyDAVGxGxY8UmXT9PfOtiDSroJh336Q8Avs',
                language: 'en', // language of the results
                types: '(cities)' // default: 'geocode'
            }}
            enablePoweredByContainer={false}
            styles={{
                textInputContainer: {
                    width: '100%',
                    justifyContent:'space-around',
                    borderRadius: 10,
                    backgroundColor: 'transparent'
                },             
                description: {
                    fontWeight: 'bold',
                }
            }}

            currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
            currentLocationLabel="Current location"
            nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
            GoogleReverseGeocodingQuery={{
                // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
            }}
            GooglePlacesSearchQuery={{
                // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                rankby: 'distance',
                types: 'food'
            }}

            filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities

            debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
        />
        
    );

}

export default GooglePlacesInput;