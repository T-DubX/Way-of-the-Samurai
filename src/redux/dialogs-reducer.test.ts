import {addMessageAC, dialogsReducer, DialogsType, InitialDialogsStateType, MessageType} from "./dialogs-reducer";


let state: InitialDialogsStateType

beforeEach(() => {
   state = {
      messages: [
         {id: '1', message: 'Hello world'},
         {id: '2', message: 'I am from Belarus'},
         {id: '3', message: 'How are you?'},
      ] as MessageType[],
      dialogs: [
         {id: '1', name: 'Anton'},
         {id: '2', name: 'Alex'},
         {id: '3', name: 'Valera'},
         {id: '4', name: 'Pasha'},
         {id: '5', name: 'Viktoria'},
         {id: '6', name: 'Ekaterina'},
      ] as DialogsType[],
      newMessageText: '',
   }
})

it('length of should be incremented', () => {
   const action = addMessageAC('Hi! I am Anton')

   const newState = dialogsReducer(state, action)

   expect(newState.messages.length).toBe(4)

})

it('message of new message should be correct', () => {
   const action = addMessageAC('Hi! I am Anton')

   const newState = dialogsReducer(state, action)

   expect(newState.messages[3].message).toBe('Hi! I am Anton')
})