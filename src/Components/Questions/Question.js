import React, {useState} from 'react';
import { } from 'reactstrap';
import CreateQuestion from './CreateQuestion';
import ViewQuestion from './ViewQuestion';

const Question = (props) => {
    // console.log(props.token)


    return (
        <div>
            <h2>Question</h2>
            <p>We need logic that will 1. show the question or 2. Create the Question</p>

            <CreateQuestion  token={props.token}  />

            <ViewQuestion  token={props.token} />
            
        </div>
    )
}

export default Question;