import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import IonIcons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SearchBar({ cityHandler }) {
    return (
        <View style={{ marginTop: 15, flexDirection: 'row' }}>
            <GooglePlacesAutocomplete
            query={{key:'AIzaSyAhX4sx9hw2fRwuYWfT0r0Zpk4rNDZLC2c'}}
                onPress={(data, details= null)=>{
                    console.log(data.description);
                    const city = data.description.split(',')[0]
                    cityHandler(city);
                }}
                placeholder="Search"
                styles={{
                    textInput: {
                        backgroundColor: '#eee',
                        borderRadius: 20,
                        fontWeight: '700',
                        marginTop: 7
                    },
                    textInputContainer: {
                        backgroundColor: '#eee',
                        borderRadius: 50,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 10
                    },

                }}
                renderLeftButton={() => (
                    <View style={{ marginLeft: 10 }}>
                        <IonIcons name="location-sharp" size={24} />
                    </View>
                )}
                renderRightButton={() => (
                    <View style={{flexDirection:'row', marginRight:8,
                    backgroundColor:'#fff', padding: 9, borderRadius:30,
                    alignItems:"center"}}>
                        <AntDesign name="clockcircle" size={11} style={{marginRight:6}} />
                        <Text>Search</Text>
                        </View>
                )}
            />
        </View>
    )
}
