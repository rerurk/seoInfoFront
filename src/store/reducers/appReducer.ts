
import {AppActions, AppActionTypes, AppState} from "../types/AppStoreTypes";
import {AuthStatus} from "../../structs/auth";




const initialState: AppState = {
    authStatus:false
}

function setAuthStatus(authStatus:AuthStatus):AppState {
    console.log("function setAuthStatus:",authStatus)
   initialState.authStatus=authStatus.isAuth
    return initialState
}

export const appReducer = (state = initialState, action: AppActions): AppState => {

    switch (action.type) {
        case AppActionTypes.SET_IS_AUTH:
            return {...setAuthStatus(action.payload)}
        default:
            return state
    }
}