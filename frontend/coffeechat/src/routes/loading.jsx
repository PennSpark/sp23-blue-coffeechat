import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { Link, redirect, useNavigate} from 'react-router-dom';
import Header from './header';
import './styles/generic.css'

function Loading() {
    return(
        <>
        <img src="/images/Logo-OffCenter.svg" alt="Logo" className="logo-loading" />
        </>
    );
}

export default Loading;