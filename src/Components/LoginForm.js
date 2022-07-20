import React from "react";
import { useState } from "react";
import axios from "axios";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for registration
  // States for registration

  const handleSubmitButton = () => {
    const info = { email, password };
    axios
      .get("https://my-json-server.typicode.com/andtrno1/project2/db")
      .then((res) => {
        console.log(res.data);
      })
      .then((info) => info);
    console.log(info);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // Handling the form submission

  return (
    <form className="contact-form form-validate3" novalidate="novalidate">
      <div className="form-group">
        <input
          onChange={handleEmail}
          className="form-control"
          type="email"
          name="email"
          placeholder="E-mail"
          required=""
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
          required=""
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
  );
}
