import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>name is {this.props.value}</h1>
      </div>
    )
  }
}

