import './styles/header.css'
import { NavLink } from "react-router-dom";

function Header() {
    return(
        // This is the header page.
        <>
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Work+Sans:wght@500&display=swap" rel="stylesheet"/>
        </head>
        <header>
            <NavLink style={{ textDecoration: "none" }} to="/">
                <p className='brand-name'>coffeechat</p>
            </NavLink>
        </header>
        </>
    );
}

export default Header;