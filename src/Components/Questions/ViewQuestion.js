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
<<<<<<< HEAD
            <h3>View Questions</h3>
<<<<<<< HEAD
=======
            <h3>ViewQuestion</h3>

            function displayMine() {
    const acessToken = localStorage.getItem('SessionToken')
    fetch('http://localhost:8080/journal/mine', {
    method: 'Get',
headers: new Headers({
    'Content-Type': 'application/json',
    'Authorization': acessToken
  })
})
    .then(
        function (response) {
            return response.json()
        })
            .catch(
                function (error) {
                    console.error('Error:', error)
                })

                
                .then(function (response) [
                    console.log(response)
                    let display = document.getElementById('journals')
                    for (i = 0; i = display.childNodes.length; i++) {
                        display.removeChild(display.firstChild)
                    }

                    if (response.length === 0) {

                        let display = document.getElementById('journals')
                        let header = document.createElement('h5')

                        display.appendChild(header)
                        header.textContent = "You havn't made any posts yet!"
                        header.setAttribute('class', "noPosts")
                    } else {

                    for  (i = 0; i < response.length; i++) {


                        let display = document.getElementById('journals')
                        let card = document.createElement('div')
                        let body = document.createElement('div')
                        let header = document.createElement('h5')
                        let subtitle = document.createElement('h6')
                        let para document.createElement('p')
                        let editBtn = document.createElement('button')
                        let deleteBtn = document.createElement('button')

                        let current = response[i]
                        let title = current.title;
                        let date = current.date;
                        let entry = current.entry;
                    }

                    display.appendChild(card)
                    card.appendChild(body)
                    body.appendChild(header)
                    body.appendChild(subtitle)
                    body.appendChild(para)
                    body.appendChild(editBtn)
                    body.appendChild(deleteBtn)

                    card.setAttribute('id', current.id)
                    card.setAttribute('class', 'card')
                    body.setAttribute('class', 'card-body')
                    header.setAttribute('class', 'card-title')
                    subtitle.setAttribute('class', 'card-subtitle mb-2 texr-muted')
                    para.setAttribute('class', 'card-text')

                    editBtn.setAttribute('class', 'btn btn-dark editBtn')
                    editBtn.setAttribute('type', 'button')
                    editBtn.setAttribute('onclick', `editJournal(${current.id})`)

                    deleteBtn.setAttribute('class', 'btn btn-dark deleteBtn')
                    deleteBtn.setAttribute('type', 'button')
                    deleteBtn.setAttribute('onclick', `deleteJournal(${current.id})`)

                    header.textContent = title
                    subtitle.textContent = date
                    para.textContent = entry
                    editBtn.textContent = 'Edit'
                    deleteBtn.textContent = 'Delete'
                    }
                ]
        
>>>>>>> nathan
=======

            <QuestionCard questionRes={questionRes} />
            

            {/* <Answer token={props.token} /> */}
>>>>>>> ce03199d466d001d174d73241ca61499ca1c2000
        </div>
    )
}

export default ViewQuestion;