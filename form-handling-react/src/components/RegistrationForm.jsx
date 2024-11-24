import { useState } from "react";

const RegisterationForm = () => {

  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setErrors] = useState({
    msg: ""
  });

  const handleChange = (e) => {
    const { username, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [username]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateForm()){
        console.log(formData);
        setErrors({msg: ""});
    } else {
        setErrors({msg: "Empty form field(s)."});
    }
  };

  const validateForm = () => {
    let isValid  = true;
    
    if(!username)
      isValid = false;
    if(!email)
      isValid = false;
    if(!password)
      isValid = false;
  
    return isValid;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          username="username"
          value={username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          username="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          username="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
      <span style={{ color: 'red' }}>{error.msg}</span>
    </form>
  );
};

export default RegisterationForm;
