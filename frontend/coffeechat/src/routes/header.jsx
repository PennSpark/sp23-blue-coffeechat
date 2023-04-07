import './styles/header.css'
import { NavLink } from "react-router-dom";
import { Link, redirect, useNavigate} from 'react-router-dom';
import axios from 'axios';

function Header() {
    const navigate = useNavigate();

    const handleCoffeechat = async (event) => {
        event.preventDefault();
        navigate("/")
    }

    const handleLogOut = async (event) => {
        event.preventDefault();
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        try {
          const response = await axios.post('http://localhost:8000/api/logout/', {withCredentials: true});
          const success = response.data.logout;
          if (success === "True") {
            navigate("/login")
          }
          
        } 
        catch (error) {
          console.error(error.response.data);
        }
      };
    return(
        // This is the header page.
        <>  
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Work+Sans:wght@500&display=swap" rel="stylesheet"/>
        </head>
        <header>
            <p className='header-text' onClick={handleCoffeechat}>coffeechat</p>           
            <p className='header-text' onClick={handleLogOut}><span>log out</span></p>
            
        </header>
        </>
    );
}

export default Header;