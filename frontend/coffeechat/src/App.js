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
        <head><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/></head>
        <body>
            <Welcome/>
        </body>
        </div>
      );
  }
}
  
export default App;