const ADD_POST = "ADD-POST";
const CHANGE_POST = "CHANGE-POST";


let initialState = {
  postData: [
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
    { id: 2, message: "It's my first post", likesCount: 20 },
    { id: 3, message: "Such a good social network", likesCount: 63 },
    { id: 4, message: "Wooow", likesCount: 6 },
  ],
  newPostText: "it-camasutra",
}


 const profileReducer = (state = initialState, action) => {

switch(action.type){
    case ADD_POST:
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0,
          };
          state.postData.push(newPost);
          state.newPostText = "";
    return state

          case CHANGE_POST:
        state.newPostText = action.newPostMessage;
        return state
        default :
        return state

}


}
export default profileReducer

export const addPostActionCreater = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreater = (textArea) => ({
  type: CHANGE_POST,
  newPostMessage: textArea,
});
