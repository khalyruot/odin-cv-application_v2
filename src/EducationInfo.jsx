import { useState, useEffect } from "react";
import LeftInformation from "./LeftInformation";


function EducationInfo({submission=[], name_1, name_2}){

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
                                                    name_1 = "degree" name_2="school"Point_1="Enter Your Degree: " 
                                                    Point_2="Enter Your School Name: " 
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

export default EducationInfo;