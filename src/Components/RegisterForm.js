import React from "react";
import "./Components.css";
import { useState } from "react";
import axios from "axios";

export default function RegisterForm() {
  // States for registration
  const [username, setUserNames] = useState("");
  const [email, setEmails] = useState("");
  const [password, setPasswords] = useState("");

  // States for checking the errors
  const handleSubmitButton = (e) => {
    e.preventDefault();
    const info = { username, email, password };

    axios.post("http://localhost:9292/user", {
      username: info.username,
      email: info.email,
      password: info.password
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  const handleEmail = (e) => {
    setEmails(e.target.value);
  };

  const handlePassword = (e) => {
    setPasswords(e.target.value);
  };

  const handleuserName = (e) => {
    setUserNames(e.target.value);
  };

  return (
    <div>
      <form className="contact-form form-validate3" novalidate="novalidate">
        <div className="form-group">
          <input
            onChange={handleuserName}
            className="form-control"
            type="text"
            name="name"
            id="name"
            placeholder="User Name"
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
          value="Sign Up"
        />
      </form>
    </div>
  );
}
