import React, { Component } from 'react'
import { Ipost } from './IPost'
import data from './user'

export interface IPost {
    userId: number
    id: number
    title: string
    body: string

}
export interface MyPost
{
    data: Ipost[]
}

export default class DisplayDataUsingAPI extends Component {

    state: Readonly<MyPost> = {
        data: []
    }

    componentDidMount(): void {

        fetch("https://jsonplaceholder.typicode.com/posts").then(y=> y.json())
        .then(y=>{

            this.setState({...this.state,data: y});
        }).catch(y=>{

            this.setState({...this.state,data: []})
        })
        
    }
  render() {
    return (
      <div>{

            this.state.data.map((d:Ipost)=>{

                return (<div>{d.body}</div>)

            })
        
        }</div>
    )
  }
}
