import React, {useState} from 'react';
import { } from 'reactstrap';
import CreateQuestion from './CreateQuestion';
import ViewQuestion from './ViewQuestion';

const Question = (props) => {
    return (
        <div>
            <h2>Question</h2>
            <p>We need logic that will 1. show the question or 2. Create the Question</p>

            

            <ViewQuestion />
            <CreateQuestion />
        </div>
    )
}

export default Question;