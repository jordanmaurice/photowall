import React, {Component}from 'react';
import Photo from './Photo'
import {Link} from 'react-router-dom'
import { Container, Row, Col, CardColumns, Button } from 'reactstrap';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class PhotoWall extends Component {
    render() {
        return(
            <div>
                <Container>
                    <Row className="create-button-row">
                        <Link to="/create">
                            <Button
                                color="primary"
                                size="lg"
                                className="create-post-button"
                            >
                                <FontAwesomeIcon icon={faCameraRetro} /> Add Photo
                            </Button>
                        </Link> 
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <CardColumns>
                            {this.props.posts
                            .sort(function(x,y) {
                                return y.id - x.id
                            })
                            .map((post, index) =>                  
                                <Photo key={index} post={post} index={index} {...this.props} />
                            )}  
                        </CardColumns>
                    </Row>
                 </Container>
            </div>
        )
    }
}

export default PhotoWall;