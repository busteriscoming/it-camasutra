import React, { Component } from "react";
import Avatar from "./Avatar";
import css from "./ProfileInfo.module.css";

class ProfileInfo extends Component {
  render() {
    return (
      <div className={css.profileInfo}>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2159024400&v=beta&t=4WV9YKR9L3PAEnppWmPPMk5xVnETtWvhZN8NexEzPwM"
          alt=""
        />
        <Avatar />
      </div>
    );
  }
}

export default ProfileInfo;
