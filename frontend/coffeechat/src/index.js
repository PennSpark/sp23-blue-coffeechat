import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,
        Routes,
        Route
} from "react-router-dom"
import Profile from "./routes/profile";
import Login from "./routes/login"
import Signup from "./routes/signup"
import Header from './routes/header';
import MakeProfile from './routes/makeprofile';
import Match from './routes/match';
import StartMatch from './routes/startmatch';
import PageNotFound from './routes/pagenotfound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/makeprofile" element={<MakeProfile />}/>
        <Route path="/startmatch" element={<StartMatch />}/>
        <Route path="/match" element={<Match />}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
