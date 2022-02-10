import React from "react";
import css from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsAndMessages = [];

  let messageText = React.useRef();
  let dialogsElements = props.state.dialogsPage.dialogsData.map((dialog) => (
    <DialogItem id={dialog.id} name={dialog.name} text={dialog.text} />
  ));
  let showText = function () {
    let text = messageText.current.value;
    alert(text);
  };

  return (
    <div className={css.dialogs}>
      <div className={css.dialogs_items}>
        {/* <DialogItem id="523848" name={dialogsData[0].name} />
         */}
        {dialogsElements}
        <div>
          <textarea ref={messageText}></textarea>
        </div>
        <button onClick={showText}>Add message</button>
      </div>
      {/* <div className={css.messages}>{messageElements}</div> */}
    </div>
  );
};

export default Dialogs;
