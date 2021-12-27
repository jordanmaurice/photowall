import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle, registerWithEmailAndPassword } from "../database/config";
//import { useAuthState } from "react-firebase-hooks/auth";
import { Form, FormGroup, Label, Input, Button, Container} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGoogle } from '@fortawesome/free-brands-svg-icons'
class Register extends Component{
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){

    }

    handleSubmit(event) {
        event.preventDefault()
        const name = event.target.elements.name.value;
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        
        if (email !== '' && password !== '') {
            registerWithEmailAndPassword(name, email, password)
        }
    }

    render(){
        return (
            <Container>
                <div className="login">
                    <div className="login__container">
                        <Form 
                            onSubmit={this.handleSubmit}
                            className="my-5">
                            <FormGroup>
                                <Label for="email" className="sr-only">
                                Name
                                </Label>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="Your name"
                                    type="text"
                                    autoComplete="off"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email" className="sr-only">
                                Email
                                </Label>
                                <Input
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    type="text"
                                    autoComplete="off"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password" className="sr-only">
                                Password
                                </Label>
                                <Input
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    type="password"
                                    autoComplete="off"
                                />
                            </FormGroup>
                            <Button size="lg" color="primary" block>Create Account</Button>
                        </Form>
                        
                        <div className="text-center mt-3">
                            <Link to="/forgot">Forgot Password</Link>
                        </div>

                        <div className="text-center text-muted mt-3">
                            Already have an account? <Link to="/login">Login now</Link>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}

export default Register


