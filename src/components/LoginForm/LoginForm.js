import { useState } from 'react';
import styled from 'styled-components';

const LoginForm = ({ handleLogin, errorMessage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailUpdate = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordUpdate = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <h2>Login</h2>
      <StyledForm onSubmit={(e) => handleLogin(e, email, password)}>
        <FormLabel>
          Email:{' '}
          <input
            type="text"
            aria-label="input-email"
            value={email}
            onChange={handleEmailUpdate}
          />
        </FormLabel>
        <FormLabel>
          Password:{' '}
          <input
            type="password"
            aria-label="input-password"
            value={password}
            onChange={handlePasswordUpdate}
          />
        </FormLabel>
        <LoginButton type="submit" aria-label="input-login" value="Log in" />
      </StyledForm>
      {errorMessage && (
        <ErrorMessage aria-label="error-message">{errorMessage}</ErrorMessage>
      )}
    </>
  );
};

const StyledForm = styled.form`
  padding: 15px;
  text-align: left;
`;

const FormLabel = styled.label`
  display: block;
`;

const LoginButton = styled.input`
  width: 100px;
  height: 30px;
  background-color: #136f63;
  color: #fcfcfc;
  font-weight: bold;
  cursor: pointer;
  border: none;
  border-radius: 3px;
`;

const ErrorMessage = styled.p`
  color: red;
`;

export default LoginForm;
