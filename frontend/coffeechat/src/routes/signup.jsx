import {Link} from "react-router-dom"
import './styles/signup.css'

function Signup() {
    return(
        // This is the signup page.
        <div>
            <h1>Sign up for Coffeechat</h1>
            <Link to="/login">Already have an account? Sign up here.</Link>
        </div>
    );
}

export default Signup;