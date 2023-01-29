import React, {FC, useEffect, useState} from 'react';
import cl  from "./FilesDir.module.css"
import {Fetches} from "../../../fetches/Fetches";
import {ClientSett} from "../../../structs/clientsSettings";
import FileDir from "../fileDir/FileDir";
const FilesDir:FC = () => {
    const [clientsSetts,setClientsSetts]=useState<ClientSett[]|null>(null)
    useEffect(()=>{
        Fetches.GetClientDir().then(r=>{
            if(!(r instanceof Error)&&r!=null){
               setClientsSetts(()=>r)
            }
        })

    },[])


    return (
        <div className={cl.wrapper}>
            {clientsSetts
                ?clientsSetts.map((clS,i )=><FileDir clientSet={clS} key={"FilesDir_"+i}/>)
                :false
            }
        </div>
    );
};

export default FilesDir;