import React from 'react'
import './settings.css'
import Sidebar from '/Users/parvbhardwaj/Desktop/personalFolder/selfTaughtCourses/masterProjectFolder/codegrammerProject1/codegrammer_blog/src/components/sidebar/Sidebar.jsx'

export default function Settings() {
  return(
      <div className="settings">
          <div className="settingsWrapper">
            <div className="settingsTitle">

                <span className="settingsTitleUpdate">
                    Update your account
                </span>
                <span className="settingsTitleDelete">
                    Delete Account
                </span>

            </div>
            <form className='settingsForm'>
                <label> Profile Picture</label>
                <div className="settingsPP">
                    <img src='https://www.github.com/Codegrammer2002.png' alt ='' />
                    <label htmlFor='fileInput' >
                        <i className='settingPPIcon far fa-user-circle'>{ " "} </i>
                    </label>
                    <input 
                    id = "fileInput"
                    type = "file"
                    style = {{display : "none"}}
                    className ="settingsPPInput"
                    />
                </div>
                <label>Username</label>
                <input type = "text" placeholder = "your name.." name = "name" />
                <label htmlFor="">Email</label>
                <input type="email" placeholder='yourmail@mail.com' name = "email"  />
                <label> Password</label>
                <input type = "password" placeholder='Password' name = 'password' />
                <button className='settingsSubmitButton' type = "submit">
                    Update
                </button>
            </form>

          </div>
          <Sidebar />
          
      </div>
  );
}
