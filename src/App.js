import React, { Component } from 'react'

export default class App extends Component {

  componentWillMount(){
    this.setState({count : this.state.count + 1});
  }
  constructor (props) {
    super(props);
    this.state = {
      count : 1,
      data : null
    }
  }

  btn = () => {
    this.setState({count : this.state.count + 1});
  }
  render() {

    return (
      <div>
        {this.state.count} <br />
        <button onClick={this.btn}>submit</button>
      </div>
    )
  }
}
