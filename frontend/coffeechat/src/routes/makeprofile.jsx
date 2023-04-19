// eslint-disable-next-line
import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
// eslint-disable-next-line
import { Link, redirect, useNavigate} from 'react-router-dom';
import Header from './header';
import Loading from './loading';
import './styles/makeprofile.css'

function MakeProfile() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bio, setBio] = useState('');
    const [year, setYear] = useState('');
    const [school, setSchool] = useState('');
    const [instagram, setInstagram] = useState('');
    const [showGraduateFields, setShowGraduateFields] = useState(true);
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [yearSchoolError, setYearSchoolError] = useState(false);
    const [instaError, setInstaError] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    const authRedirect = async () => {
        try {
        const response = await axios.get('http://localhost:8000/api/checkauth/', { withCredentials: true});
        if (!response.data.isAuth) {
            navigate("/login")
        }
        } catch (error) {
        console.error(error);
        }
        setIsLoading(false);
    };

    authRedirect();

    if (isLoading) {
        return(<Loading/>);
    }
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
      try {
        console.log(image);
        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('bio', bio);
        formData.append('year', year);
        formData.append('school', school);
        formData.append('instagram', instagram);
        formData.append('image', image);
  
      const response = await axios.post('http://localhost:8000/api/makeprofile/', formData, { withCredentials: true });
      console.log(response.data);
        const data = response.data;
        const fnError = data.firstNameError;
        const lnError = data.lastNameError;
        const yrScError = data.yearSchoolError;
        const instaError = data.instaError;

        if (fnError === "True") {
            setFirstNameError(true);
            navigate("/makeprofile?error=MakeProfileError")
        } else if (lnError === "True") {
            setLastNameError(true);
            navigate("/makeprofile?error=MakeProfileError")
        } else if (yrScError === "True") {
            setYearSchoolError(true);
            navigate("/makeprofile?error=MakeProfileError")
        } else if (instaError === "True") {
            setInstaError(true);
            navigate("/makeprofile?error=MakeProfileError")
        } else {
          navigate("/startmatch/")
        }
        
      } 
      catch (error) {
        console.error(error.response.data);
      }
    };

    const handleYearChange = (event) => {
      const { value } = event.target;
      setYear(value);
      if (value === 'GR' || value === '') {
        setShowGraduateFields(true);
      } else {
        setShowGraduateFields(false);
        setSchool('');
      }
      
    };

    return (
        <>
          <div>
            <head>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
              <link
                href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Work+Sans:wght@500&display=swap"
                rel="stylesheet"
              />
            </head>
            {/* This is the make profile page. */}
            <body>
              <Header />
              <form className="makeprofile-form" onSubmit={handleSubmit}>
                <div className="makeprofile-form-container">
                    <h1 className="makeprofile-title">create your profile</h1>
                    <label className='field-label'><span className='required-field'>*</span> field is required</label>
                    <label className="field-label" for="firstname">First Name<span className='required-field'>*</span></label>
                    {firstNameError && <label className="error-label">Please enter your first name.</label>}
                    <input
                        name="firstname"
                        type="text"
                        placeholder='Benjamin'
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                    {lastNameError && <label className="error-label">Please enter your last name.</label>}
                    <label className="field-label" for="lastname">Last Name<span className='required-field'>*</span></label>
                    <input
                        name="lastname"
                        type="text"
                        placeholder='Franklin'
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                    />
                    {yearSchoolError && <label className="error-label">Incompatible school choice. Please try again.</label>}
                    <label className="field-label" for="academic_year">Academic Year</label>
                    <select 
                        name="academic_year" 
                        className="drop-down" 
                        id="academic_year" 
                        onChange={handleYearChange}
                    >
                      <option value="">--</option>
                      <option value="FR">Freshman</option>
                      <option value="SO">Sophomore</option>
                      <option value="JR">Junior</option>
                      <option value="SR">Senior</option>
                      <option value="GR">Graduate</option>
                    </select>

                    <label className="field-label" for="school">School</label>
                    <select 
                        name="schools" 
                        className="drop-down" 
                        id="schools"
                        onChange={(event) => setSchool(event.target.value)}
                        >
                      <option value="">--</option>
                      <option value="CAS">Arts and Sciences</option>
                      <option value="SEAS">Engineering</option>
                      <option value="WH">Wharton</option>
                      <option value="NU">Nursing</option>
                      {showGraduateFields && (
                        <>
                          <option value="COMM">Annenberg School of Communication</option>
                          <option value="DENT">Dental Medicine</option>
                          <option value="DSGN">Weitzman School of Design</option>
                          <option value="EDU">Education</option>
                          <option value="LAW">Carey Law</option>
                          <option value="MED">Perelman School of Medicine</option>
                          <option value="SOPOC">Social Policy and Practice</option>
                          <option value="VET">Veterinary Medicine</option>
                        </>
                      )}
                  </select>
                  {instaError && <label className="error-label">Please enter a correctly formatted Instagram link (e.g., "instagram.com/coffeechat-penn").</label>}
                  <label className='field-label' for="instagram">Instagram</label>
                  <input
                        name="instagram"
                        type="text"
                        placeholder='instagram.com/pennspark'
                        value={instagram}
                        onChange={(event) => setInstagram(event.target.value)}
                    />
                    <label className='field-label' for="bio">Bio</label>
                    <input
                        name="bio"
                        type="text"
                        placeholder='Write a bio...'
                        value={bio}
                        onChange={(event) => setBio(event.target.value)}
                    />
                    <label className="field-label" for="image">Image</label>
                    
                    <button type="submit" className="submit-button">
                        create profile
                    </button>
                </div>
                <input
                      name="image"
                      type="file"
                      onChange={(event) => setImage(event.target.files[0])}
                    />
              </form>

              {/* <script>
                var academicYear = document.getElementById("academic_year");
                var schools = document.getElementById("schools");

                academicYear.addEventListener("change", function() {
                  if (academicYear.value === "graduate") {
                    schools.options[4].style.display = "block";
                    schools.options[5].style.display = "block";
                    schools.options[6].style.display = "block";
                    schools.options[7].style.display = "block";
                    schools.options[8].style.display = "block";
                    schools.options[9].style.display = "block";
                    schools.options[10].style.display = "block";
                    schools.options[11].style.display = "block";
                  } else {
                    schools.options[4].style.display = "none";
                    schools.options[5].style.display = "none";
                    schools.options[6].style.display = "none";
                    schools.options[7].style.display = "none";
                    schools.options[8].style.display = "none";
                    schools.options[9].style.display = "none";
                    schools.options[10].style.display = "none";
                    schools.options[11].style.display = "none";
                  }
                });
              </script> */}

            </body>
          </div>
        </>
      );
    
}



export default MakeProfile;
