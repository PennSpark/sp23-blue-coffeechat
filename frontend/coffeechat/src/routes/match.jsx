import React, { useRef, useState } from 'react';
import axios from 'axios';
import { Link, redirect, useNavigate} from 'react-router-dom';
import Header from './header';
import './styles/makeprofile.css'

function Match() {
    return(
        <>  
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Work+Sans:wght@500&display=swap" rel="stylesheet"/>
        </head>
        <body>
            <Header/>
            
            
        </body>
        </>
    );
};

export default Match;