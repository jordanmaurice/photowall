import React, {Component} from 'react'
import {Link} from 'react-router-dom'

function Photo(props){
    const post = props.post
    return(
        <figure className="grid-figure"> 
            <div className="grid-photo-wrap">
                <Link to={`/photo/${post.id}`}> <img src={post.imageLink} alt={post.description} className="grid-photo" /></Link>
            </div>
            <figcaption>
                <p>{post.description}</p> 
                <div className="button-container">
                    <button 
                        onClick= {() => {
                            props.history.push('/')
                            props.startRemovingPost(props.index, post.id)
                        }}
                        className="remove">
                        Remove</button>
                    <Link className="button" to={`/photo/${post.id}`}>
                        <div className="comment-count">
                            <div className="speech-bubble"> </div>
                            {props.comments[post.id] ? props.comments[post.id].length : 0 }
                        </div>
                    </Link>
                </div>
            </figcaption>
        </figure>
    )
}

export default Photo;