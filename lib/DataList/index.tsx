import React, { Component } from 'react'
import {
  StyleSheet,
  ViewStyle,
  View,
  ScrollView,
  RefreshControl
} from 'react-native'
import Row from '../Row'
import Col from '../Col'

type Props = {
  backgroundColor: string
  rowStyle?: ViewStyle
  containerStyle?: ViewStyle
  dataSource: Array<object>
  renderRow: Function
  oddColor?: string
  fetching: boolean
  _onRefresh: () => {}
}

const styles = StyleSheet.create({})

class DataList extends Component<Props> {
  constructor(props: Props) {
    super(props)

    this.state = {}
    this._renderComponent = this._renderComponent.bind(this)
  }

  static defaultProps = {
    backgroundColor: '#FFFFFF',
    dataSource: [],
    oddColor: 'grey'
  }

  _renderComponent() {
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

  render() {
    if (this.props.fetching && this.props._onRefresh) {
      return (
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.props.fetching}
              onRefresh={this.props._onRefresh}
            />
          }
        >
          {this._renderComponent()}
        </ScrollView>
      )
    } else {
      return this._renderComponent()
    }
  }
}

export default DataList
