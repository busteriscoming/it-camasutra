import React, { Component } from "react";
// import css from "./Profile.module.css";
import Posts from "./MyPosts";
import Avatar from "./ProfileInfo/Avatar.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <div>
        <ProfileInfo />
        <Posts
          newPostText={props.state.newPostText}
          dispatch={props.dispatch}
          state={props.state.postData}
        />
        <div>ava</div>
      </div>
    </div>
  );
};

export default Profile;
