import React, { ReactNode } from 'react'
import { View, StyleSheet } from 'react-native'

type Props = {
  children: ReactNode
  flexDirection?: string
  justifyContent?: string
}

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 7
  }
})

export default class Row extends React.Component<Props> {
  render() {
    return (
      <View
        style={[
          styles.row,
          {
            flexDirection: this.props.flexDirection
              ? this.props.flexDirection
              : styles.row.flexDirection
          },
          {
            justifyContent: this.props.justifyContent
              ? this.props.justifyContent
              : styles.row.justifyContent
          }
        ]}
      >
        {this.props.children}
      </View>
    )
  }
}
