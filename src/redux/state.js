let rerenderEntireTree = () => {};

let store = {
  state: {
    profilePage: {
      postData: [
        { id: 1, message: "Hi, how are you?", likesCount: 15 },
        { id: 2, message: "It's my first post", likesCount: 20 },
        { id: 3, message: "Such a good social network", likesCount: 63 },
        { id: 4, message: "Wooow", likesCount: 6 },
      ],
      newPostText: "it-camasutra",
    },
    getState() {
      console.log(this.state);
      return this.state;
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
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this.state.profilePage.newPostText,
      likesCount: 0,
    };
    this.state.profilePage.postData.push(newPost);
    this.state.profilePage.newPostText = "";
    rerenderEntireTree(this.state);
  },
  changePost(newPostMessage) {
    // let newPost = {
    //   id: 5,
    //   message: newPostMessage,
    //   likesCount: 0,
    // };
    this.state.profilePage.newPostText = newPostMessage;
    rerenderEntireTree(this.state);
  },
  subscribe(observer) {
    rerenderEntireTree = observer;
  },
  dispatch() {},
};

export default store;
