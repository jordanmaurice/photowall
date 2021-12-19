import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import {Route, Switch } from 'react-router-dom'

class Main extends Component {   
    render() {
        return(
            <div>
                <h1 className="font-face">
                    <Link to="/">Photowall</Link>
                </h1>

                <Switch>
                    <Route exact path='/' render={(params) => (<PhotoWall {...this.props}{...params}/>)}/>
                    <Route path='/create' render={(params) => (<AddPhoto {...this.props}{...params}/>)}/> 
                </Switch>
            </div>
        )
    }
}

export default Main;