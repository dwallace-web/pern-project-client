import React, { useState } from 'react';
import { } from 'reactstrap';
import Question from '../Questions/Question';
import Answer from '../Answers/Answer';


const Main = (props) => {
    return (
        <div>
            <p>Main</p>
            
            <Question token={props.token}  />
            <Answer />
        </div>
    )
}

export default Main;