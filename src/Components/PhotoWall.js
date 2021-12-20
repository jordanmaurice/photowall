import React, {Component}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Photo from './Photo'
import {Link} from 'react-router-dom'
import { Container, Row, CardColumns, Button } from 'reactstrap';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class PhotoWall extends Component {
    render() {
        return(
            <div>
                <Container>
                    <Row className="create-button-row">
                        <Link to="/create" className="d-flex justify-content-center">
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

                <Container className="photo-wall py-5">
                    <CardColumns>
                        {this.props.posts
                        .sort(function(x,y) {
                            return y.id - x.id
                        })
                        .map((post, index) =>                  
                            <Photo key={index} post={post} index={index} {...this.props} />
                        )}  
                    </CardColumns>
                 </Container>
            </div>
        )
    }
}

export default PhotoWall;