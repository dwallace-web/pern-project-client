// import React, { useState, useEffect } from 'react';
// import { } from 'reactstrap';


// const EditQuestion = (props) => {
//     console.log('question token -->', props.token)

//     const [questionTitle, setQuestionTitle] = useState('');
//     const [questionCategory, setQuestionCategory] = useState('');
//     const [questionEntry, setQuestionEntry] = useState('');
//     const [edittedQuestion, setEdittedQuestion] = useState(false);


// const editQuestion = (e) => {
//     e.preventDefault();

//     fetch("http://localhost:8080/update/:entryId", {
//         method: 'PUT',
//         heeaders: new Headers({
//             'Content-Type': 'application/json',
//             'Authorization': props.token
//         }),
//         body: JSON.stringify({
//             "question": {
//                 "title": questionTitle,
//                 "category": questionCategory,
//                 "entry": questionEntry,
//             }
//         })
//     })
//     .then(response => response.json())
//     .then(result => {
//         console.log(result)
//         setEdittedQuestion(true);
//     })
//     .catch(error => console.log('error', error));


// }

























}