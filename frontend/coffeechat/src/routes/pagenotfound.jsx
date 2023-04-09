import {Link} from "react-router-dom"
import './styles/welcome.css'
import Header from "./header"

function PageNotFound() {
    return(
        <>
        <Header/>
        <p className="heading-text">This page doesn't exist. Why not <Link to="/startmatch">head home?</Link></p>
        </>
    );
}

export default PageNotFound;