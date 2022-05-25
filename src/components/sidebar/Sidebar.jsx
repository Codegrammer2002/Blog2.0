import React from 'react'
import './sidebar.css'
// https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg
export default function Sidebar() {
  return (

    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">About me</span>
            <img src = "https://www.github.com/Codegrammer2002.png" alt="flowers" />
            <p> Welcome to my blog this is Codegrammer 2002 from Cleveland Ohio</p>

        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle" > CATEGORIES </span>
            <ul className="sideBarList">
                <li className='sidebarListItem'>Life</li>
                <li className='sidebarListItem'>Music</li>
                <li className='sidebarListItem'>Style</li>
                <li className='sidebarListItem'>Cinema</li>
                <li className='sidebarListItem'>Tech</li>

            </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">  FOLLOW US </span>
        <div className="sidebarSocial">

        {/* <i className="sidebarIcon fa-brands fa-facebook"></i> 
        <i className="sidebarIcon fa-brands fa-twitter"></i>
        <i className="sidebarIcon fa-brands fa-instagram"></i>
        <i className="sidebarIcon fa-brands fa-pinterest"></i> */}
        <a href='https://www.facebook.com/react/' target="_blank" rel="noopener noreferrer"> <i className="sideBarIcon fa-brands fa-facebook" /> </a> 
        <a href = 'https://twitter.com/reactjs' target="_blank" rel="noopener noreferrer"> <i className="sideBarIcon fa-brands fa-twitter" />  </a>
        <a href = 'https://www.instagram.com/reactjsofficial' target="_blank" rel="noopener noreferrer"> <i className="sideBarIcon fa-brands fa-instagram"></i> </a>
        <a href = 'https://github.com/facebook/react' target="_blank" rel="noopener noreferrer"> <i className="sideBarIcon fa-brands fa-github"></i> </a>
        
        </div>
        </div>
        </div>
  )
}
