import React from 'react'
import "./error404.css"
import { useLocation } from "react-router-dom";

export default function Error404() {
  let location = useLocation();

  return (
    <div className='error404'>
     <h1 className="errorInfo" style={{color:"red"}}> Sorry we couldn't find the page you were looking for </h1>   
     <p className='errorMsg'> {location.pathname} not found </p>
   
    </div>
  )
}
