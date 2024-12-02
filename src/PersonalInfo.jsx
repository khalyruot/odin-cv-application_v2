
function ProfileInfo({submission=[], name_1, name_2, listStyleType}){
    
    return(
       <div id="resume_field">
            <ol>
                {submission.map((data,index)=>
                    <li key={index} style={listStyleType}>
                        <h4>{data[name_1]}</h4>
                        <h4>{data[name_2]}</h4>
                    </li> 
                )}
            </ol>
       </div>
       
    );
}

export default ProfileInfo;