import React, { Component } from 'react'

export default class App extends Component {
  componentWillMount() {
    this.setState({count : this.state.count + 2});
  }
  constructor(props){
    super(props);
    console.log("constructor");
    this.state = {
      count : 1,
    };
  }
 
  btn = () => {
    this.setState({count : this.state.count + 2});
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
