import React, {FC, useState} from 'react';
import cl from "./UploadFile.module.css"

import {Fetches} from "../../fetches/Fetches";

const UploadFile: FC = () => {

    const [dataFile, setDataFile] = useState<File | null>(null)

    function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files.length > 0) {
            setDataFile(e.target.files[0])
        }
    }

    function btHandler() {

        if (dataFile) {
            Fetches.UploadFile(dataFile).then(r => console.log(r))
        }

    }

    return (
        <div className={cl.wrapper}>
            <div className={cl.wrapper_content}>
                <input
                    type="file"
                    accept=".xlsx"
                    onChange={event => inputHandler(event)
                    }
                />
                {dataFile
                    ?<button onClick={btHandler}>Отправить</button>
                    :false
                }
            </div>
        </div>
    );
};

export default UploadFile;