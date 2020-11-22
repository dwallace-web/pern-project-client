import React, { useState } from 'react';
import { Button } from 'reactstrap';
import CreateQuestion from './CreateQuestion';
import ViewQuestion from './ViewQuestion';

const Question = (props) => {
    // console.log(props.token)

    const [askQuestion, setAskQuestion] = useState(false)

    const clickAskQuestion = () => {
        setAskQuestion(true)
    }
    const clickViewQuestions = () => {
        setAskQuestion(false)
    }

    return (
        <div className="jumbotron">
            
            {
                
                askQuestion === false

                    ?
                        <div>
                            <Button onClick={clickAskQuestion}>Do you want to ask a question? </Button>
                            <ViewQuestion token={props.token} />
                        </div>
                    
                    :

                        <div>
                        
                            <Button onClick={clickViewQuestions}>Do you want to view the questions? </Button>
                            <CreateQuestion token={props.token} />
                        </div>
            }
        </div>
    )
}

export default Question;