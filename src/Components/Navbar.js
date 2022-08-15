import React from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import { useState } from "react";
import "./Components.css";

import styled from "styled-components";
import Home from "./Home";

export default function Navbar() {
  const [login, setLogin] = useState(false);
  
  const showLoginForm = () => {
    setLogin(!login);
  };

  const [register, setRegister] = useState(false);

  const showRegisterForm = () => {
    setRegister(!register);
  };

  return (
    <>
      {!login ? (
      <>
      <About>
        <a href="/about">About</a>
      </About>
      <Pricing>
        <a href="/pricing">Pricing</a>
      </Pricing>
      <SignUp onClick={showRegisterForm}>Sign Up</SignUp>
      <SignIn onClick={showLoginForm}>Sign In</SignIn>
      <Home1>
        <a href="/">Home</a>
      </Home1>
      <Comment>
        <a href="/Comments">Comments</a>
      </Comment>
      </>):(
        <div>
        <About>
        <a href="/about">About</a>
      </About>
      <Pricing>
        <a href="/pricing">Pricing</a>
      </Pricing>
      <Home1>
        <a href="/">Home</a>
      </Home1>
      <Comment>
        <a href="/Comments">Comments</a>
      </Comment>
      <Logout onClick={showLoginForm}>
        <a href="/">Logout</a>
      </Logout>
      <InnerPopup>
          <Content>
            <LoginForm />
            <CloseBtn onClick={showLoginForm}>Close</CloseBtn>
          </Content>
        </InnerPopup>
      </div>
      )}
      

      {register && (
        <InnerPopup2>
          <Overlay2 onClick={showRegisterForm}></Overlay2>
          <Content>
            
            <RegisterForm />
            <CloseBtn onClick={showRegisterForm}>Close</CloseBtn>
          </Content>

        </InnerPopup2>
      )}
    </>
  );
}

let About = styled.button`
  float: right;
  height: 50px;
  width: 50px;
  position: relative;
  background-color: aliceblue;
  border: none;
`;
let Pricing = styled.button`
  float: right;
  height: 50px;
  width: 50px;
  position: relative;
  background-color: aliceblue;
  border: none;
`;

let SignUp = styled.button`
  float: right;
  height: 50px;
  width: 50px;
  position: relative;
  background-color: aliceblue;
  border: none;
`;

let SignIn = styled.button`
  float: right;
  height: 50px;
  width: 50px;
  position: relative;
  background-color: aliceblue;
  border: none;
`;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(49, 49, 49, 0.8);
`;

const Overlay2 = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(49, 49, 49, 0.8);
`;

const InnerPopup = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;

  padding-left:1200px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s;
  @-webkit-keyframes animatezoom {
    from {
      -webkit-transform: scale(0);
    }
    to {
      -webkit-transform: scale(1);
    }
  }
  @keyframes animatezoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;

const InnerPopup2 = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s;
  @-webkit-keyframes animatezoom {
    from {
      -webkit-transform: scale(0);
    }
    to {
      -webkit-transform: scale(1);
    }
  }
  @keyframes animatezoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;

const Content = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: alice-blue;
  padding: 14px 28px;
  border-radius: 3px;
  max-width: 600px;
  min-width: 300px;
`;

let CloseBtn = styled.button`
  right: 10px;
  margin-top: 10px;
  width: 60px;

  cursor: pointer;
`;

let Home1 = styled.button`
  float: right;
  height: 50px;
  width: 50px;
  position: relative;
  background-color: aliceblue;
  border: none;
`;

let Comment = styled.button`
  float: right;
  height: 50px;
  width: 100px;
  position: relative;
  background-color: aliceblue;
  border: none;
`;

let Logout = styled.button`
  float: right;
  height: 50px;
  width: 50px;
  position: relative;
  background-color: aliceblue;
  border: none;
`;