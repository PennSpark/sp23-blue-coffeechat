import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { Link, redirect, useNavigate} from 'react-router-dom';
import Header from './header';
import './styles/makeprofile.css'

function Match() {
    const isMatched = false;

    const handleMatchStarted = async (event) => {
        event.preventDefault();
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        try {
            const response = await axios.post('http://localhost:8000/api/startmatch/', {}, {withCredentials: true});
            const success = response.data.success;            
        } 
        catch (error) {
            console.error(error.response.data);
        };
    }

    const [isMatchStarted, setIsMatchStarted] = useState(false);

    useEffect(() => {
        const fetchIsMatchStarted = async () => {
          try {
            const response = await axios.get('http://localhost:8000/api/checkstartmatch/');
            setIsMatchStarted(response.data.isMatchStarted);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchIsMatchStarted();
      }, [handleMatchStarted]);


    if (isMatched) {
        return(
            <>  
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Work+Sans:wght@500&display=swap" rel="stylesheet"/>
            </head>
            <body>
                <Header/>
                <div>
                    {/* Page if matched */}
                </div>
            </body>
            </>
        );
    } else {
        return(
            <>  
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Work+Sans:wght@500&display=swap" rel="stylesheet"/>
            </head>
            <body>
                <Header/>
                {isMatchStarted ? 
                <div>
                    <p>Your friendship is brewing...</p>
                    <p>We'll let you know when it's ready!</p>
                </div>

                :

                <div>
                    <p className='heading-text'>Are you ready to find a new friend?</p>
                    <p className='heading-text'>Press below and we'll randomly match you with another Penn student! The possibilities are endless.</p>
                    <button className='submit-button' onClick={handleMatchStarted}>Start Brewing a New Friendship</button>
                </div>

                }
            </body>
            </>
            
        );
    }
};

export default Match;