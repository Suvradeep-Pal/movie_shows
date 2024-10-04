import React from "react";
import "./SigninContent.css";
import { FaUser, FaLock } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SigninContent = () => {
  //   const navigate = useNavigate();
  const [details, setDetails] = useState({
    name: "",
    password: "",
  });

  const [errorText, setErrorText] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
  };
  return (
    <div className="container">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <p>
            Sign in or create an account now using your
            <br />
            email and password.
          </p>
          <br />
          {errorText && <div className="errorColor">{errorText}</div>}
          <div className="input-box">
            <input
              type="text"
              name="name"
              placeholder="Username"
              required
              onChange={handleChange}
            ></input>
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleChange}
            ></input>
            <FaLock className="icon" />
          </div>
          <p>
            By continuing, I give permission to deliver <br />
            tickets and account notices via email. I will <br />
            receive NO marketing messages.
          </p>
          <button type="submit" onClick={handleLogin} className="login">
            Continue
          </button>
          <p>
            Or, use your phone number instead of your email <br />
            address.
          </p>
        </form>
      </div>
    </div>
  );

  function handleLogin() {
    if (details.name === "admin" && details.password === "123") {
      setErrorText(undefined);
    } else {
      setErrorText("Invalid username or password!");
    }
  }
};

export default SigninContent;
