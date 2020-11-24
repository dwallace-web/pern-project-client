import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import API_URL from '../../env';

const CreateQuestion = (props) => {
    console.log('question token -->', props.token)

    const [questionTitle, setQuestionTitle] = useState('');
    const [questionCategory, setQuestionCategory] = useState('');
    const [questionEntry, setQuestionEntry] = useState('');
    const [submittedQuestion, setSubmittedQuestion] = useState(false);

    const submitQuestion = (e) => {
        e.preventDefault();

        fetch(`${API_URL}/question/`, {
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
        </div>
    )
}

export default CreateQuestion;