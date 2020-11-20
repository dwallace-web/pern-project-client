import React from 'react'
import { Button } from 'reactstrap';

const QuestionCard = (props) => {


    return (
        <div>
            {props.questionRes.map(question => {

                console.log('question card', question)

                return(

                    <div key={question.id}>
                        <h2>  {question.title} </h2>
                        <h3>{question.category} </h3>
                        {question.entry}
                        {/* Buttons to edit or delete question but only if the user ID matches */}
                    </div>
                )

            }



            )}
        </div>
    )
}

export default QuestionCard
