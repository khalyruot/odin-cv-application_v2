import { useState } from "react";
import LeftInformation from "./LeftInformation";


function Resume_field({submission=[], name_1, name_2}){


    return(
       <div id="resume_field">
            
            <ol>
            {submission.map((data,index)=>
                <li key={index}>
                    <h4>{data[name_1]}</h4>
                    <h4>{data[name_2]}</h4>
                </li> 
            )}
        
            </ol>
                    
       </div>
       
    );
}

export default Resume_field;