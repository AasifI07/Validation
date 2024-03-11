import React, { useState } from "react";
import "../Components/App.css";
import image from "../assets/Group 80.png";
import validation from "./validation";

const Form = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
   

  };
  const handleSubmit = () => {
    
  setErrors(validation(inputs));
 
  
  
  
  };

  return (
    <div>
      <div className="con">
        <div className="main-div">
          <div className="left-side">
            <div className="heading">
              <h1> Welcome Back</h1>
              <h4> Welcome Back! Please enter your credentials</h4>
              <label>
                <p>E Mail*</p>
                <input
                  type="email"
                  className="input-data"
                  name="email"
                  placeholder=" Enter Your Email"
                  inputs={inputs.email}
                  onChange={handleInput}
                  
                />
                {errors.email && <p className="error">{errors.email}</p>}

                <p> Password*</p>
                <input
                  type="password"
                  className="input-data"
                  name="password"
                  placeholder=" Your Password"
                  inputs={inputs.password}
                  onChange={handleInput}
                />
                {errors.password && <p className="error">{errors.password}</p>}
              </label>
              <div className="id">
                <p> Forgot Password?</p>
              </div>
              <div className="button">
                <button onClick={handleSubmit} className="Submit">
                  LOGIN
                </button>
              </div>
            </div>
          </div>
          <div className="right-side">
            <img src={image} className="img" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
