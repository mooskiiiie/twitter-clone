import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({ displayName, username, verified, timestamp, text, image, avatar}) {
    return (
        <div className='post'>
            <div className='post__avatar'>
                <Avatar src='pictureko.jpg' />
            </div>
            <div className='post__body'>
                <div className='post__header'>
                    <div className='post__headerText'>
                        <h3>Sebastian Vergara{" "}
                        <span className='post__headerSpecial'><VerifiedUserIcon className='post__badge'/>@mooskiiiie</span></h3>
                    </div>
                    <div className='post__headerDescription'>
                        <p>Lets build a twitter clone with React!</p>
                    </div>
                </div>
                <img src='https://static-ssl.businessinsider.com/image/5c7079e42628984a1a046382-1293/screen%20shot%202019-02-22%20at%2032336%20pm.jp2' alt=''/>
                <div className='post__footer'>
                    <ChatBubbleOutlineIcon fontsize='small' />
                    <RepeatIcon fontsize='small'/>
                    <FavoriteBorderIcon fontsize='small'/>
                    <PublishIcon  fontsize='small'/>    
                </div>
            </div>
        </div>
    )
}

export default Post
