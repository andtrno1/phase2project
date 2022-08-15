import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Components.css";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserNames] = useState("");
  const [success, setSuccess] = useState(false);

  // States for registration
  // States for registration

  const handleSubmitButton = () => {
    setSuccess(true);
    const info = { email, password };
    
    axios
    .get("http://localhost:9292/user")
    .then(function (response) {
      console.log(response.data)
    });
  };


  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleUsername = (e) => {
    setUserNames(e.target.value);
  }


 
  // Handling the form submission

  return (
    <div className="userprofile">
    {success ?(
      <div>
        <a>Welcome {username}, You just logged in</a>
      </div>
    ):(
    <form className="contact-form form-validate3" novalidate="novalidate">
      <div className="form-group">
        <input
          onChange={handleUsername}
          type="text"
          name="username"
          className="form-control"
          placeholder="Username"
          required
          autocomplete="off"
          aria-required="true"
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleEmail}
          className="form-control"
          type="email"
          name="email"
          placeholder="E-mail"
          required
          autocomplete="off"
          aria-required="true"
        />
      </div>
      <div className="form-group">
        <input
          onChange={handlePassword}
          type="password"
          name="pass"
          className="form-control"
          placeholder="Password"
          required
          autocomplete="off"
          aria-required="true"
        />
      </div>
      <input
        onClick={handleSubmitButton}
        className="btn btn-md btn-primary btn-center"
        id="sign_up"
        type="button"
        value="Sign In"
      />
    </form>
    )}
  </div>
  );
}
