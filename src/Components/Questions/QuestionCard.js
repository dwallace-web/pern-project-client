import React, { useState, useEffect } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Collapse, CardBody, Card } from 'reactstrap';
import CreateAnswer from '../Answers/CreateAnswer';
import ViewAnswer from '../Answers/ViewAnswer';
import EditQuestion from './EditQuestion';

const QuestionCard = (props) => {

    const [readyToAnswer, setReadyToAnswer] = useState(false);
    const [selectedQuestionId, setSelectedQuestionId] = useState('');


    return (
        <div>
            { props.questionRes.map(question => {

                console.log('question card', question)

                return (

                    <div key={question.id} className="questioncard">
                        <h5>Title:</h5>
                        <h7>  {question.title} </h7>
                        <h5>Category:</h5>
                        <h7>{question.category} </h7>
                        <h5>What seems to be the problem?</h5>
                        <p>{question.entry} </p>
                        <br></br>
                        <div className="questionButtonMenu">
                        <CreateAnswer token={props.token} questionid={question.id} />
                        <br></br>
                        <ViewAnswer token={props.token} questionid={question.id}  />
                        <br></br>
                        <br></br>
                        <EditQuestion token={props.token} questionid={question.id} />
                        {/* <Button class="question-button">Delete Question </Button> */}



                    </div>
                )

            }
            )
            }
        </div>
    )
}

export default QuestionCard