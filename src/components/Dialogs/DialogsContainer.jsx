import React from "react";
import css from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux"

// const DialogsContainer = (props) => {
//   console.log(props);
//   let state = props.store.getState().dialogsPage;
 
//   let onSendMessageClick = function () {
//     props.store.dispatch(sendMessageCreator());
//   };

//   let onNewMessageChange = function (body) {
//     props.store.dispatch(updateNewMessageBodyCreator(body));
//   };

//   return <Dialogs 
//   updateNewMessageBody = {onNewMessageChange} 
//   sendMessage = {onSendMessageClick}
//   dialogsPage = {state} />;
// };

// export default DialogsContainer;

let mapStateToProps =(state) =>{
  return {
dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) =>{
  return {
    updateNewMessageBody: (body) =>{
    dispatch(updateNewMessageBodyCreator(body));

    },
  sendMessage: ()=>{
    dispatch(sendMessageCreator());

  }
 }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer