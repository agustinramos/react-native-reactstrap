import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  ViewStyle,
  ImageProps
} from 'react-native'
import { Icon as IconElements, IconProps } from 'react-native-elements'

export type Props = {
  source?: ImageSourcePropType
  name?: string
  type?: string
  size?: number
  color?: string
  style?: ViewStyle
  onPress?: Function
}

const styles = StyleSheet.create({})

export default class Icon extends Component<Props> {
  render() {
    return (
      <View>
        {this.props.source && (
          <Image
            resizeMode="contain"
            source={this.props.source}
            {...this.props as ImageProps}
          />
        )}
        {this.props.name && (
          <IconElements name={this.props.name} {...this.props as IconProps} />
        )}
      </View>
    )
  }
}
