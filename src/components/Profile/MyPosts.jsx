import React from "react";
import Post from "./Post/Post";
import css from "./MyPosts.module.css";

const MyPosts = (props) => {
  let postElement = props.state.map((post) => (
    <Post id={post.id} message={post.message} likes={post.likesCount} />
  ));
  console.log(props);
  let newPostElement = React.createRef();

  const addPostMessage = function () {
    let textArea = newPostElement.current.value;
    props.addPost(textArea);
    console.log(props.state);
  };

  return (
    <div>
      <div className={css.postsBlock}>
        My posts
        <div>
          <div>
            <textarea ref={newPostElement}></textarea>
          </div>
          <div>
            <button onClick={addPostMessage}>Add post</button>
          </div>
          <div>
            <button>Remove</button>
          </div>
        </div>
        <div>New post</div>
        <div className="posts">{postElement}</div>
      </div>
    </div>
  );
};

export default MyPosts;
