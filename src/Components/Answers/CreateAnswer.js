import React, {useState} from 'react';
import {Button, Form, Label, Input} from 'reactstrap';

const CreateAnswer = (props) => {
    console.log('answer token -->', props.token)

    const [answerTitle, setAnswerTitle] = useState('');
    const [answerLikes, setAnswerLikes] = useState('');
    const [answerEntry, setAnswerEntry] = useState('');
    const [submittedAnswer, setSubmittedAnswer] = useState(false);
    const [answerLiked, setAnswerLiked] = useState(false);

    const submitQuestion = (e) => {
        e.preventDefault();

        fetch('http://localhost:8080/answer/', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            }),
            body: JSON.stringify({
                "answer": {
                    "title": answerTitle,
                    "entry": answerEntry,
                    "likes": answerLikes
                }
            })
        })
        .then(response => response.json())
            .then(result => {
                console.log(result)
                setSubmittedAnswer(true);
            })
            .catch(error => console.log('error', error));
   
}


 return (
     <div>
         {
             submittedAnswer === true ?
             null
             :
            <div>
                <h3>CreateAnswer</h3>
        
            </div>
    </div>
         
     )
}

export default CreateAnswer;