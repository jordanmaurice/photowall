import React, {Component} from 'react';

class Photo extends Component {
    render() {
        console.log(this.props)
        const { post, i } = this.props;
        console.log(this.props.post)
        return(
            <figure className="grid-figure"> 
                <div className="grid-photo-wrap">
                    <img src={post.imageLink} alt={post.description} className="grid-photo" />
                </div>
               <figcaption>
                   <p>{post.description}</p>
                   <div className="control-buttons">
                        <button className="Remove" onClick= {() => {
                            this.props.history.push('/')
                            this.props.removePost(i)
                        }}>Remove</button>
                    </div>
                </figcaption>
            </figure>
        )
    }
}

export default Photo;