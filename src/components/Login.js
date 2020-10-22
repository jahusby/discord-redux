import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from ".././firebase";

function Login() {
  const signIn = () => {
    // do google login shizz..
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://discord.com/assets/94db9c3c1eba8a38a1fcf4f223294185.png"
          alt=""
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
