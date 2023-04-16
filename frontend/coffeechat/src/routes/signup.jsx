import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, redirect, useNavigate } from 'react-router-dom';
import Header from './header';
import Loading from './loading';
/*import './styles/signup.css' */
import './styles/generic.css'

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);

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
      try {
        const response = await axios.post('http://localhost:8000/api/signup/', { email, password }, {withCredentials: true});
        const acctStatus = response.data.acctStatus;
        if (acctStatus == "success") {
            navigate("/makeprofile")
        } else if (acctStatus == "InvalidEmail") {
            navigate("/signup?error=InvalidEmail")
        } else if (acctStatus == "InvalidPassword") {
            navigate("/signup?error=InvalidPassword")
        } else {
            navigate("/signup?error=SignupError")
        }
        
      } 
      catch (error) {
        console.error(error.response.data);
      }
    };
    
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
                  <div className="coffeechat">
                    CoffeeChat
                  </div>
                  <img src="/images/image 2.png" alt="alt logo"/>
                </div>
                <div className="text-container">
                <h1 className="title">sign up</h1>
                <form className="form" onSubmit={handleSubmit}>
                  <input
                    name="email"
                    type="text"
                    placeholder="Enter Penn Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
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
                <Link to="/login">
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