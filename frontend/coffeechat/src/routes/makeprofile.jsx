import React, { useState } from 'react';
import axios from 'axios';
import { Link, redirect, useNavigate} from 'react-router-dom';
import Header from './header';
import './styles/makeprofile.css'

function MakeProfile() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bio, setBio] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      try {
        const response = await axios.post('http://localhost:8000/api/makeprofile/', { firstName, lastName });
        // const acctStatus = response.data.acctStatus;
        // if (acctStatus == "success") {
        //     navigate("/profile")
        // } else if (acctStatus == "InvalidEmail") {
        //     navigate("/signup?error=InvalidEmail")
        // } else if (acctStatus == "InvalidPassword") {
        //     navigate("/signup?error=InvalidPassword")
        // } else {
        //     navigate("/signup?error=SignupError")
        // }
        
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
            {/* This is the maeke profile page. */}
            <body>
              <Header />
              <form className="makeprofile-form" onSubmit={handleSubmit}>
                <div className="makeprofile-form-container">
                    <h1 className="makeprofile-title">create your profile</h1>
                    <input
                        name="firstname"
                        type="text"
                        placeholder="First Name"
                        value={lastName}
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                    <input
                        name="lastname"
                        type="text"
                        placeholder="Last Name"
                        value={firstName}
                        onChange={(event) => setLastName(event.target.value)}
                    />
                    <button type="submit" className="submit-button">
                        create profile
                    </button>
                </div>
              </form>
            </body>
          </div>
        </>
      );
    
}



export default MakeProfile;