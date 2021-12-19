import React, {Component} from 'react'
import Photo from './Photo'
import Comments from './Comments'

class SinglePhoto extends Component {
    render() {
        const {match, posts} = this.props
        const id = Number(match.params.id)
        const singlePost = posts.find((post) => post.id === id)
        const comments = this.props.comments[match.params.id] || []
        const index = this.props.posts.findIndex((post) => post.id === id)

        console.log(singlePost)

        return (
            <div className="single-photo">
                <Photo post={singlePost} {...this.props} index={index} />
                <Comments addComment={this.props.addComment} comments={comments} postId={id} />
            </div>
        )
    }
}

export default SinglePhoto;