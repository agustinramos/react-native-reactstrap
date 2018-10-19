import React, { ReactNode, Component } from 'react'
import { View, ViewStyle, StyleSheet } from 'react-native'

type Props = {
  children: ReactNode
  style?: ViewStyle | ViewStyle[]
}

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    width: '100%',
    paddingHorizontal: 10,
    marginVertical: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'nowrap'
  }
})

class Row extends Component<Props> {
  static defaultProps = {}

  render() {
    return (
      <View style={[styles.row, this.props.style]}>{this.props.children}</View>
    )
  }
}

export default Row
