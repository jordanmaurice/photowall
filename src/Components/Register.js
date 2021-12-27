import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle, registerWithEmailAndPassword } from "../database/config";
//import { useAuthState } from "react-firebase-hooks/auth";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

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
            <div>
                <div className="login">
                    <div className="login__container">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="name">
                            Name
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                type="text"
                                autoComplete="off"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">
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
                            <Label for="password">
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
                        <Button>Register</Button>
                    </Form>
                        <button className="login__btn login__google" onClick={signInWithGoogle}>
                        Login with Google
                        </button>
                        <div>
                        <Link to="/reset">Forgot Password</Link>
                        </div>
                        <div>
                        Don't have an account? <Link to="/register">Register</Link> now.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register
