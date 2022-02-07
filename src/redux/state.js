let rerenderEntireTree = () => {};

let state = {
  profilePage: {
    postData: [
      { id: 1, message: "Hi, how are you?", likesCount: 15 },
      { id: 2, message: "It's my first post", likesCount: 20 },
      { id: 3, message: "Such a good social network", likesCount: 63 },
      { id: 4, message: "Wooow", likesCount: 6 },
    ],
    newPostText: "it-camasutra",
  },
  dialogsPage: {
    dialogsData: [
      { id: 523848, name: "Dimych", text: "Hi" },
      { id: 164222, name: "Andrey", text: "How is your it camasutra?" },
      { id: 166435, name: "Sveta", text: "Yo" },
      { id: 235842, name: "Sasha", text: "Sasha" },
      { id: 168246, name: "Viktor", text: "Viktor" },
      { id: 163243, name: "Valeriy", text: "Valeriy" },
    ],
    // messageData: [
    //   { id: 523848, text: "Hi" },
    //   { id: 164222, text: "How is your it camasutra" },
    //   { id: 166435, text: "Yo" },
    //   { id: 235842, text: "Sasha" },
    //   { id: 168246, text: "Viktor" },
    //   { id: 163243, text: "Valeriy" },
    // ],
  },
  sidebar: {
    friends: [
      { id: 523848, name: "Dimych" },
      { id: 166435, name: "Sveta" },
      { id: 163243, name: "Valeriy" },
      { id: 163242, name: "Ksenia" },
      { id: 163283, name: "Vlad" },
      { id: 163246, name: "Z" },
    ],
  },
};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.postData.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};
export let changePost = (newPostMessage) => {
  // let newPost = {
  //   id: 5,
  //   message: newPostMessage,
  //   likesCount: 0,
  // };
  state.profilePage.newPostText = newPostMessage;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;
