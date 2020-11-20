import React, { useState, useEffect } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CreateAnswer from '../Answers/CreateAnswer';

const QuestionCard = (props) => {


    const [readyToAnswer, setReadyToAnswer] = useState(false);
    const [selectedQuestionId, setSelectedQuestionId] = useState('');

    const {         buttonLabel,         className      } = props;
    
      const [modal, setModal] = useState(false);
    
      const toggle = () => setModal(!modal);

    return (
        <div>
            {props.questionRes.map(question => {

                console.log('question card', question)

                return (

                    <div key={question.id} className="questioncard">
                        <h2>  {question.title} </h2>
                        <h3>{question.category} </h3>
                        <p>{question.entry} </p>
                        <Button class="question-button" setSelectedQuestionId={question.id} onClick={toggle} >Create Answer </Button>
                        <Button class="question-button">View Answers </Button>
                        <Button class="question-button">Edit Question</Button>
                        <Button class="question-button">Delete Question </Button>


                        <Modal isOpen={modal} toggle={toggle} className={className}>
                            <ModalHeader toggle={toggle}>Submit Answer</ModalHeader>
                            <CreateAnswer token={props.token} questionid={question.id} />
                        </Modal>
                    </div>
                )

            }



            )}
        </div>
    )
}

export default QuestionCard
