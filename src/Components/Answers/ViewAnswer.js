import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import API_URL from '../../environment';
import DisplayAnswers from './displayAnswers';

const ViewAnswer = (props) => {

    const { buttonLabel, className } = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [answerResponses, setAnswerResponses] = useState([]);
    
    useEffect(() => {
        if(answerResponses != []) {
            setAnswerResponses([]);
        }
    }, [])


    const getAnswers = (props) => {
            // e.preventDefault();

            console.log('Id in the get answer fetch', props.questionid)

            fetch(`${API_URL}/answer/answers/${props.questionid}`, {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': props.token
                })
            })
                .then(response => response.json())
                .then(allanswers => {
                    console.log(allanswers)
                    setAnswerResponses(allanswers);
                    console.log('show answers to question', answerResponses)

                })
                .catch(error => console.log('error', error));
        }
    
    return (
        <div>
            <Button class="question-button" onClick={ ()=> {
                toggle();
                getAnswers(props);
            }}> 
            View Answers
            </Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Answers</ModalHeader>
                <ModalBody>
                    <DisplayAnswers answerResponses={answerResponses} />
                </ModalBody>
            </Modal>
        </div>
    )
}

export default ViewAnswer;