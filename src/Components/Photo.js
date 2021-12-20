import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

function Photo(props){
    const post = props.post
    return(
            <Card>
                <Link to={`/photo/${post.id}`}>
                <CardImg
                    alt={post.description}
                    src={post.imageLink}
                    top
                    width="100%"
                />
                </Link>
                <CardBody>
                <CardTitle tag="h5">
                    {post.description}
                </CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </CardText>
                <Button 
                    onClick= {() => {
                        props.history.push('/')
                        props.startRemovingPost(props.index, post.id)
                    }}
                >
                    Remove Photo
                </Button>
                <Link to={`/photo/${post.id}`}>
                    <Button>
                    {props.comments[post.id] ? props.comments[post.id].length : 0 } Comments 
                    </Button>
                </Link>
                </CardBody>
            </Card>
    )
}

export default Photo;