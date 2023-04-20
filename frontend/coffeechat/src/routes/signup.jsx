import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, redirect, useNavigate } from 'react-router-dom';
import Header from './header';
import Loading from './loading';
// import './styles/signup.css'
import './styles/generic.css'

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [userExistsError, setUserExistsError] = useState(false);
    const [signupError, setSignupError] = useState(false);

    const authRedirect = async () => {
        try {
        const response = await axios.get('http://localhost:8000/api/checkauth/', { withCredentials: true});
        if (response.data.isAuth) {
            navigate("/startmatch")
        }
        } catch (error) {
        console.error(error);
        }
        setIsLoading(false);
    };

    authRedirect();

    if (isLoading) {
        return(<Loading/>);
    }
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      setEmailError(false);
      setPasswordError(false);
      setSignupError(false);
      try {
        const response = await axios.post('http://localhost:8000/api/signup/', { email, password }, {withCredentials: true});
        const acctStatus = response.data.acctStatus;
        if (acctStatus == "success") {
            navigate("/makeprofile")
        } else if (acctStatus == "InvalidEmail") {
            setEmailError(true);
            navigate("/signup?error=InvalidEmail")
        } else if (acctStatus == "InvalidPassword") {
            setPasswordError(true);
            navigate("/signup?error=InvalidPassword")
        } else if (acctStatus === "UserExists") {
            setUserExistsError(true);
            navigate("/signup?error=UserExists")
        } else {
            setSignupError(true);
            navigate("/signup?error=SignupError")
        }
        
      } 
      catch (error) {
        console.error(error.response.data);
      }
    };

    const handleCoffeechat = async (event) => {
      event.preventDefault();
      navigate("/")
  }
    
    return (
        <>
          <div>
            <head>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
              <link
                href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Work+Sans:wght@500&display=swap"
                rel="stylesheet"
              />
            </head>
            {/* This is the signup page. */}
            <body>
              <div className="container">
                <div className="logo">
                  <div className="coffeechat" onClick={handleCoffeechat}>
                    coffeechat
                  </div>
                  <img src="/images/Logo.svg" alt="alt logo"/>
                </div>
                <div className="text-container">
                <h1 className="title">sign up</h1>
                <form className="form" onSubmit={handleSubmit}>
                  {signupError && <div className="error">An error occurred. Please try again.</div>}
                  {userExistsError && <div className="error">User already exists. Please <Link to="/login">log in.</Link></div>}
                  {emailError && <div className="error">Invalid email. Please enter a valid Penn email.</div>}
                  <input
                    name="email"
                    type="text"
                    placeholder="Enter Penn Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  {passwordError && <div className="error">Invalid password. Please enter a password with at least 8 characters.</div>}
                  <input
                    name="password"
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <button type="submit" className="button">
                    sign up
                  </button>
                </form>
                <div className="login-text">
                <Link to="/login" className='link'>
                Already have an account? Log in here.
                 </Link>
                 </div>
                </div>
              </div>
            </body>
          </div>
        </>
      );
    
}



export default Signup;