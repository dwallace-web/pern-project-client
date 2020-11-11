import React, {useState} from 'react';
import { } from 'reactstrap';
import CreateAnswer from './CreateAnswer';
import ViewAnswer from './ViewAnswer';

const Answer = (props) => {
    return (
        <div>
            <h2>Answer </h2>
            <p>We need logic that will 1. show the answers or 2. Create an answer</p>
            
            <CreateAnswer />
            <ViewAnswer />
            <LikesCounter/>
        </div>
    )
}

export default Answer;