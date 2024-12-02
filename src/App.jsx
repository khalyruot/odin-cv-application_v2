
import './App.css'
import EducationInfo from './EducationInfo.jsx';
import LeftInformation from './LeftInformation'
import ProfileInfo from './PersonalInfo.jsx';
import Resume_field from './ResumeField.jsx';
import WorkExperienceInfo from './WorkExperienceInfo.jsx';
import React, { useState } from 'react';


function App() {

  const[submission_1,setSubmission_1] = useState([]);
  const[submission_2,setSubmission_2] = useState([]);
  const[submission_3,setSubmission_3] = useState([]);

  const handleFormSubmit_1 = (formData) => {
    setSubmission_1((prevSubmission) => [...prevSubmission, formData]);
    
  }
  
  
  const handleFormSubmit_2 = (formData) => {
    setSubmission_2((prevSubmission) => [...prevSubmission, formData]);
   
  }

  const handleFormSubmit_3 = (formData) => {
    setSubmission_3((prevSubmission) => [...prevSubmission, formData]);
   
  }

 console.log(submission_1);

  
  

  return (
    <div id="container">
      <div id="leftSide" >
        <div id="basic_info_left"><LeftInformation name_1 = "fName" name_2="jobTitle" Point_1="Enter Your Name: " Point_2="Your Profession: " onSubmit={handleFormSubmit_1} /></div>
        <div id="experience_left"><LeftInformation name_1 = "employer" name_2="date" Point_1="Enter Your Employer Name: " Point_2="Date of Employment: " onSubmit={handleFormSubmit_2} /></div>
        <div id="education_left"><LeftInformation name_1 = "degree" name_2="school"Point_1="Enter Your Degree: " Point_2="Enter Your School Name: " onSubmit={handleFormSubmit_3} /></div>
      </div>
      <div id="rightSide">
        <div id="basic_info_right"><ProfileInfo submission={submission_1} name_1={"fName"} name_2={"jobTitle"} listStyleType={{ listStyleType: "none" }} /></div>
        <div id="work_experience_info_right"><WorkExperienceInfo submission={submission_2} name_1={"employer"} name_2={"date"}/></div>
        <div id="education_right"><EducationInfo submission={submission_3} name_1={"degree"} name_2={"school"}/></div>
      </div>
      
    </div>
   
  )
}

export default App
