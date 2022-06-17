import React, { Component } from "react";
// import css from "./Settings.module.css";
import css from "./FriendsBar.module.css";
import { NavLink } from "react-router-dom";

const isActiveClass = (navData) =>
  navData.isActive ? css.active : css.friendsName;

const FriendsBar = (props) => {
  return (
    <div className={css.friendsBlock}>
      <div>
        <NavLink to={"/friends/" + `${props.id}`} className={css.friendsItem}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU"
            alt=""
          />
        </NavLink>
      </div>
      <div>
        <NavLink
          className={(css.friendsName, isActiveClass)}
          to={"/friends/" + `${props.id}`}
        >
          {props.name}
        </NavLink>
      </div>
    </div>
  );
};

export default FriendsBar;
