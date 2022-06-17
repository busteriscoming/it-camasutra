import React from "react";
import css from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;
  let messageText = React.useRef();
  let dialogsElements = state.dialogsData.map((dialog) => (
    <DialogItem id={dialog.id} name={dialog.name} text={dialog.text} />
  ));
  let messageElements = state.messageData.map((m) => (
    <Message message={m.text} />
  ));
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = function () {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = function (e) {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={css.dialogs}>
      <div className={css.dialogs_items}>
        {/* <DialogItem id="523848" name={dialogsData[0].name} />
         */}
        {dialogsElements}
        <div>
          {/* <div>{messageElements}</div> */}
          <textarea
            onChange={onNewMessageChange}
            value={newMessageBody}
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Add message</button>
        </div>
      </div>
      {/* <div className={css.messages}>{messageElements}</div> */}
    </div>
  );
};

export default Dialogs;
