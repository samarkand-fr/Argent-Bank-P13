import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie'; 
// API calls
import { getToken } from '../Redux/services/API';
import styled from 'styled-components';
import LogInForm from '../components/LogInForm';
import SignInButton from '../components/SignInButton';

/**
 * Sign-in component for user authentication.
 */
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [invalidFields, setInvalidFields] = useState('');

  const dispatch = useDispatch();
  const message = useSelector((state) => state.getUser.user.status);
  const tokenExist = useSelector((state) => state.token.tokenExist);

  const [cookies, setCookie, removeCookie] = useCookies(); // Initialize cookies
 // Redux selector for the token value
 const tokenValue = useSelector((state) => state.token.token);
 useEffect(() => {
  if (tokenValue) {
    console.log('Token Value:', tokenValue);
  }
}, [tokenValue]);

/**
   * Load the stored email and password from cookies when the component mounts.
   */
  useEffect(() => {
    // Load the stored email and password from cookies
    const storedEmail = cookies.rememberedEmail;
    const storedPassword = cookies.rememberedPassword;
    if (storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
      setRememberMe(true);
    }
  }, [cookies]);

    /**
   * Handle the form submission when the user clicks the Sign In button.
   * @param {Object} event - The form submission event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    setInvalidFields('');

    if (!email || !password)  {
      return setInvalidFields('Please fill in all fields ');
    } else {
      if (rememberMe) {
        // If Remember Me is checked, store the email and password in cookies
        setCookie('rememberedEmail', email, { maxAge: 7 * 24 * 60 * 60 }); // Expires in 7 days
        setCookie('rememberedPassword', password, { maxAge: 7 * 24 * 60 * 60 });
      } else {
        // If Remember Me is not checked, remove the stored email and password from cookies
        removeCookie('rememberedEmail');
        removeCookie('rememberedPassword');
      }
      dispatch(getToken(email, password));
    }
  };

  /**
   * If the user is authenticated, redirect to the user page.
   */
  if (message === 200) {
    return <Navigate to="/user" />;
  }

  return (
    <>
      <AppContainer>
        <SignInMain>
          <SignInSection>
            <SignInButton layout="column" />
            <form onSubmit={handleSubmit}>
              <LogInForm
                direction={'column'}
                forAndId={'email'}
                inputType={'text'}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <LogInForm
                direction={'column'}
                forAndId={'password'}
                inputType={'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <LogInForm
                direction={'row-reverse'}
                forAndId={'remember-me'}
                inputType={'checkbox'}
                checked={rememberMe}
                onChange={(e) => {
                  setRememberMe(e.target.checked);
                }}
              />
              <ErrorMessage>{invalidFields}</ErrorMessage>
              {tokenExist === false && <ErrorMessage>Email or password invalid</ErrorMessage>}
              <InputButton type="submit" value="Sign In" />
            </form>
          </SignInSection>
        </SignInMain>
      </AppContainer>
    </>
  );
};

export default SignIn;

// Styled components 
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Set the container to fill the full viewport height */
`
const SignInMain = styled.main`
  background-color: #12002b;
  color: #2c3e50;
  flex: 1; /* Allow the main content to take the remaining space */
  display: flex;
  justify-content: center;
  align-items: center;
`
const SignInSection = styled.section`
  box-sizing: border-box;
  background-color: white;
  width: 18.75rem;
  margin: 3rem auto;
  padding: 2rem;
  border-radius: 0.35rem;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 10rem; /*  move the form up */
`


const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
`
const InputButton = styled.input`
display: flex;
justify-content: center;
width: 100%;
padding: 0.5rem 1.5rem;
margin-top: 1rem;
font-size: 1.1rem;
font-weight: bold;
border-color: #42b983;
background-color: #42b983;
color: white;
text-align: center;
cursor: pointer;
border-radius: 0.35rem;
&:hover {
    border-color: #2c3e50;
    background-color: #2c3e50;
    color: white;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
  }
  `
