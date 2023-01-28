
import {Dispatch} from "redux";
import {AppActions, AppActionTypes} from "../types/AppStoreTypes";
import {AuthStatus} from "../../structs/auth";

export const SetIsAuthState=(auth:AuthStatus)=>{
    return(dispatch:Dispatch<AppActions>)=>{
        dispatch({type:AppActionTypes.SET_IS_AUTH,payload:auth})
    }
}