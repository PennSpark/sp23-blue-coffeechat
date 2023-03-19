import {Link} from "react-router-dom"
import './styles/signup.css'
import Header from "./header"

function Signup() {
    return(
        // This is the signup page.
        <>
        <Header/>
        <body>
            <h1>Sign up for Coffeechat</h1>
            <Link to="/login">Already have an account? Log in here.</Link>
        </body>
        </>
    );
}

export default Signup;