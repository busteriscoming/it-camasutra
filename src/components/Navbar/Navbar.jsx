import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Friends from "../Friends/Friends";
import css from "./Navbar.module.css";
import FriendsBar from "./FriendsBar";

const isActiveClass = (navData) => (navData.isActive ? css.active : css.item);

const Navbar = (props) => {
  let friendsElements = props.state.friends.map((friend) => (
    <FriendsBar name={friend.name} id={friend.id} />
  ));

  return (
    <div>
      <nav className={css.nav}>
        <div>
          <NavLink className={isActiveClass} to={"/profile"}>
            Profile
          </NavLink>
        </div>
        <div>
          <NavLink className={isActiveClass} to="/dialogs">
            Messages
          </NavLink>
        </div>
        <div>
          <NavLink className={isActiveClass} to="/news">
            News
          </NavLink>
        </div>
        <div>
          <NavLink className={isActiveClass} to="/music">
            Music
          </NavLink>
        </div>
        <div>
          <NavLink className={isActiveClass} to="/settings">
            Settings
          </NavLink>
        </div>
        <div>
          <NavLink className={isActiveClass} to="/friends">
            <div className={css.friendsPage}>
              <Friends />
            </div>
            <div className={css.friendsElements}>{friendsElements}</div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
