import { useState } from "react";

function LeftInformation({ name_1, name_2, Point_1, Point_2, onSubmit, existingData={} }) {
  const [formData, setFormData] = useState({
    [name_1]: existingData[name_1] || "",
    [name_2]: existingData[name_2] || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    //cleaner inputs
    setFormData({
      [name_1]:"",
      [name_2]:"",
    });
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
              placeholder={name_1}
              value={formData[name_1]}
            />

            <h2>{Point_2}</h2>
            <input
              type="text"
              name={name_2}
              onChange={handleInputChange}
              placeholder={name_2}
              value={formData[name_2]}
            />
          </div>

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default LeftInformation;

