import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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

    dialogsPage: {
      dialogsData: [
        { id: 523848, name: "Dimych", text: "Hi" },
        { id: 164222, name: "Andrey", text: "How is your it camasutra?" },
        { id: 166435, name: "Sveta", text: "Yo" },
        { id: 235842, name: "Sasha", text: "Sasha" },
        { id: 168246, name: "Viktor", text: "Viktor" },
        { id: 163243, name: "Valeriy", text: "Valeriy" },
      ],
      messageData: [
        { id: 523848, text: "Hi" },
        { id: 164222, text: "How is your it camasutra" },
        { id: 166435, text: "Yo" },
        { id: 235842, text: "Sasha" },
        { id: 168246, text: "Viktor" },
        { id: 163243, text: "Valeriy" },
      ],
      newMessageBody: "",
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

  getState() {
    return this.state;
  },
  subscribe(observer) {
    rerenderEntireTree = observer;
  },
  dispatch(action) {
    this.state.profilePage = profileReducer(this.state.profilePage, action)
    this.state.dialogsPage = dialogsReducer(this.state.dialogsPage, action)
    this.state.sidebar = sidebarReducer(this.state.sidebar, action)
    rerenderEntireTree(this.state);
    
    // if (action.type === ADD_POST) {
    //   let newPost = {
    //     id: 5,
    //     message: this.state.profilePage.newPostText,
    //     likesCount: 0,
    //   };
    //   this.state.profilePage.postData.push(newPost);
    //   this.state.profilePage.newPostText = "";
    //   rerenderEntireTree(this.state);
    // } else if (action.type === CHANGE_POST) {
    //   this.state.profilePage.newPostText = action.newPostMessage;
    //   rerenderEntireTree(this.state);
    // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    //   this.state.dialogsPage.newMessageBody = action.body;
    //   rerenderEntireTree(this.state);
    // } else if (action.type === SEND_MESSAGE) {
    //   let body = this.state.dialogsPage.newMessageBody;
    //   this.state.dialogsPage.newMessageBody = "";
    //   this.state.dialogsPage.dialogsData.push({
    //     id: 163243,
    //     name: "Dmytro",
    //     text: body,
    //   });

    // }
  },
};

export default store;
