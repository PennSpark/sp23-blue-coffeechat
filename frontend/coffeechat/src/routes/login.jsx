import React, { useState } from 'react';
import axios from 'axios';
import { Link, redirect, useNavigate} from 'react-router-dom';
import Header from './header';
import './styles/login.css'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      try {
        const response = await axios.post('http://localhost:8000/api/login/', { email, password });
        const success = response.data.success;
        if (success == "True") {
          navigate("/profile")
        } else {
          navigate("/login?error=LoginError")
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
          {/* This is the login page. */}
          <body>
            <Header />
            <div className="login-container">
              <h1 className="login-title">log in</h1>
              <form className="login-form" onSubmit={handleSubmit}>
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
                <button type="submit" className="login-button">
                  log in
                </button>
              </form>
              <Link to="/signup">Don't have an account yet? Sign up here.</Link>
            </div>
          </body>
        </div>
      </>
    );
  }
  
  export default Login;
  