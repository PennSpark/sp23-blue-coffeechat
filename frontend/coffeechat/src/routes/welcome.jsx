import {Link} from "react-router-dom"
import './styles/welcome.css'
import Header from "./header"

function Welcome() {
    return(
        <>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Work+Sans:wght@500&display=swap" rel="stylesheet"/>
            </head>
            {/* This is the welcome page. */}
            <body>
                <div className="welcome-container">
                    <div className="welcome-text">
                        <h1 className="welcome-title">welcome to <br></br>
                            <span style={{fontSize: "1.07em"}}>c</span>offeechat
                            <p className="subtitle">find your newest <br></br>friendship today</p>
                            <Link to="/signup">
                                <button className="signup-button">join</button>
                            </Link>
                        </h1>
                    </div>
                    <img src="/images/Logo.svg" alt="description of image"/>
                </div>
            </body>
        </  >
    );
}

export default Welcome;