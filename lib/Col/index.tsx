import React, { ReactNode } from 'react'
import { View, StyleSheet } from 'react-native'

type Props = {
  children: ReactNode
  size?: number
  offset?: number
}

const styles = StyleSheet.create({
  col: {
    paddingHorizontal: 3
  }
})

function calculatePorcentual(v) {
  v = v > 12 ? 12 : v < 1 ? 1 : v
  return ((v * 100) / 12).toFixed(2) + '%'
}

export default class Col extends React.Component<Props> {
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
          }
        ]}
      >
        {this.props.children}
      </View>
    )
  }
}
