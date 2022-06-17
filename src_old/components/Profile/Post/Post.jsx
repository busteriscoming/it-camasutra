import React, { Component } from "react";
import css from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={css.item}>
      {props.message}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU"
        alt=""
      />
      <div>
        <span>{props.likes} likes</span>
      </div>
    </div>
  );
};

export default Post;
