import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import API_URL from '../../env';


const DeleteQuestion = (props) => {
    console.log('delete question token -->', props.token)

    // const [deletedQuestion, setDeletedQuestion] = useState(false);



    const submitDeleteQuestion = (e) => {
        e.preventDefault();
        console.log(props);
        console.log('delete question ran', props.questionid)
        fetch(`${API_URL}/question/delete/${props.questionid}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })

        })
            .then(response => {
                
                
                response.json()
            window.location.reload(false)
            }
            
            );

        // .catch(error => console.log('error', error))


        
    }
    return (

           
        <Button onClick={submitDeleteQuestion}>Delete Question</Button>


)



}
export default DeleteQuestion