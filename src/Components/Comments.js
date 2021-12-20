import React, {Component} from 'react' 
import { Form, FormGroup, Label, Input } from 'reactstrap';
class Comments extends Component{
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()

        // Only submit a commment if the textbox is not empty..
        if (event.target.elements.comment.value !== ''){ 
            const comment = event.target.elements.comment.value;
            this.props.addComment(comment, this.props.postId)
            event.target.elements.comment.value = '';
        }
    }

    render(){
        return (
            <div className="comment">
                <h2>Comments</h2>
                {
                    this.props.comments.map((comment,index)=> {
                        return (
                            <p key={index}>{comment}</p>
                        )
                    })
                }
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="commentBox">
                        Comment
                        </Label>
                        <Input
                            id="commentBox"
                            name="comment"
                            placeholder="Enter a comment"
                            type="text"
                            autoComplete="off"
                        />
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default Comments