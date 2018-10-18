import React, { ReactNode } from 'react'
import { View, ViewStyle, StyleSheet } from 'react-native'

type Props = {
  children?: ReactNode
  style?: ViewStyle
  size?: number
  offset?: number
}

const styles = StyleSheet.create({
  col: {
    paddingHorizontal: 3,
    alignItems: 'center'
  }
})

function calculatePorcentual(v) {
  v = v > 12 ? 12 : v < 1 ? 1 : v
  return ((v * 100) / 12).toFixed(2) + '%'
}

export default class Col extends React.Component<Props> {
  static defaultProps = {}

  render() {
    return (
      <View
        style={[
          styles.col,
          {
            width: this.props.size
              ? calculatePorcentual(this.props.size)
              : '100%',
            marginLeft: this.props.offset
              ? calculatePorcentual(this.props.offset)
              : 0
          },
          this.props.style
        ]}
      >
        {this.props.children}
      </View>
    )
  }
}
