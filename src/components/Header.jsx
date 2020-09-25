import React, { useState, useRef } from "react";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import { actionTypes } from "../Reducer";
import useOutsideClick from "./ClickOutside";

export default function Header() {
  const [{ user }, dispatch] = useStateValue();
  const [page, setPage] = useState("Home");
  const [active, setActive] = useState(false);
  const ref = useRef();

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        //remove the session cookies
        const curUser = sessionStorage.getItem("curUser");
        sessionStorage.removeItem("curUser");
        curUser && sessionStorage.removeItem(curUser);

        // update the global context
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
      })
      .catch((err) => alert(err.message));
  };

  // click anywhere to click the dropdown
  useOutsideClick(ref, () => {
    active && setActive((active) => !active);
  });

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt=""
        />
        <div className="header__input">
          <SearchIcon />
          <input placeholder="Search Facebook" type="text" />
        </div>
      </div>

      <div className="header__center">
        <div
          className={
            "header__option" +
            (page === "Home" ? " header__option--active" : "")
          }
          onClick={() => setPage("Home")}
        >
          <HomeIcon fontSize="large" />
        </div>
        <div
          className={
            "header__option" +
            (page === "Flag" ? " header__option--active" : "")
          }
          onClick={() => setPage("Flag")}
        >
          <FlagIcon fontSize="large" />
        </div>
        <div
          className={
            "header__option" +
            (page === "Subscriptions" ? " header__option--active" : "")
          }
          onClick={() => setPage("Subscriptions")}
        >
          <SubscriptionsIcon fontSize="large" />
        </div>
        <div
          className={
            "header__option" +
            (page === "Storefront" ? " header__option--active" : "")
          }
          onClick={() => setPage("Storefront")}
        >
          <StorefrontIcon fontSize="large" />
        </div>
        <div
          className={
            "header__option" +
            (page === "SupervisedUser" ? " header__option--active" : "")
          }
          onClick={() => setPage("SupervisedUser")}
        >
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton onClick={() => setActive((active) => !active)}>
          <ExpandMoreIcon />
        </IconButton>
        {active && (
          <div className="dropdown" ref={ref}>
            <div className="option" onClick={signOut}>
              <ExitToAppIcon />
              <button style={{ fontWeight: "bold" }}>Logout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
