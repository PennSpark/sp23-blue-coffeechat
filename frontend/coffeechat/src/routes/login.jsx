import {Link} from "react-router-dom"
import './styles/login.css'
import Header from "./header"

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
                <h1>Login to Coffeechat</h1>
                <Link to="/signup">Don't have an account yet? Sign up here.</Link>
            </div>
            </body>
        </div>
        </>
    );
}

export default Login;