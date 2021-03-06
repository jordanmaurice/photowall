import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import Header from './Header'
import Login from './Login'
import Register from './Register'
import SinglePhoto from './SinglePhoto'
import ForgotPassword from './ForgotPassword'
import {Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends Component {   
    state = {
        loading: true
    }

    componentDidMount(){
        this.props.startLoadingPosts().then(()=> {
            this.setState({loading: false})
        })
        this.props.startLoadingComments()
    }

    render() {
        return(
            <div>
                <Header />
                <h1 className="font-face">
                    <Link to="/">Photowall</Link>
                </h1>

                <Switch>
                    <Route exact path='/' render={(params) => (<PhotoWall {...this.props}{...params}/>)}/>
                    <Route path='/create' render={(params) => (<AddPhoto {...this.props}{...params}/>)}/> 
                    <Route path='/login' render={(params) => (<Login {...this.props}{...params}/>)}/> 
                    <Route path='/register' render={(params) => (<Register {...this.props}{...params}/>)}/> 
                    <Route path='/forgot' render={(params) => (<ForgotPassword {...this.props}{...params}/>)}/> 
                    <Route path='/photo/:id' loading={this.state.loading} render={(params) => (<SinglePhoto {...this.props}{...params}/>)}/> 
                </Switch>
            </div>
        )
    }
}

export default Main;