import React from "react";
import "./Components.css";
import { useState } from "react";
import axios from "axios";

export default function RegisterForm() {
  // States for registration
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const handleSubmitButton = (e) => {
    e.preventDefault();
    const info = { email, password, firstName, lastName };

    fetch("https://my-json-server.typicode.com/andtrno1/project2/db", {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(info)
    })
      .then((res) => {
        console.log(res);
      })
      .then(() => {
        console.log(info);
      });
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlefirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handlelastName = (e) => {
    setLastName(e.target.value);
  };

  return (
    <div>
      <form className="contact-form form-validate3" novalidate="novalidate">
        <div className="form-group">
          <input
            onChange={handlefirstName}
            className="form-control"
            type="text"
            name="name"
            id="name"
            placeholder="First Name"
            required=""
            autocomplete="off"
            aria-required="true"
          />
        </div>
        <div className="form-group">
          <input
            onChange={handlelastName}
            lassName="form-control"
            type="text"
            name="name"
            id="name"
            placeholder="Last Name"
            required=""
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
          value="Sign Up"
        />
      </form>
    </div>
  );
}
