import React, { useState, EFf, useEffect } from 'react';
import Answer from '../Answers/Answer'  ; 
import { } from 'reactstrap';
import QuestionCard from './QuestionCard';

const ViewQuestion = (props) => {
    console.log('VIEWING QUESTIONS ')
    // fetch to display questions 
    //.map statement to show the question fetched from the object. possible pagiation ?

    // console.log('question token -->', props.token)

    // const [submittedQuestion, setSubmittedQuestion] = useState(false);

    const [ questionRes, setQuestionRes ] = useState( [ ] );



    useEffect(() => {

        const fetchQuestions = (e) => {
            // e.preventDefault();
    
            fetch("http://localhost:5000/question/", {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': props.token
                })
            })
                .then(response => response.json())
                .then(result => {

                    setQuestionRes(result);

                    console.log('set question res -->'. questionRes);

                    console.log('view questions---->', result)

                    
                    
                })
                .catch(error => console.log('error', error));
        }
    
        fetchQuestions();


    }, [])
   

    return (
        <div>
            <h3>View Questions</h3>

            <QuestionCard questionRes={questionRes} />
            

            {/* <Answer token={props.token} /> */}
        </div>
    )
}

export default ViewQuestion;