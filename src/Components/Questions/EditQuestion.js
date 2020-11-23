import React, { useState, useEffect } from 'react';

import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const EditQuestion = (props) => {
    console.log('edit question token -->', props.token)
    const [questionTitle, setQuestionTitle] = useState('');
    const [questionCategory, setQuestionCategory] = useState('');
    const [questionEntry, setQuestionEntry] = useState('');
    const [editedQuestion, setEditedQuestion] = useState(false);
    const { buttonLabel, className } = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);


    const submitEditQuestion = (e) => {
    e.preventDefault();
    console.log(props);
    console.log('edit question ran', props.questionid)
    fetch(`http://localhost:5000/question/${props.questionid}`, {
        method: 'PUT',
        heeaders: new Headers({
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
        setEditedQuestion(true);
    })
    .catch(error => console.log('error', error));
}
return (
    <div>
        <Button class="question-button" onClick={toggle}>Edit Question </Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
            {
                editedQuestion === true ?
                    <div>
                        <h3>Thank you!</h3>
                        <p>The question has been edited. </p>
                    </div>
                    :
                    <div>
                        <h3 className="current-module">Edit Question</h3>
                        <Form onSubmit={submitEditQuestion}>
                            <FormGroup>
                                <Label for="title"> </Label>
                                <Input type="text" name="title" id="question-title-entry" required placeholder="placeholder" onChange={(e) => setQuestionTitle(e.target.value)} />
                            </FormGroup>
                            
                            <FormGroup>
                                <Label for="category"> </Label>
                                <Input type="text" name="category" id="question-category-entry" required placeholder="placeholder" onChange={(e) => setQuestionCategory(e.target.value)} />
                            </FormGroup>


                            <FormGroup>
                                <Label for="entry"></Label>
                                <Input type="textarea" name="entry" id="question-entry" required placeholder="placeholder" onChange={(e) => setQuestionEntry(e.target.value)} />
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                    </div>
            }
        </Modal>
    </div>
    )}
export default EditQuestion;