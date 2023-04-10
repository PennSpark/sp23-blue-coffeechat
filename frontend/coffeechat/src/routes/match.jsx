import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { Link, redirect, useNavigate} from 'react-router-dom';
import Header from './header';
import Loading from './loading';
import './styles/match.css'

function Match() {
    const isMatched = false;
    
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);

    const authRedirect = async () => {
        try {
        const response = await axios.get('http://localhost:8000/api/checkauth/', { withCredentials: true});
        if (!response.data.isAuth) {
            navigate("/login")
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
                <div>
                    <p>Your friendship is brewing...</p>
                    <p>We'll let you know when it's ready!</p>
                </div>
                <div>
                    <p className='body-text'>Want to make changes to your profile? <Link to="/makeprofile">Update it here</Link></p>
                </div>
            </body>
            </>
            
        );
    }
};

export default Match;