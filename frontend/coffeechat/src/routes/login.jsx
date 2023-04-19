import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, redirect, useNavigate} from 'react-router-dom';
import Loading from './loading';
/*import './styles/login.css' */
import './styles/generic.css'
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);

    const [error, setError] = useState(false);

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
        setError(false);
        const response = await axios.post('http://localhost:8000/api/login/', { email, password }, {withCredentials: true});
        const success = response.data.success;
        const isProfileComplete = response.data.isProfileComplete;
        if (success == "True" && isProfileComplete == "True") {
          navigate("/startmatch/")
        } else if (success === "True" && isProfileComplete === "False") {
          navigate("/makeprofile/")
        } else {
          setError(true);
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
            <div className="container">
            <div className="logo">
                  <div className="coffeechat">
                    coffeechat
                  </div>
                  <img src="/images/Logo.svg" alt="alt logo"/>
                </div>
              <div className="text-container">
              <h1 className="title">log in</h1>
              <form className="form" onSubmit={handleSubmit}>
                {error && <p className="error">Invalid email or password. Please try again. If you don't have an account, sign up <Link to="/signup">here.</Link></p>}
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
                  log in
                </button>
              </form>
              <Link to="/signup" className='link'>Don't have an account yet? Sign up here.</Link>
              </div>
            </div>
          </body>
        </div>
      </>
    );
  }
  
  export default Login;
  