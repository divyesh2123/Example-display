import React, { Component } from 'react'

export interface ICounter
{
    counter: number,
    p : number
}

export default class CounterInMyClass extends Component {

    state: Readonly<ICounter> = {
        counter :0,
        p:0
    }

     inc = ()=>{

        this.setState({...this.state,counter: this.state.counter+1})
    }

    dec = ()=>{

        this.setState({...this.state,counter: this.state.counter-1})
    }

  render() {
    return (
      <div>
        {this.state.counter}
      
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    )
  }
}
