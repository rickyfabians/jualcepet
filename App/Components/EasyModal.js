import React, { Component } from 'react'
import { View, Dimensions, Animated, Modal, TouchableWithoutFeedback } from 'react-native'

const { height } = Dimensions.get('screen')
export default class EasyModal extends Component {
  constructor (props) {
    super(props)
    this.modalanimation = new Animated.Value(0)
    this.state = {
      modal: false,
      close: props.close || true
    }
  }

  setModal (params) {
    const { modal } = this.state
    const { noclose } = this.props
    if (noclose && params !== true) {
      return null
    } else {
      if (!modal) {
        this.setState({ modal: params !== undefined ? params : !modal }, () => {
          Animated.timing(
            this.modalanimation,
            {
              toValue: 1,
              duration: 200
            }).start()
        })
      } else {
        Animated.timing(
          this.modalanimation,
          {
            toValue: 0,
            duration: 100
          }).start(() => {
          this.modalanimation = new Animated.Value(0)
          this.setState({ modal: params !== undefined ? params : !modal })
        })
      }
    }
  }

  render () {
    const { modal } = this.state
    const { size } = this.props
    let heightModal = size ? height * (size / 100) : height * (90 / 100)
    let animation = this.modalanimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -heightModal]
    })
    return (
      <Modal
        animationType='fade'
        transparent
        visible={modal}
        onRequestClose={() => {
          this.setModal(false)
        }}>
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <View style={{ height: height - heightModal }}>
            <TouchableWithoutFeedback onPress={() => this.setModal(false)}>
              <View style={{ height: height - heightModal }} />
            </TouchableWithoutFeedback>
          </View>
          <Animated.View style={{ transform: [{ translateY: animation }], flex: 1, bottom: -heightModal, backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
            {this.props.children}
          </Animated.View>
        </View>
      </Modal>
    )
  }
}
