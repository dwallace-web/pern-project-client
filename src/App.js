import './App.css';
import { React, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './Components/Menu/Menu.js';
import SignUp from './Components/Menu/SignUp';
import Main from './Components/Body/Main';

function App() {

  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'))
    }
  }, [])

  async function reviseToken(newToken) {
    
    setSessionToken(newToken);

    console.log('View setSessionToken ---> ', newToken);
    console.log('View sessionToken ---> ', newToken);

    localStorage.setItem('token', newToken); 

    console.log('View token ---->', localStorage.token)
    
  }

  async function clearToken() {
    console.log('cleared Session Token ---> ', sessionToken);

    await setSessionToken('');
    localStorage.clear();
    
    console.log('Confirm token is cleared ---->', localStorage.token)
  }

  const protectedViews = (props) => {

    return (sessionToken === localStorage.getItem('token') ? <Main token={sessionToken} /> : <p id="tokenissue">Sign Up or Sign In to View</p>)

  }
  
  return (

    <div className="Container">
      <Menu />
        <Main />
      <Footer />


      
    </div>

  );
}

export default App;
