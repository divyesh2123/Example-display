import React, { useEffect, useState } from 'react'
import { IPost } from './DisplayDataUsingAPI'

export default function PostFunctnio() {
  const [post,setposts] =  useState<IPost[]>([]);

  fetch("https://jsonplaceholder.typicode.com/posts").then(y=> y.json())
  .then(y=>{

    setposts(y);
  })


  return (
    <div>PostFunctnio</div>
  )
}
