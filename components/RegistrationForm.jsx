import { useState } from "react";

const RegisterationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    msg: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateForm()){
        console.log(formData);
        setError({msg: ""});
    } else {
        setError({msg: "Empty form field(s)."});
    }
  };

  const validateForm = () => {
    let isValid  = true;
    if(!formData.name || !formData.email || !formData.password){
        isValid = false;
    }
    return isValid;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
      <span style={{ color: 'red' }}>{error.msg}</span>
    </form>
  );
};

export default RegisterationForm;
