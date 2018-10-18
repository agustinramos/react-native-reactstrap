import React, { ReactNode } from 'react'
import { View, StyleSheet, ViewStyle } from 'react-native'

type Props = {
  children: ReactNode
  style?: ViewStyle
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    paddingHorizontal: 5,
    marginTop: 7
  }
})

export default class Container extends React.Component<Props> {
  static defaultProps = {}

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        {this.props.children}
      </View>
    )
  }
}
