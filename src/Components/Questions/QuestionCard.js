import React, {useState, useEffect} from 'react'
import { Button } from 'reactstrap';

const QuestionCard = (props) => {


    const [readyToAnswer, setReadyToAnswer] = useState(false);
    const [selectedQuestionId, setSelectedQuestionId] = useState('');
    return (
        <div>
            {props.questionRes.map(question => {

                console.log('question card', question)

                return (

                    <div key={question.id} className="questioncard">
                        <h2>  {question.title} </h2>
                        <h3>{question.category} </h3>
                        <p>{question.entry} </p>
                        <Button class="question-button">View Answers </Button>
                        <Button class="question-button">Create Answer </Button>
                        <Button class="question-button">Edit Question</Button>
                        <Button class="question-button">Delete Question </Button>
                        {/* Buttons to edit or delete question but only if the user ID matches */}

                        {/* Function runs to display answers
                            View Answer or Create Answer


                        */}
                    </div>
                )

            }



            )}
        </div>
    )
}

export default QuestionCard
