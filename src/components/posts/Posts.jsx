import React from 'react'
import Post from '../post/Post'
import './posts.css'
// This folder is similar to the Articles Page one we see in the previous article blog.
// This specific page won't have any posts here rathar it would display article based on the provided article route 
export default function Posts() {
    
  return (
    <div className ='posts'>
        <Post /> 
        <Post /> 
        <Post /> 
        <Post /> 


        </div>
  )
}
