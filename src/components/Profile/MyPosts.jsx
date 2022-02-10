import React from "react";
import Post from "./Post/Post";
import css from "./MyPosts.module.css";

const MyPosts = (props) => {
  let postElement = props.state.map((post) => (
    <Post id={post.id} message={post.message} likes={post.likesCount} />
  ));
  let newPostElement = React.createRef();

  const addPostMessage = function () {
    props.addPost();
  };

  const chanePostMessage = function () {
    let textArea = newPostElement.current.value;
    console.log(props);
    props.changePost(textArea);
  };
  return (
    <div>
      <div className={css.postsBlock}>
        My posts
        <div>
          <div>
            <textarea
              value={props.newPostText}
              onChange={chanePostMessage}
              ref={newPostElement}
            />
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
