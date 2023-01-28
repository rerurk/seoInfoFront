import React, {FC, useState} from 'react';
import cl from "./SeoInfo.module.css"
import axios from "axios";
import {Fetches} from "../../fetches/Fetches";

const SeoInfo: FC = () => {

    const [dataFile, setDataFile] = useState<File | null>(null)
    console.log(dataFile)
    function inputHandler (e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files&&e.target.files.length > 0) {
          setDataFile(e.target.files[0])
        }
    }

    function btHandler() {
       console.log(dataFile)
        if(dataFile){
            Fetches.Uploadfile(dataFile).then(r=>console.log(r))
        }
       /* var formData = new FormData();

        if(dataFile) {
            formData.append("myFile", dataFile);
            axios.post('/upload_file', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        }*/
    }

    return (
        <div className={cl.wrapper}>
            <h2 className={cl.title}>WILDBERRIES Seo Info</h2>
            <input
                type="file"
                accept=".xlsx"
                onChange={event => inputHandler(event)
                }
            />
            <button onClick={btHandler}>Отправить</button>
        </div>
    );
};

export default SeoInfo;