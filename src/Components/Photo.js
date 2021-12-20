import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'

function Photo(props){
    const post = props.post

    return(
            <Card className="single-card">
                <Link to={`/photo/${post.id}`}>
                <CardImg
                    alt={post.description}
                    src={post.imageLink}
                    top
                    width="100%"
                />
                </Link>
                <CardBody>
                <CardTitle tag="h2">
                    {post.description}
                </CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </CardText>
                <Button 
                    color="danger"
                    onClick= {() => {
                        props.history.push('/')
                        props.startRemovingPost(props.index, post.id)
                    }}
                >
                    <FontAwesomeIcon icon={faTrash} /> {' '} <span>Remove Photo</span>
                </Button>
                {' '}
                <Link to={`/photo/${post.id}`}>
                    <Button>
                    <FontAwesomeIcon icon={faComment} /> 
                    {' '}
                    <span>
                        {props.comments[post.id] ? props.comments[post.id].length : 0 }  Comments 
                    </span>
                    
                    </Button>
                </Link>
                </CardBody>
            </Card>
    )
}

export default Photo;