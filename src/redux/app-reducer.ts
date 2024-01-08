import {AppDispatch} from "./store";
import {getAuthUserData} from "./auth-reducer";

type InitialState = typeof initialState

const initialState = {
   initialized: false
}

export const appReducer = (state = initialState, action: AppActionsType): InitialState => {
   switch (action.type) {
      case "SET-INITIALIZED": {
         return {
            ...state,
            initialized: true
         }
      }

      default:
         return state
   }
}

type AppActionsType = SetInitialized
type SetInitialized = ReturnType<typeof setInitialized>


// actions
export const setInitialized = () => {
   return {type: 'SET-INITIALIZED'} as const
}

// Thunk

export const initializeApp = () => (dispatch: AppDispatch) => {
   const promise = dispatch(getAuthUserData())

   promise.then(() => {
      dispatch(setInitialized())
   })
}