import React, { Component, ReactNode } from 'react'
import { StyleSheet, ViewStyle, ScrollView } from 'react-native'
import hexToRgba from 'hex-to-rgba'
import Container from '../Container'

type Props = {
  backgroundColor: string
  alpha: number
  style?: ViewStyle | ViewStyle[]
  children: ReactNode
}

type State = {}

const styles = StyleSheet.create({})

class Content extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {}
  }

  static defaultProps = {
    backgroundColor: '#FFFFFF',
    alpha: 0.85
  }

  render() {
    return (
      <ScrollView style={this.props.style}>
        <Container
          style={[
            {
              backgroundColor: hexToRgba(
                this.props.backgroundColor,
                this.props.alpha
              ),
              marginTop: 0
            }
          ]}
        >
          {this.props.children}
        </Container>
      </ScrollView>
    )
  }
}

export default Content
