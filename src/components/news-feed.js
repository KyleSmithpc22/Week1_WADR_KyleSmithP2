import React from 'react';
import Post from './navbar'
import Comment from './logIn';

let e = React.createElement;

export default class Fullpage extends React.Component {
    render() {

        return(
            <div className='container'>
                <Post />

                <Comment />
            </div>

            
        )
    }
}