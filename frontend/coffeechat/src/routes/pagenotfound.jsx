import {Link} from "react-router-dom"
import './styles/welcome.css'
import Header from "./header"

function PageNotFound() {
    return(
        <>
        <div className="match-before-content">
            <h1 className="heading-text">This page doesn't exist. Why not <Link to="/startmatch">head home?</Link></h1>
        </div>
        </>
    );
}

export default PageNotFound;