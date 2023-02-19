import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    // <div>
    //   {profiles.map((profile, id) => (
    //     <div key={id}>
    //       <div>
    //         <div className="profile-intro">
    //           <p>
    //             <span>{profile.name}</span> - {profile.year}
    //           </p>
    //         </div>

    //         <p>{profile.desc}</p>

    //         <p>{profile.image}</p>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
}

export default Profile;