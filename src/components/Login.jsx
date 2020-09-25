import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { actionTypes } from "../Reducer";
import { useStateValue } from "../StateProvider";
import { SetLocalStore } from "../LocalStorage";

export default function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    // let the user sign in
    auth
      .signInWithPopup(provider)
      .then((res) => {
        const _2hrs = 2 * 60 * 60 * 1000;
        SetLocalStore(res.user.email, res.user, _2hrs);
        // update the state
        dispatch({
          type: actionTypes.SET_USER,
          user: res.user,
        });
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="facebook_logo"
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt="facebook_text_logo"
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}
