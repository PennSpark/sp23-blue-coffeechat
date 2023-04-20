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
            <body id="welcome-body">
                <div className="welcome-container" id="welcome-container">
                    <div className="welcome-text" id="welcome-text">
                        <h1 className="welcome-title" id="welcome-title"><span>welcome to</span>  
                            <p> </p><span style={{fontSize: "1.07em"}}>c</span>offeechat
                            <p className="subtitle" id="welcome-subtitle">find your newest friendship today</p>
                            <Link to="/signup">
                                <button className="welcome-button" id="welcome-button">join</button>
                            </Link>
                        </h1>
                    </div>
                    <img src="/images/Logo.svg" alt="description of image" id="welcome-logo"/>
                </div>
            </body>
        </  >
    );
}

export default Welcome;