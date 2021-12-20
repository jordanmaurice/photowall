import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Photo extends Component {
    render() {
        const { post, index } = this.props;

        return(
            <figure className="grid-figure"> 
                <div className="grid-photo-wrap">
                    <Link to={`/photo/${post.id}`}> <img src={post.imageLink} alt={post.description} className="grid-photo" /></Link>
                </div>
               <figcaption>
                   <p>{post.description}</p> 
                   <div className="button-container">
                        <button className="Remove" onClick= {() => {
                            this.props.history.push('/')
                            this.props.startRemovingPost(index, post.id)
                        }}>Remove</button>
                        <Link className="button" to={`/photo/${post.id}`}>
                            <div className="comment-count">
                                <div className="speech-bubble"></div>
                                {this.props.comments[post.id] ? this.props.comments[post.id].length : 0 }
                            </div>
                        </Link>
                    </div>
                </figcaption>
            </figure>
        )
    }
}

export default Photo;