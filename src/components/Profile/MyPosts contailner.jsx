import React from "react";
import Post from "./Post/Post";
import css from "./MyPosts.module.css";
import {
  addPostActionCreater,
  updateNewPostTextActionCreater,
} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState()
  console.log(state);

  const addPostMessage = function () {
    props.store.dispatch(addPostActionCreater());
  };

  const changePostMessage = function (text) {
    let action = updateNewPostTextActionCreater(text)
    props.store.dispatch(action);
  };
  return (
    <MyPosts 
    updateNewPostText = {changePostMessage} 
    addPostMessage = {addPostMessage} 
    state = {state.profilePage.postData} 
    newPostText = {state.profilePage.newPostText}></MyPosts>
  );
};

export default MyPostsContainer;
