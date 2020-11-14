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
    await localStorage.setItem('token', newToken);
    await setSessionToken(newToken);
    
    console.log('view token', localStorage.token)
    console.log('Session Token ---> ', sessionToken);
  }

  async function clearToken() {
    await setSessionToken('');
    localStorage.clear();
    console.log('cleared Session Token ---> ', sessionToken,);
  }

  const protectedViews = (props) => {

    return (sessionToken === localStorage.getItem('token') ? <Main token={sessionToken} /> : null )

  }
  
  return (

    <div className="Container">
      <Router>
        <Menu clickLogout={clearToken} token={sessionToken} reviseToken={reviseToken} />
      </Router>

      {protectedViews()}

    </div>

  );
}

export default App;
