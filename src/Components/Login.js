import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../database/config";
import { Form, FormGroup, Label, Input, Button, Container, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGoogle } from '@fortawesome/free-brands-svg-icons'
// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, loading, error] = useAuthState(auth);
//   const history = useHistory();

//   useEffect(() => {
//     if (loading) {
//       // maybe trigger a loading screen
//       console.log("Hey we are loading here...")
//       return;
//     }
//     if (user) history.replace("/dashboard");
//   }, [user, loading]);


//   return (
    // <div className="login">
    //   <div className="login__container">
    //     <input
    //       type="text"
    //       className="login__textBox"
    //       value={email}
    //       placeholder="E-mail Address"
    //     />
    //     <input
    //       type="password"
    //       className="login__textBox"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       placeholder="Password"
    //     />
    //     <button
    //       className="login__btn"
    //       onClick={() => signInWithEmailAndPassword(email, password)}
    //     >
    //       Login
    //     </button>
    //     <button className="login__btn login__google" onClick={signInWithGoogle}>
    //       Login with Google
    //     </button>
    //     <div>
    //       <Link to="/reset">Forgot Password</Link>
    //     </div>
    //     <div>
    //       Don't have an account? <Link to="/register">Register</Link> now.
    //     </div>
    //   </div>
    // </div>
//   );
// }
// export default Login;


class Login extends Component{
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){

    }

    handleSubmit(event) {
        event.preventDefault()

        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        
        if (email !== '' && password !== '') {
            console.log("Calling sign in function")
            signInWithEmailAndPassword(email, password)

        }
    }

    render(){
        return (
            <Container>
                <div className="login">
                    <div className="login__container">
                            <div className="text-center">
                            <Button
                                className="login__btn login__google mx-auto text-center" 
                                color="primary"
                                size="lg"
                                onClick={signInWithGoogle}
                            >
                                <FontAwesomeIcon icon={faGoogle} /> Login with Google
                            </Button>
                        </div>


                        <Form 
                            onSubmit={this.handleSubmit}
                            className="my-5">
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
                            <Button size="lg" color="primary" block>Login</Button>
                        </Form>
                        
                        <div className="text-center mt-3">
                            <Link to="/forgot">Forgot Password</Link>
                        </div>

                        <div className="text-center text-muted mt-3">
                            Don't have an account? <Link to="/register">Register</Link> now.
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}

export default Login
