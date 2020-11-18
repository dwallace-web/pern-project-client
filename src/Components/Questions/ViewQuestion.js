import React, {useState} from 'react';
import { } from 'reactstrap';

const ViewQuestion = (props) => {

    // fetch to display questions 
    //.map statement to show the question fetched from the object. possible pagiation ?

    // console.log('question token -->', props.token)

    // const [submittedQuestion, setSubmittedQuestion] = useState(false);

    const viewQuestion = (e) => {
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
                // setSubmittedQuestion(true);
            })
            .catch(error => console.log('error', error));
    }

    return (
        <div>
            <h3>View Questions</h3>
            {viewQuestion()}
        </div>
    )
}

export default ViewQuestion;