import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, TextInput} from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import HeaderComponent from './HeaderComponent'
import { ScrollView } from 'react-native-gesture-handler';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const {width} = Dimensions.get('screen')
export default class Maps extends Component {
    constructor(props){
        super(props)
        this.state={
            search:''
        }
    }
    render() {
        const {search} = this.state
        return (
            <View style={{flex:1}}>
                <HeaderComponent page='maps' setModalVisible={this.props.setModalVisible} />
                <TextInput
                    underlineColorAndroid='transparent'
                    value={search}
                    autoCapitalize='characters'
                    onChangeText={(search) => this.setState({ search })}
                    placeholder='Alamat'
                    placeholderTextColor='#b2bec3'
                    style={{ backgroundColor:'#ecf0f1', height: 50, marginHorizontal: 38, borderRadius: 10, paddingHorizontal:4, marginTop: 20 }} />
                <View style={{width: width*0.8, height: width, alignSelf:'center', marginTop: 20, borderRadius:8, overflow:'hidden'}}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
                    region={{
                        latitude: -6.1906502,
                        longitude: 106.7437259,
                        latitudeDelta: 0.05,
                        longitudeDelta: 0.05
                    }}
                >
                </MapView>
                </View>
                <TouchableOpacity style={{backgroundColor:'#e74c3c', borderRadius:20, height: width*0.14, width:width*0.8, alignSelf:'center', justifyContent:'center', alignItems:'center', marginTop:30}}>
                    <Text style={{color:'white', marginLeft: 4, fontSize: 18}}>Set Lokasi</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const generatedMapStyle = [
    {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#041826"
          }
        ]
      }
]

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });
