import {Link} from "react-router-dom"
import './styles/welcome.css'

function Welcome() {
    return(
        <div>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Work+Sans:wght@500&display=swap" rel="stylesheet"/>
            </head>
            {/* This is the welcome page. */}
            <div className="welcome-container">
                <p className="welcome-title">Welcome to Coffeechat</p>
                <p className="subtitle">Find your newest friendship today</p>
                <Link to="/signup">
                    <button className="signup-button">Join</button>
                </Link>
            </div>
        </div>
    );
}

export default Welcome;