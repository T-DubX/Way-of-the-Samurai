import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {DialogItem, DialogsDataType} from "./dialogItem/DialogItem";
import {Message, MessageDataType} from "./message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";
import {addMessageAC,} from "../../redux/dialogs-reducer";
import {AddMessageFormRedux, FormDataType} from "./message/addMessage/AddMessage";


export type DialogsPageType = {
   messages: MessageDataType[]
   dialogs: DialogsDataType[]
   newMessageText: string
}


export const Dialogs: FC<DialogsPropsType> = (props) => {
   let state = props.dialogsPage

   const dialogsElements: JSX.Element[] = state.dialogs.map(dialog => <DialogItem key={dialog.id} id={dialog.id}
                                                                                  name={dialog.name}/>)

   const messagesElements: JSX.Element[] = state.messages.map(message => <Message
      key={message.id}
      message={message.message}
   />)

   const addNewMessage = (values: FormDataType) => {
      props.dispatch(addMessageAC(values.newMessageBody))
   }

   if (!props.isAuth) return <Redirect to={'/login'}/>

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            {messagesElements}
            <AddMessageFormRedux
               onSubmit={addNewMessage}
            />
         </div>
      </div>
   );
};
