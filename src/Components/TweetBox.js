import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import './TweetBox.css';

function TweetBox() {
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar src='pictureko.jpg' />
                    <input placeholder="What's happening?" type='text' />
                </div>
                <input placeholder="Optional: Enter image URL" type='text' className='tweetBox__imageInput' />
                <Button className='tweetBox__tweetButton'>Tweet</Button>
            </form>
            
        </div>
    )
}

export default TweetBox
