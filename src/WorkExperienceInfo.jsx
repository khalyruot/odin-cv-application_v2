import { useState, useEffect } from "react";
import LeftInformation from "./LeftInformation";


function WorkExperienceInfo({submission=[], name_1, name_2}){

    const[editingIndex, setEditingIndex] = useState(null);
  

    const[submission_2,setSubmission_2] = useState(submission);


    useEffect(() => {
        setSubmission_2(submission);
      }, [submission]);

   
    const handleFormSubmit_2 = (formData) => {
        if(editingIndex!==null){
            setSubmission_2((prevSubmission) => prevSubmission.map((data, index) =>
                index === editingIndex ? formData : data
              ));

                const updatedEntry = submission_2[editingIndex];
                console.log("Updated Employer:", updatedEntry[name_1]);
                console.log("Updated Date:", updatedEntry[name_2]);
        
        }
        else{
            setSubmission_2((prevSubmission) => [...prevSubmission, formData]);
        }
        
        setEditingIndex(null);
    };

    const handleEditClick = (index, formData) =>{
        setEditingIndex(index);
    };

    const handleCancelEdit = () => {
        
        setEditingIndex(null); // Cancel editing and return to the previous state
    };

    return(
       <div id="resume_field">
            {editingIndex !== null ? (
                 <>
                    <ol>
                        <div id="experience_left"><LeftInformation 
                                                    name_1="employer" name_2="date"
                                                    Point_1="Enter Your Employer Name: " Point_2="Date of Employment: " 
                                                    onSubmit={handleFormSubmit_2}
                                                    existingData={submission_2[editingIndex]} /></div>
                        <button onClick={handleCancelEdit}>Cancel</button>
                    
                    </ol>
                </>
            ):(
                <>
                     <ol>
                        {submission_2.map((data,index)=>
                            <li key={index}>
                                <h4>{data[name_1]}</h4>
                                <h4>{data[name_2]}</h4>
                                <button onClick={()=>handleEditClick(index)}>Edit</button>
                            </li> 
                        )}
                    
                    </ol>
                </>
            )}
               
            
       </div>
       
    );
}

export default WorkExperienceInfo;