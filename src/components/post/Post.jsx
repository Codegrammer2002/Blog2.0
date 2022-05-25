import React from 'react'
import './post.css'
export default function Post() {
  return (
    <div className='post'>
        <img className='postImg' src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt = 'mountains' />
        <div className="postInfo">

             <div className="postCategories">

             <span className="postCategory">Music</span>

             <span className="postCategory">Life</span>

             </div>
           <span className='postTitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
           <hr />
           <span className="postDate">1 hour ago </span>
           <p className="postDescription">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro harum dolores nesciunt, non magnam, officia praesentium sint laboriosam minus magni veniam nam, consequuntur inventore ipsam beatae perferendis aspernatur earum dolor.
           </p>
        </div>

    </div>
  )
}
