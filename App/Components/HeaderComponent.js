import React, { PureComponent } from 'react'
import { TouchableOpacity, Text, View, Dimensions, StatusBar, TouchableWithoutFeedback } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const {width} = Dimensions.get('screen')
export default class HeaderComponent extends PureComponent {

  HeaderMaps() {
    console.log(this.props)
    return (
      <>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <View style={{flexDirection:'row', alignItems:'center', paddingHorizontal: 12, paddingVertical: 18, height: width*0.14}}>
          <TouchableWithoutFeedback onPress={()=> this.props.setModalVisible(false)}>
            <EvilIcons name='close' size={24} solid />  
          </TouchableWithoutFeedback>
          <Text style={{fontSize: 24}}> Pilih Lokasi </Text>
        </View>
      </>
    )
  }

  HeaderHome() {
    return (
      <View>
        <StatusBar backgroundColor='#e74c3c' />
        <View style={{backgroundColor:'#e74c3c', justifyContent:'space-between', flexDirection:'row', padding: 4, paddingTop: 8, height: width*0.14}}>
          <View style={{backgroundColor:'white', borderRadius: width*0.05, width:width*0.1, height: width*0.1}}></View>
          <View style={{backgroundColor:'white', borderRadius: 6, width:width*0.7, padding: 4, flexDirection:'row', alignItems:'center'}}>
            <EvilIcons name={'search'} size={22} solid style={{paddingHorizontal:4}} />
            <Text>Search...</Text>
          </View>
          <View style={{ justifyContent:'center', width:width*0.1, height: width*0.1}}>
            <Feather name={'filter'} size={22} color='white' solid />
          </View>
        </View>
      </View>
    )
  }
  render () {
    const {page} = this.props
    return (
      <>
        {page==='home' ? this.HeaderHome()
          : page==='maps' && this.HeaderMaps()
        }
      </>
    )
  }
}
