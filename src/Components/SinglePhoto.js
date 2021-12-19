import React, {Component} from 'react'
import Photo from './Photo'
import Comments from './Comments'

class SinglePhoto extends Component {
    render() {
        const {match, posts} = this.props
        const id = Number(match.params.id)
        const singlePost = posts.find((post) => post.id === id)
        console.log(singlePost)

        return (
            <div className="single-photo">
                <Photo post={singlePost} />
                <Comments />
            </div>
        )
    }
}

export default SinglePhoto;