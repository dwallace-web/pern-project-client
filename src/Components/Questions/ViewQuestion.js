import React, { useState, EFf, useEffect } from 'react';
import { } from 'reactstrap';

const ViewQuestion = (props) => {
    console.log('VIEWING QUESTIONS', props)
    // fetch to display questions 
    //.map statement to show the question fetched from the object. possible pagiation ?

    // console.log('question token -->', props.token)

    // const [submittedQuestion, setSubmittedQuestion] = useState(false);
    
    useEffect(() => {

        const fetchQuestions = (e) => {
            // e.preventDefault();
    
            fetch("http://localhost:5000/question/", {
                method: 'GET',
                headers: new Headers({
                    // 'Content-Type': 'application/json',
                    'Authorization': props.token
                })
            })
                .then(response => response.json())
                .then(result => {
                    console.log('view questions---->', result)

                })
                .catch(error => console.log('error', error));
        }
    
        fetchQuestions();

    }, [])
   

    return (
        <div>
            <h3>View Questions</h3>
        </div>
    )
}

export default ViewQuestion;