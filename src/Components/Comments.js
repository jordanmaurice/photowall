import React, {Component} from 'react' 

class Comments extends Component{
    render(){
        return (
            <div className="comment">
                <form className="comment-form">
                    <input type="text" placeholder="comment" name="comment" />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default Comments