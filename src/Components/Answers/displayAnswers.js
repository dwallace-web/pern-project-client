import React from 'react'
import { } from 'reactstrap'

export default function displayAnswers(props) {



    return (
        <div>
            {
                props.answerResponses.map(answer => {
                    return (
                        <div className="answerbox">
                            <h5 className="user-answer">{answer.title}</h5>
                            <p className="user-answer">{answer.entry}</p>
                        </div>
                    )
                }
                )
            }
        </div>
    )
}
