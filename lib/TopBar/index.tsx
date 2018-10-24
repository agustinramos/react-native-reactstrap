import React, { Component } from 'react'
import { StyleSheet, ImageSourcePropType } from 'react-native'
import Row from '../Row'
import Col from '../Col'
import Icon from '../Icon'

type Props = {
  logo: ImageSourcePropType
}

type State = {}

const styles = StyleSheet.create({})

class TopBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {}
  }

  static defaultProps = {}

  render() {
    return (
      <Row
        style={{
          alignItems: 'center',
          paddingTop: 7
        }}
      >
        <Col
          size={3}
          style={{
            alignItems: 'flex-start',
            paddingLeft: 7
          }}
        >
          {/* <Icon
                  name="bars"
                  type="font-awesome"
                  color="white"
                /> */}
        </Col>
        <Col size={6}>
          <Icon source={this.props.logo} style={{ height: 55 }} />
        </Col>
        <Col size={3} />
      </Row>
    )
  }
}

export default TopBar
