import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

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
                

                <Form onSubmit={submitAnswer}>
                    <FormGroup>
                        <Label for="title"> </Label>
                        <Input type="text" name="title" id="answer-title-entry" required placeholder="Enter answer here." onChange={(e) => setAnswerTitle(e.target.value)} />
                    </FormGroup>
                    <Formgroup>
                        <Label for="entry"></Label>
                        <Input type="textarea" name="entry" id="answer-entry" required placeholder="Please submit your answer here." onChange={(e) => setAnswerEntry(e.target.value)}/> 
                    </Formgroup>
                    <Button>Submit</Button>
                </Form>
            </div>
          }
    </div>   

    )
}


export default CreateAnswer;