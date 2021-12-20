import React, {Component} from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
class AddPhoto extends Component {
    handleSubmit = (e) => {
        e.preventDefault()

        const imageLink = e.target.elements.link.value
        const description = e.target.elements.description.value

        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: imageLink
        }

        if (imageLink && description) {
            this.props.startAddingPost(post)
            //this.props.addPost(post)
            this.props.history.push('/')
        }
    }
    
    render(){
        return (
            <div className="add-post">
                <Form 
                    inline
                    onSubmit={this.handleSubmit}
                >
                    <FormGroup>
                        <Label for="link" hidden >
                            Image Url
                        </Label>
                        <Input
                            id="link"
                            name="link"
                            placeholder="Enter image URL"
                            type="text"
                        />
                    </FormGroup>
                    {' '}
                    <FormGroup>
                        <Label for="description" hidden>
                            Description
                        </Label>
                        <Input
                            id="description"
                            name="description"
                            placeholder="Description"
                            type="text"
                        />
                    </FormGroup>
                    {' '}
                    <Button 
                        color="primary"
                    >
                        Add Photo
                    </Button>
                </Form>
            </div>
        )
    }
}

export default AddPhoto;