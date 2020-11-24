import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateAnswer = (props) => {
    console.log('answer token -->', props.token)

    const [answerTitle, setAnswerTitle] = useState('');
    const [answerLikes, setAnswerLikes] = useState(0);
    const [answerEntry, setAnswerEntry] = useState('');
    const [submittedAnswer, setSubmittedAnswer] = useState(false);
    const [answerLiked, setAnswerLiked] = useState(false);

    

    const { buttonLabel, className } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);


    const submitAnswer = (e) => {
        e.preventDefault();

        // console.log(props.questionid)
        fetch('http://localhost:5000/answer/', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            }),
            body: JSON.stringify({
                "answer": {
                    "title": answerTitle,
                    "entry": answerEntry,
                    "likes": answerLikes,
                    "questionId": props.questionid
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
             submittedAnswer === true ? null:null
             
         }
        <div>
            <Button class="question-button" onClick={toggle}>Create Answer </Button>

            <Modal isOpen={modal} toggle={toggle} className={className}>
                {

                    submittedAnswer === true ?
                        <div>
                            <h3>Thank you!</h3>
                            <p>The Answer was submitted. </p>
                        </div>
                        :
                        <div>
                            <h3 className="current-module">CreateAnswer</h3>

                            <Form onSubmit={submitAnswer}>
                                <FormGroup>
                                    <Label for="title"> </Label>
                                    <Input type="text" name="title" id="answer-title-entry" required placeholder="Enter answer here." onChange={(e) => setAnswerTitle(e.target.value)} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="entry"></Label>
                                    <Input type="textarea" name="entry" id="answer-entry" required placeholder="Please submit your answer here." onChange={(e) => setAnswerEntry(e.target.value)} />
                                </FormGroup>
                                <Button>Submit</Button>
                            </Form>
                        </div>
                }
            </Modal>
        </div>

</div>    )
}

        
export default CreateAnswer;