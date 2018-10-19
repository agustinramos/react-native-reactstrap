import React, { Component } from 'react'
import { StyleSheet, ViewStyle, View } from 'react-native'
import Row from '../Row'
import Col from '../Col'

type Props = {
  backgroundColor: string
  rowStyle?: ViewStyle
  containerStyle?: ViewStyle
  dataSource: Array<object>
  renderRow: Function
  oddColor?: string
}

const styles = StyleSheet.create({})

class DataList extends Component<Props> {
  constructor(props: Props) {
    super(props)

    this.state = {}
  }

  static defaultProps = {
    backgroundColor: '#FFFFFF',
    dataSource: [],
    oddColor: 'grey'
  }

  render() {
    return (
      <View style={[{ marginVertical: 7 }, this.props.containerStyle]}>
        {this.props.dataSource.map((value, index) => (
          <Row
            key={index}
            style={[
              {
                backgroundColor:
                  index % 2 ? 'transparent' : this.props.oddColor,
                paddingVertical: 5,
                marginVertical: 0
              },
              this.props.rowStyle as ViewStyle
            ]}
          >
            {this.props.renderRow(value)}
            <Col style={{ paddingVertical: 0 }} />
          </Row>
        ))}
      </View>
    )
  }
}

export default DataList
