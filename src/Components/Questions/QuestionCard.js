import React, { useState, useEffect } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Collapse, CardBody, Card } from 'reactstrap';
import CreateAnswer from '../Answers/CreateAnswer';

const QuestionCard = (props) => {

    const [readyToAnswer, setReadyToAnswer] = useState(false);
    const [selectedQuestionId, setSelectedQuestionId] = useState('');


    return (
        <div>
            { props.questionRes.map(question => {

                console.log('question card', question)

                return (

                    <div key={question.id} className="questioncard">
                        <h2>  {question.title} </h2>
                        <h3>{question.category} </h3>
                        <p>{question.entry} </p>
                        <CreateAnswer token={props.token} questionid={question.id} /> {/*toggle={toggle} */}
                        <br></br>
                        <Button class="question-button">View Answers </Button>
                        <br></br>
                        <br></br>
                        <Button class="question-button">Edit Question</Button>
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