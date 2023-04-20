import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { Link, redirect, useNavigate} from 'react-router-dom';
import Header from './header';
import Loading from './loading';
import './styles/generic.css'

function Match() {    
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

    const [isMatched, setIsMatched] = useState(false);

    const checkIsMatched = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/checkmatch/', { withCredentials: true});
            if (response.data.isMatched) {
                setIsMatched(true);
            }
        } catch (error) {
            console.error(error);
        }
    };

    checkIsMatched();

    const [ready, setReady] = useState(false);
    const [partnerFirstName, setPartnerFirstName] = useState('');
    const [partnerLastName, setPartnerLastName] = useState('');
    const [partnerEmail, setPartnerEmail] = useState('');
    const [partnerSchool, setPartnerSchool] = useState('');
    const [partnerYear, setPartnerYear] = useState('');
    const [partnerInsta, setPartnerInsta] = useState('');
    const [partnerBio, setPartnerBio] = useState('');
    const [partnerImageLink, setPartnerImageLink] = useState('');
    const [isInstaBlank, setIsInstaBlank] = useState(false);

    const decodeSchool = (school) => {
        var fullName = '';
        if (school === "CAS") {
            fullName = "College of Arts and Sciences";
        } else if (school === "SEAS") {
            fullName = "School of Engineering and Applied Science";
        } else if (school === "WH") {
            fullName = "Wharton School of Business";
        } else if (school === "NURS") {
            fullName = "School of Nursing";
        } else if (school === "COMM") {
            fullName = "Annenberg School for Communication";
        } else if (school === "DENT") {
            fullName = "School of Dental Medicine";
        } else if (school === "DSGN") {
            fullName = "Weitzman School of Design";
        } else if (school === "EDU") {
            fullName = "Graduate School of Education";
        } else if (school === "LAW") {
            fullName = "Carey Law School";
        } else if (school === "MED") {
            fullName = "Perelman School of Medicine";
        } else if (school === "SOPOC") {
            fullName = "School of Social Policy and Practice";
        } else if (school === "VET") {
            fullName = "School of Veterinary Medicine";
        } 
        setPartnerSchool(fullName);
    }

    const decodeYear = (year) => {
        var schoolYear = '';
        if (year === "FR") {
            schoolYear = "Freshman";
        } else if (year === "SO") {
            schoolYear = "Sophomore";
        } else if (year === "JR") {
            schoolYear = "Jun   ior";
        } else if (year === "SR") {
            schoolYear = "Senior";
        } else if (year === "GR") {
            schoolYear = "Graduate Student";
        }
        setPartnerYear(schoolYear);
    }

    const decodeInsta = (insta) => {
        if (insta === "") {
            setIsInstaBlank(true);
        } else {
            setPartnerInsta("https://www." + insta)
        }
    }


    const activateMatch = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/getprofile/', {withCredentials: true});
            const data = response.data;  
            if (data.Success) {
                setPartnerFirstName(data.FirstName);
                setPartnerLastName(data.LastName);
                setPartnerEmail(data.Email);
                decodeSchool(data.School);
                decodeYear(data.Year);
                decodeInsta(data.Instagram);
                setPartnerBio(data.Bio);
                setPartnerImageLink(data.ImageLink);
                setReady(true);
            }       
        } catch (error) {
            console.error(error);
        }
    };

    if (isLoading) {
        return(<Loading/>);
    }


    if (isMatched && !ready) {
        return(
            <>  
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Work+Sans:wght@500&display=swap" rel="stylesheet"/>
            </head>
            <body>
                <Header/>
                <div className='match-before-content'>
                    <h1 className='heading-text'>Your match is ready!</h1>
                    <h1 className='heading-text'>Are you?</h1>
                    <button onClick={() => activateMatch()}>Show Me!</button>
                </div>
            </body>
            </>
        );
    } else if (isMatched && ready) {
        return(
            <>  
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Work+Sans:wght@500&display=swap" rel="stylesheet"/>
            </head>
            <body>
                <Header/>
                <div className='full-profile'>
                    <div className='match-after-content'>
                        <h1 className='heading-text-match'>Your match is...</h1>
                        <div className='profile-content'>
                            <p>{ partnerFirstName } { partnerLastName }</p>
                            <p>{ partnerEmail }</p>
                            <p>{ partnerYear }</p>
                            <p>{ partnerSchool }</p>
                            {isInstaBlank ? <></> : <Link to={ partnerInsta }>{ partnerInsta }</Link>}
                            <p>{ partnerBio }</p>
                        </div>
                    </div>
                    <img className="profile-image" src={ partnerImageLink }/>
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
                <div className='match-before-content'>
                    <div className='headers'>
                        <h1 className='heading-text'>Your friendship is brewing...</h1>
                        <h1 className='heading-text'>We'll let you know when it's ready!</h1>
                    </div>
                    <p className='body-text'>Want to make changes to your profile? <Link to="/makeprofile">Update it here</Link></p>
                    <Loading/>
                </div>
            </body>
            </>
            
        );
    }
};

export default Match;