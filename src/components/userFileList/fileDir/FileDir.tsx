import React, {FC} from 'react';
import cl from "./FileDir.module.css"
import {ClientSett} from "../../../structs/clientsSettings";
import {Fetches} from "../../../fetches/Fetches";

interface FileDirProps {
    clientSet:ClientSett
}

const FileDir:FC<FileDirProps> = ({clientSet}) => {
    console.log(clientSet)
    const startSeoHandler=()=>{
        Fetches.StartSeoSetInfo(clientSet).then(r=>console.log(r))
    }
    return (
        <div className={cl.wrapper}>
           <a href={clientSet.data_file} download>{clientSet.file_path}</a>

            <button onClick={startSeoHandler}>Start</button>
            <button>Скачать</button>
        </div>
    );
};

export default FileDir;