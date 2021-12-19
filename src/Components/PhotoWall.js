import React, {Component}from 'react';
import Photo from './Photo'
import {Link} from 'react-router-dom'

class PhotoWall extends Component {
    render() {
        return(
            <div>
                <Link to="/create" className="addpicture"></Link> 
                <div className="photo-grid"> 
                    {this.props.posts
                    .sort(function(x,y) {
                        return y.id - x.id
                    })
                    .map((post, index) => <Photo key={index} post={post} index={index} {...this.props} />)}           
                </div>
            </div>
        )
    }
}

export default PhotoWall;