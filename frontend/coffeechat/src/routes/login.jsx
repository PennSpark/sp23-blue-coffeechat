import {Link} from "react-router-dom"
import './styles/login.css'
import Header from "./header"
import CSRFToken from "./csrftoken"

function Login() {
    return(
        // This is the login page.
        <>
        <div>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Work+Sans:wght@500&display=swap" rel="stylesheet"/>
            </head>
            {/* This is the welcome page. */}
            <body>
            <Header/>
            <div className="login-container">
                <h1 className="login-title">login</h1> 
                <form method="POST" action="http://localhost:8000/login/" className="login-form">
                    <input name="email" type="text" placeholder="Enter Penn Email"/>
                    <input name="password" type="password" placeholder="Enter Password"/>
                    <button type="submit" className="login-button">log in</button>
                </form>
                <Link to="/signup">Don't have an account yet? Sign up here.</Link>
            </div>
            </body>
        </div>
        </>
    );
}

export default Login;