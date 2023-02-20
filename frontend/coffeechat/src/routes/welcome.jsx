import {Link} from "react-router-dom"
import './styles/welcome.css'
import Header from "./header"

function Welcome() {
    return(
        <div>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Work+Sans:wght@500&display=swap" rel="stylesheet"/>
            </head>
            {/* This is the welcome page. */}
            <body>
            <Header/>
            <div className="welcome-container">
                <p className="welcome-title">welcome to<span style={{ fontSize: "5.5vw" }}> </span><span><span>c</span>offeechat</span></p>
                <p className="subtitle">find your newest friendship today</p>
                <Link to="/signup">
                    <button className="signup-button">join</button>
                </Link>
            </div>
            </body>
        </div>
    );
}

export default Welcome;