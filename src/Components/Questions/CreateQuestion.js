import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const CreateQuestion = (props) => {
    console.log('question token -->', props.token)

    const [questionTitle, setQuestionTitle] = useState('');
    const [questionCategory, setQuestionCategory] = useState('');
    const [questionEntry, setQuestionEntry] = useState('');
    const [submittedQuestion, setSubmittedQuestion] = useState(false);

    const submitQuestion = (e) => {
        e.preventDefault();

        fetch("http://localhost:5000/question/", {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            }),
            body: JSON.stringify({
                "question": {

                    "title": questionTitle,
                    "category": questionCategory,
                    "entry": questionEntry,
                }
            })

        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setSubmittedQuestion(true);
            })
            .catch(error => console.log('error', error));
    }

    return (
        <div>
<<<<<<< HEAD
            {
                submittedQuestion === true ?
                    null
                    :
                    <div>
                        <h3>Create Question</h3>

                        <Form onSubmit={submitQuestion}>
                            <FormGroup>
                                <Label for="title"> </Label>
                                <Input type="text" name="title" id="question-title-entry" required placeholder="please enter a question" onChange={(e) => setQuestionTitle(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="category"> </Label>
                                <Input type="text" name="category" id="question-category-entry" required placeholder="please enter a category" onChange={(e) => setQuestionCategory(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="entry"> </Label>
                                <Input type="textarea" name="entry" id="question-entry-entry" required placeholder="please expand on your question" onChange={(e) => setQuestionEntry(e.target.value)} />
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                    </div>
            }
=======
            <h3>CreateQuestion</h3>

        Function postJournal() {
            let title = document.getElementByID('title').value
            let date = document.getElementByID('date').value
            let entry = document.getElementByID('entry').value
            const acessToken = localStorage.getItem('sessionToken')
            let newEntry = { journal: { title: title, date: date, entry;} }

        fetch('http://localhost:8080/journal/create', {
            method: 'POST',
            headers: new Headers({
                'content-type': 'application/json',
                'Authorization': acessToken
:            }),
                body: JSON.stringify(newEntry)
        })    
          .then(response => {
              console.log(response.json())
              displayMine()
          }) 
          .catch((err)) => {
              console.log(err)
          } 

        }


>>>>>>> nathan
        </div>
    )
}


                
                





export default CreateQuestion;