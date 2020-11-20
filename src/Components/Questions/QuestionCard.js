import React from 'react'


const QuestionCard = (props) => {


    return (
        <div>
            {props.questionRes.map(question =>
                console.log('question card', question)
                )}
        </div>
    )
}

export default QuestionCard
