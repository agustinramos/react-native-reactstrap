import React, { Component, ReactNode } from 'react'
import { ActivityIndicator, View, ViewStyle, StyleSheet } from 'react-native'

type Size = number | 'small' | 'large' | undefined

type Props = {
  style?: ViewStyle
  color?: string
  size?: Size
  show: boolean
  children: ReactNode
  _renderLoader?: Function
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  activityIndicator: {
    marginTop: -100,
    alignItems: 'center'
  }
})

class Loader extends Component<Props> {
  static defaultProps = {
    color: '#FFFFFF',
    size: 'large'
  }

  render() {
    if (this.props.show) {
      return (
        <View style={styles.container}>
          {this.props._renderLoader && this.props._renderLoader()}
          {!this.props._renderLoader && (
            <ActivityIndicator
              animating={this.props.show}
              color={this.props.color}
              size={this.props.size}
              style={styles.activityIndicator}
            />
          )}
        </View>
      )
    } else {
      return this.props.children
    }
  }
}

export default Loader
