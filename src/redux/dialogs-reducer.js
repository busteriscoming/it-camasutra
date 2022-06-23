const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";


let initialState = {
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
}

 const dialogsReducer = (state = initialState, action) => {

  let stateCopy
switch(action.type){
    case(UPDATE_NEW_MESSAGE_BODY):{
      
    
    return {
      ...state, newMessageBody: action.body
    }
    }
    case(SEND_MESSAGE):

    
    let body = state.newMessageBody;

   
    return {...state, newMessageBody: '', dialogsData: [...state.dialogsData, {
        id: 163249,
        name: "Dmytro",
        text: body,
      }]}
  
    default:
    return state

}
 }

 export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
 export const updateNewMessageBodyCreator = (body) => ({
   type: UPDATE_NEW_MESSAGE_BODY,
   body: body,
 });
 
 

export default dialogsReducer
