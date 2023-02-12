import React from 'react';
import axios from 'axios';
import './App.css';
  
class App extends React.Component {
  
    state = {
        profiles : [],
    }
  
    componentDidMount() {
  
        let data ;
  
        axios.get('http://127.0.0.1:8000/profile/')
        .then(res => {
            data = res.data;
            this.setState({
                profiles : data    
            });
        })
        .catch(err => {})
    }
  
  render() {
    return(
      <div>
            {this.state.profiles.map((profile, id) =>  (
            <div key={id}>
            <div >
                  <div>
                        <div className="profile-intro"><p><span>{profile.name}</span> - {profile.year}</p></div>

                        <p>{profile.desc}</p>

                        <p>{profile.image}</p>

                  </div>
            </div>
            </div>
            )
        )}
      </div>
      );
  }
}
  
export default App;