import React from 'react';
import axios from 'axios';
  
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
                  <div >
                        <h1>{profile.name} </h1>
                        {profile.desc}
                        {profile.image}
                        {profile.year}
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