import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { Link, redirect, useNavigate} from 'react-router-dom';
import Header from './header';
import Loading from './loading';
import './styles/startmatch.css'

function StartMatch() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);

    const authRedirect = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/checkauth/', { withCredentials: true});
            if (!response.data.isAuth) {
                navigate("/login")
            }
            const matchResponse = await axios.get('http://localhost:8000/api/checkmatchstarted/', { withCredentials: true});
            if (matchResponse.data.isMatchStarted) {
                console.log("here")
                navigate("/match");
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


    const handleMatchStarted = async (event) => {
        event.preventDefault();
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        try {
            const response = await axios.post('http://localhost:8000/api/startmatch/', {}, {withCredentials: true});
            const success = response.data.success;  
            if (success === "True") {
                navigate("/match");
            }          
        } 
        catch (error) {
            console.error(error.response.data);
        };
    }

    return(
        <>  
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Work+Sans:wght@500&display=swap" rel="stylesheet"/>
            </head>
            <body>
                <Header/>
                <div className='startmatch-content'>
                    <div className='headers'>
                        <p className='heading-text'>Are you ready to meet a new friend?</p>
                        <p className='heading-text'>Press below, and we'll randomly match you with another Penn student.</p>
                        <p className='heading-text'>The possibilities are endless!</p>
                    </div>
                    <button className='submit-button' onClick={handleMatchStarted}>Start Brewing a New Friendship</button>
                    <p className='body-text'>Want to make changes to your profile? <Link to="/makeprofile">Update it here</Link></p>
                </div>
            </body>
            </>
    );
}

export default StartMatch;