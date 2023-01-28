import React, {FC, useState} from 'react';
import cl from"./Auth.module.css"
import {User} from "../../structs/auth";
import {Fetches} from "../../fetches/Fetches";
import {useDispatch} from "react-redux";
import {SetIsAuthState} from "../../store/action_creator/AppStoreActions";

const Auth:FC = () => {
    const dispatch=useDispatch()
    const [user,setUser]=useState<User>({ login: "", pass: ""})
    const sigInHandler =()=>{
        console.log(user)
        Fetches.Authorization(user).then(r=>{
            if(!(r instanceof Error)){
                 // @ts-ignore
                dispatch(SetIsAuthState(r))
            }
        })

    }
    const inpLogHandler=(event: React.ChangeEvent<HTMLInputElement>)=>{
        console.log(event.target.value)
        setUser({...user,login:event.target.value})
    }

    const inpPassHandler=(event: React.ChangeEvent<HTMLInputElement>)=> {
        setUser({...user,pass:event.target.value})
    }

        return (
        <div className={cl.wrapper}>
            <div className={cl.wrapper_inputs}  >
            <input defaultValue={user.login} onChange={event => inpLogHandler(event)}/>
            <input defaultValue={user.pass} type={"password"} onChange={event => inpPassHandler(event)}/>
            <button onClick={sigInHandler}>SigIn</button>
            </div>
        </div>
    );
};

export default Auth;