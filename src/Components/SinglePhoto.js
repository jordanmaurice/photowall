import React, {Component} from 'react'
import Photo from './Photo'
import Comments from './Comments'
import { Container, Row, Col, CardColumns, Button } from 'reactstrap';
import { Spinner } from 'reactstrap';
class SinglePhoto extends Component {
    render() {
        const {match, posts} = this.props
        const id = Number(match.params.id)
        const post  = posts.find((post) => post.id === id)
        const comments = this.props.comments[match.params.id] || []
        const index = this.props.posts.findIndex((post) => post.id === id)

        console.log(post)

        if(this.props.loading === true){
            return (
                <div>
                    <Spinner>
                        Loading...
                    </Spinner>
                </div>
            )
        } else if (post ) {
            return (
                <Container>
                    <Row>
                        <Col
                            xs="6"
                            >
                            <Photo post={post} {...this.props} index={index} />
                        </Col>
                        <Col
                            className="bg-light"
                            xs="6"
                            >
                            .<Comments addComment={this.props.startAddingComment} comments={comments} postId={id} />
                        </Col>
                    </Row>
                </Container>

            )
        } else {
            return (
                <h2> ...no post found </h2>
            )
        }
    }
}

export default SinglePhoto;