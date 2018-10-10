import React, { ReactNode } from 'react'
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
  image: ImageSourcePropType
  children: ReactNode
}

const styles = StyleSheet.create({
  overlay: {
    // backgroundColor: colors.primaryBackgroundOverlay,
    width,
    height
  },
  background: {
    width,
    height
  }
})

export default class Background extends React.Component<Props> {
  render() {
    return (
      <ImageBackground
        source={this.props.image}
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
