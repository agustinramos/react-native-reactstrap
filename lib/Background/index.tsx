import React, { Component, ReactNode } from 'react'
import {
  ImageBackground,
  View,
  StyleSheet,
  ViewStyle,
  Dimensions,
  ImageSourcePropType
} from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

type Props = {
  style?: ViewStyle
  source: ImageSourcePropType
  children: ReactNode
}

const styles = StyleSheet.create({
  overlay: {
    width,
    height
  },
  background: {
    width,
    height
  }
})

export default class Background extends Component<Props> {
  static defaultProps = {}

  render() {
    return (
      <ImageBackground
        source={this.props.source}
        style={styles.background}
        resizeMode={'cover'}
      >
        <View style={[styles.overlay, this.props.style]}>
          {this.props.children}
        </View>
      </ImageBackground>
    )
  }
}
