import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import './styles/profile.css'
import Header from "./header"

function Profile() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/profile/')
      .then((res) => {
        setProfiles(res.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <>
    <Header/>
    <div><p>Profiles</p></div>
    {/* <div>
      {profiles.map((profile, id) => (
        <div key={id}>
          <div>
            <div className="profile-intro">
              <p>
                <span>{profile.name}</span> - {profile.year}
              </p>
            </div>

            <p>{profile.desc}</p>

            <p>{profile.image}</p>
          </div>
        </div>
      ))}
    </div> */}
    </>
  );
}

export default Profile;