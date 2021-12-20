import React, {Component}from 'react';
import Photo from './Photo'
import {Link} from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';
class PhotoWall extends Component {
    render() {
        return(
            <div>
                <Link to="/create" className="addpicture"></Link> 
                <Container>
                    <Row>
                        {this.props.posts
                        .sort(function(x,y) {
                            return y.id - x.id
                        })
                        .map((post, index) =>                  
                            <Col xs="4">
                                <Photo key={index} post={post} index={index} {...this.props} />
                            </Col>
                        )}  
                    </Row>
                 </Container>
            </div>
        )
    }
}

export default PhotoWall;