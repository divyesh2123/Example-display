import React from 'react'
import data from './post'
import { Ipost } from './IPost'

export default function Display() {
  return (
    <div>{
        data.map((c: Ipost)=>{

            return (<div>{c.body} {c.id}</div>)
        })

    }</div>
  )
}
