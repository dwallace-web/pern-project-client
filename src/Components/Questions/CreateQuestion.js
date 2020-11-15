import React, {useState} from 'react';
import { } from 'reactstrap';

const CreateQuestion = (props) => {
    return (
        <div>
            <h3>CreateQuestion</h3>

        Function postJournal() {
            let title = document.getElementByID('title').value
            let date = document.getElementByID('date').value
            let entry = document.getElementByID('entry').value
            const acessToken = localStorage.getItem('sessionToken')
            let newEntry = { journal: { title: title, date: date, entry;} }

        fetch('http://localhost:8080/journal/create', {
            method: 'POST',
            headers: new Headers({
                'content-type': 'application/json',
                'Authorization': acessToken
:            }),
                body: JSON.stringify(newEntry)
        })    
          .then(response => {
              console.log(response.json())
              displayMine()
          }) 
          .catch((err)) => {
              console.log(err)
          } 

        }


        </div>
    )
}


                
                





export default CreateQuestion;