import { Avatar } from '@material-ui/core'
import { Comment, ThumbUp } from '@material-ui/icons'
import React from 'react'
import './Post.css'

const Post = ({profilePic, username = "Admin", timestamp = "12/12/12", message = "Welcome to SocialBook"}) => {
  return (
        <div className='post'>
            <div className='post-top'>
                <Avatar src={profilePic} className='post-avatar'/>
                <div className='post-top-info'>
                    <h3>{username}</h3>
                    <p>{timestamp}</p>
                </div>
            </div>

            <div className='post-bottom'>
            <div className='post-message'>
                <p>{message}</p>
            </div>

                <div className='post-options'>
                    <div className='post-option'>
                        <ThumbUp />
                        <p>Like</p>
                    </div>

                    <div className='post-option'>
                        <Comment />
                        <p>Comment</p>
                    </div>

                </div>
            </div>
                
        </div>
  )
}

export default Post