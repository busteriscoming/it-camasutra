import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import css from "../Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={`${css.dialogs} ${css.active}`}>
      <NavLink to={path} className={css.dialogsItem}>
        <div className={css.itemName}>
          <img
            className={css.dialogAvatar}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU"
            alt=""
          />
        </div>
      </NavLink>
      <NavLink to={path} className={css.dialogsName}>
        <span>{props.name}</span>
      </NavLink>
      <div className={css.text}>{props.text}</div>
    </div>
  );
};

export default DialogItem;
