import React, { Component } from "react";
// import css from "./Profile.module.css";
import Posts from "./MyPosts";
import MyPostsContainer from "./MyPosts contailner";
import Avatar from "./ProfileInfo/Avatar.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <div>
        <ProfileInfo />
        <MyPostsContainer store = {props.store}
        />
        <div>ava</div>
      </div>
    </div>
  );
};

export default Profile;
