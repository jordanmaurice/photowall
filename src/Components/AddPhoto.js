import React, {Component} from 'react';
import serializeForm from 'form-serialize'
import { Link } from 'react-router-dom'

class AddPhoto extends Component {
    handleSubmit = (e) => {
        e.preventDefault()

        const values = serializeForm(e.target, { hash: true })  

        if (values["imageLink"] && values["description"]) {
            values.id = Number(new Date())
            console.log(values["imageLink"])
            this.props.addPost(values.id,values.imageLink,values.description)
            this.props.history.push('/')
        }
    }
    
    render(){
        return (
            <div className="add-post">
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Enter image URL" name="imageLink" />
                        <input type="text" placeholder="Description" name="description" />
                        <button>Post</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPhoto;