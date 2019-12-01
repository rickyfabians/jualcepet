import React, { Component } from 'react'
import { ScrollView, Image, View, Text, TouchableOpacity, Dimensions, Alert, Modal } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import HomeItem from '../Model/HomeItem'

import Masonry from 'react-native-masonry';
import MasonryList from "react-native-masonry-list";

import { Images } from '../Themes'

import EvilIcons from 'react-native-vector-icons/EvilIcons'

import { HeaderComponent, Maps, EasyModal } from '../Components';

// Styles
import styles from './Styles/LaunchScreenStyles'

const {width} = Dimensions.get('screen')
export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false
    }
  }

  alert(v) {
    Alert.alert(
      'Info',
      `nama : ${v.name}
      harga : ${v.price}`,
      [
        {text: 'OK'},
      ],
    );
  }

  setModalVisible(param){
    this.setState({modalVisible: param})
  }

  render () {
    return (
      <>
      <ScrollView style={{flex:1}}>
        <HeaderComponent page={'home'} />
        <View style={{justifyContent:'space-between', flexDirection:'row', padding: 10, backgroundColor:'#e74c3c'}}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <EvilIcons name='location' size={22} color='white' solid/>
            <Text style={{color:'white', fontSize: 22}}>Jakarta Barat</Text>
          </View>
          <TouchableOpacity onPress={()=> this.setModalVisible(true)} style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={{color:'white', fontSize: 22}}>Edit</Text>
            <EvilIcons name='chevron-right' size={28} color='white' solid/>
          </TouchableOpacity>
        </View>
        <MasonryList
            renderIndividualFooter ={(v)=> {
              return(
                <View style={{alignItems:'center', height: 40, padding:5}}>
                  <Text>{v.name}</Text>
                  <Text>{v.price}</Text>
                </View>
              )
            }}
            onPressImage={(v)=>this.alert(v)}
            images={HomeItem}
        />
      </ScrollView>
      <TouchableOpacity style={{backgroundColor:'#e74c3c', borderRadius:20, height: width*0.12, width:width*0.38, position:'absolute', bottom: 10, alignSelf:'center', justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
        <EvilIcons name={'camera'} color='white' size={24} solid />
        <Text style={{color:'white', marginLeft: 4, fontSize: 18}}>Jual Cepet</Text>
      </TouchableOpacity>
      <Modal
        animationType='slide'
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          this.setModalVisible(false)
        }}>
          <Maps setModalVisible={this.setModalVisible.bind(this)} />
        </Modal>
        <EasyModal ref={ref => {this.modal = ref}} size={80}>
          <View style={{ paddingVertical: 10, paddingHorizontal: 14, flexDirection: 'row', justifyContent: 'space-between' }} >
            <TouchableOpacity onPress={() => this.modal.setModal(false)} >
              <EvilIcons name={'close'} size={24} />
            </TouchableOpacity>
          </View>
      </EasyModal>
      </>
    )
  }
}
