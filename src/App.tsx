import React, {FC, useEffect} from 'react';

import './App.css';
import {Fetches} from "./fetches/Fetches";
import {AuthStatus} from "./structs/auth";
import {useTypeSelector} from "./hooks/useTypeSelector";
import Main from "./pages/main/Main";
import Auth from "./pages/auth/Auth";
import {useDispatch} from "react-redux";
import {SetIsAuthState} from "./store/action_creator/AppStoreActions";


const App: FC = () => {
    const dispatch=useDispatch()
    const {authStatus} = useTypeSelector(state => state.appReducer)
    useEffect(() => {
        Fetches.TestServerLink().then(r => {
            if (!(r instanceof Error)) {
                Fetches.GetAuthStatus().then(r => {
                    if (!(r instanceof Error)) {
                        let authStatus: AuthStatus = r
                        // @ts-ignore
                        dispatch(SetIsAuthState(authStatus))
                    }
                })
            }
        })

    }, [])
    if(authStatus){
        return (
            <Main/>
        )
    }
    return (
        <Auth/>
    )
}

export default App;
