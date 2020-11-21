import React, {useState} from 'react';
import {Button } from 'reactstrap';
import CreateAnswer from './CreateAnswer';
import ViewAnswer from './ViewAnswer';
import ViewQuestion from '../Questions/ViewQuestion'

const Answer = (props) => {

    const [answerQuestion, setAnswerQuestion] = useState(false)

    const clickAnswerQuestion = () => {
        setAnswerQuestion(true)
    }
    
    const clickViewAnswer = () => {
        setAnswerQuestion(false)
    }

    return (
        <div>
            <h2>Answer </h2>
            {/* <p>We need logic that will 1. show the answers or 2. Create an answer</p> */}
            {
            
                answerQuestion === false

                    ?
                        <div>
                        <Button onClick={clickAnswerQuestion}>Answer this question.</Button>
                        <CreateAnswer token={props.token}/> 
                        </div>
                    :
                        <div>
                            <Button onClick={clickViewAnswer}>View all answers to this question.</Button>
                        <ViewAnswer token={props.token}/>
                        </div> 
            }
        </div>
    )
}

export default Answer;