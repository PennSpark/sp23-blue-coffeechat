import {Link} from "react-router-dom"
import './styles/login.css'
import Header from "./header"

function Login() {
    return(
        // This is the login page.
        <>
        <Header/>
        <body>
            <h1>Login to Coffeechat</h1>
            <Link to="/signup">Don't have an account yet? Sign up here.</Link>
        </body>
        </>
    );
}

export default Login;