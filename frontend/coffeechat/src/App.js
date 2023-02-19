import React from 'react';
import axios from 'axios';
import './App.css';
import {Link} from "react-router-dom"
import Welcome from "./routes/welcome"
  
class App extends React.Component {
  
    // state = {
    //     profiles : [],
    // }
  
    // componentDidMount() {
  
    //     let data ;
  
    //     axios.get('http://127.0.0.1:8000/profile/')
    //     .then(res => {
    //         data = res.data;
    //         this.setState({
    //             profiles : data    
    //         });
    //     })
    //     .catch(err => {})
    // }
  
  render() {
    return(
        <div>
        <Welcome/>
        <Link to="/profile">Profile</Link>
        </div>
      );
  }
}
  
export default App;