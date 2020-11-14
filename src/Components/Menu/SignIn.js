import React, { useState } from 'react'
import { Form, FormGroup, Input, Button } from 'reactstrap'


export const SignIn = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function signInUser (event) {
        event.preventDefault();


        await fetch("http://localhost:5000/user/signin", {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({username : username, password: password }),
        })
            .then(response => response.json())
            .then(result => props.reviseToken(result.sessionToken))
            .catch(error => console.log('error', error)); 
    }

    return (
        <div>
            <h1>Sign In</h1>
            <Form onSubmit={signInUser}>
                <FormGroup>
                    <label for="email">Email</label>
                    <Input type="test" name="email" placeholder="enter email" />
                </FormGroup>
                <FormGroup>
                    <label for="password">password</label>
                    <Input type="password" name="password" placeholder="enter password" />
                </FormGroup>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default SignIn