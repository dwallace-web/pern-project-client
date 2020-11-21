import React, { useState } from 'react'
import { Form, FormGroup, Input, Button } from 'reactstrap'


export const SignIn = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function signInUser (event) {
        event.preventDefault();
        console.log('testing sign in ')

        await fetch("http://localhost:8080/user/signin", {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({username : username, password: password }),
        })
            .then(response => response.json())
            .then(result => props.reviseToken(result.sessionToken))
            .catch(error => console.log('error', error)); 

        console.log('sign in completed')
    }

    return (
        <div>
            <h1>Sign In</h1>
            <Form onSubmit={signInUser}>
            <FormGroup>
                    <label for="username">Username</label>
                    <Input type="text" name="username" value={username} placeholder="enter username " minLength="4" required onChange={(e) => setUsername(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <label for="password">password</label>
                    <Input type="password" name="password" value={password} placeholder="enter password" minLength="8"  required onChange={(e) => setPassword(e.target.value)}/>
                </FormGroup>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default SignIn