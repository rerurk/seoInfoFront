import {AuthStatus} from "../../structs/auth";


export type AppState = {
   authStatus:boolean

}

export enum AppActionTypes {
    SET_IS_AUTH = "SET_IS_AUTH",

}


interface SetIsAuthAction {
    type: AppActionTypes.SET_IS_AUTH
    payload: AuthStatus
}

export type AppActions = SetIsAuthAction
