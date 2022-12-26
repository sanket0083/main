import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        name : 'sanket',
        email : 'sanket@gmail.com',
        student : {
          name : 'student',
          email : 'student@gmail.com'
        },
        age : 18
      }
    
  }
  btn = () => {
    this.setState({name : 'kaushik', email : 'kaushik@gmail.com'})
  }

  render() {
    return (
      <div>
        name is {this.state.name} <br />
        name is {this.state.email} <br />
        student name is {this.state.student.name} <br />
        <button onClick={this.btn}>submit</button>
        
      </div>
    )
  }
}
