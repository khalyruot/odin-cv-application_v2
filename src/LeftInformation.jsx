import { useState } from "react";

function LeftInformation({ name_1, name_2, Point_1, Point_2, onSubmit }) {
  const [formData, setFormData] = useState({
    fName: "",
    jobTitle: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    //cleaner inputs
    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div id="right_basic_info">
          <div>
            <h2>{Point_1}</h2>
            <input
              type="text"
              name={name_1}
              onChange={handleInputChange}
              placeholder="Enter Name"
            />

            <h2>{Point_2}</h2>
            <input
              type="text"
              name={name_2}
              onChange={handleInputChange}
              placeholder="Enter Job Title"
            />
          </div>

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default LeftInformation;

