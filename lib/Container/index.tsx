import React, { ReactNode } from 'react'
import { View, StyleSheet, ViewStyle } from 'react-native'

type Props = {
  children: ReactNode
  style?: ViewStyle | ViewStyle[]
  bottomTab?: boolean
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
  static defaultProps = { bottomTab: false }

  render() {
    return (
      <View
        style={[
          styles.container,
          { marginBottom: this.props.bottomTab ? 200 : 0 },
          this.props.style
        ]}
      >
        {this.props.children}
      </View>
    )
  }
}
