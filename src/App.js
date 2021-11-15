import { useState } from 'react';
import styled from 'styled-components';

import { login, notify } from './utils';

import DeviceList from './components/DeviceList';
import LoginForm from './components/LoginForm';

import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(
    !!localStorage.getItem('mcxAuthToken')
  );
  const [loginError, setLoginError] = useState(null);

  const handleLogin = async (e, email, password) => {
    e.preventDefault();

    try {
      const res = await login(email, password);

      localStorage.setItem('mcxAuthToken', res.data);
      setLoggedIn(true);
    } catch (error) {
      setLoginError(error.response.data);
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();

    localStorage.removeItem('mcxAuthToken');
    setLoggedIn(false);
  };

  const handleNotify = async (e) => {
    e.preventDefault();

    await notify(localStorage.getItem('mcxAuthToken'));
  };

  return (
    <div className="App">
      <header className="App-header">
        {loggedIn ? (
          <>
            <ButtonGroup>
              <LogoutButton onClick={handleLogout}>Log out</LogoutButton>
              <NotifyButton onClick={handleNotify}>Notify</NotifyButton>
            </ButtonGroup>
            <DeviceList pollDelay={5000} />
          </>
        ) : (
          <LoginForm handleLogin={handleLogin} errorMessage={loginError} />
        )}
      </header>
    </div>
  );
}

const ButtonGroup = styled.div`
  position: absolute;
  top: 25px;
  left: 25px;
`;

const LogoutButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #d00000;
  color: #fcfcfc;
  font-weight: bold;
  cursor: pointer;
  border: none;
  border-radius: 3px;
`;

const NotifyButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #032b43;
  color: #fcfcfc;
  font-weight: bold;
  cursor: pointer;
  border: none;
  border-radius: 3px;
`;

export default App;
