import React from "react";
import Post from "./Post/Post";
import css from "./MyPosts.module.css";
import {
  addPostActionCreater,
  updateNewPostTextActionCreater,
} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux"

// const MyPostsContainer = (props) => {
//   let state = props.store.getState()
//   console.log(state);

//   const addPostMessage = function () {
//     props.store.dispatch(addPostActionCreater());
//   };

//   const changePostMessage = function (text) {
//     let action = updateNewPostTextActionCreater(text)
//     props.store.dispatch(action);
//   };
//   return (
//     <MyPosts 
//     updateNewPostText = {changePostMessage} 
//     addPostMessage = {addPostMessage} 
//     state = {state.profilePage.postData} 
//     newPostText = {state.profilePage.newPostText}></MyPosts>
//   );
// };

// export default MyPostsContainer;


const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    state: state.profilePage.postData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) =>{
      let action = updateNewPostTextActionCreater(text)
    dispatch(action);
    },
    addPostMessage: () =>
  {
    dispatch(addPostActionCreater());
  }
  }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostContainer;
