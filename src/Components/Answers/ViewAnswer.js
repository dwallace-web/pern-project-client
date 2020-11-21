import React, {useState} from 'react';
import { } from 'reactstrap';


const ViewAnswer = (props) => {

    const getAnswers = (e) => {
        // e.preventDefault();

        console.log(props.questionid)

        fetch('http://localhost:5000/answer/', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
            .then(response => response.json())
            .then(allanswers => {
                console.log(allanswers)
            })
            .catch(error => console.log('error', error));

    }

    getAnswers();
    
    return (
        <div>
            <h3>ViewAnswer</h3>
            
        </div>
    )
}

export default ViewAnswer;