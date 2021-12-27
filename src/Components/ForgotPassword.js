import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, sendPasswordResetEmail } from "../database/config";
import { Form, FormGroup, Label, Input, Button, Container, Row } from 'reactstrap';


class ForgotPassword extends Component{
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            hasReset: false,
        }
    }

    updatePasswordMessage(){
        this.setState({ hasReset: true });
    }

    handleSubmit(event) {
        event.preventDefault()

        const email = event.target.elements.email.value;
        
        if (email !== '') {
            console.log("Calling forgot password function")
            sendPasswordResetEmail(email)
            this.updatePasswordMessage();

        }
    }

    render(){
        if (this.state.hasReset){
            return (
                <Container>
                    <div className="login">
                        <div className="login__container">
                            <div className="text-center">
                                Enter your email address below.  If it is tied to an account you'll receive an email within 2-3 minutes.
                            </div>

                            <div className="succesful-reset my-5">
                                Your request to reset your password has been received. Check your email for a link to reset. 
                            </div>

                            <div className="text-center text-muted mt-3">
                                Remembered it already? <Link to="/login">Login now.</Link>
                            </div>
                        </div>
                    </div>
                </Container>
            )
        } else {
            return (
                <Container>
                    <div className="login">
                        <div className="login__container">
                            <div className="text-center">
                                Enter your email address below.  If it is tied to an account you'll receive an email within 2-3 minutes.
                            </div>
    
                            <Form 
                                onSubmit={this.handleSubmit}
                                className="my-5">
                                <FormGroup>
                                    <Label for="email" className="sr-only">Email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        type="text"
                                        autoComplete="off"
                                    />
                                </FormGroup>
                                <Button  color="primary" size="lg" block>Reset Password</Button>
                            </Form>
    
                            <div className="text-center text-muted mt-3">
                                Remembered it already? <Link to="/login">Login now.</Link>
                            </div>
                        </div>
                    </div>
                </Container>
            )
        }
        
    }
}

export default ForgotPassword
