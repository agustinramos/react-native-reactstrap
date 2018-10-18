import React, { Component } from 'react'
import { Text, StyleSheet, ViewStyle } from 'react-native'
import Row from '../Row'
import Col from '../Col'
import Icon, { Props as IconProps } from '../Icon'
import hexToRgba from 'hex-to-rgba'

type Props = {
  backgroundColor: string
  icon?: IconProps
  label: string
  textStyle?: ViewStyle
}

const styles = StyleSheet.create({})

class Title extends Component<Props> {
  constructor(props: Props) {
    super(props)

    this.state = {}
  }

  static defaultProps = {
    label: '',
    backgroundColor: '#FFFFFF'
  }

  render() {
    return (
      <Row
        style={{ backgroundColor: hexToRgba(this.props.backgroundColor, 0.7) }}
      >
        <Col size={8}>
          <Row style={{ alignItems: 'center' }}>
            {this.props.icon && (
              <Col size={3}>
                <Icon {...this.props.icon} />
              </Col>
            )}
            <Col size={this.props.icon ? 9 : 12}>
              <Text
                style={[
                  {
                    fontSize: 17,
                    color: 'white',
                    justifyContent: 'flex-start'
                  },
                  this.props.textStyle
                ]}
              >
                {this.props.label.toUpperCase()}
              </Text>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default Title
