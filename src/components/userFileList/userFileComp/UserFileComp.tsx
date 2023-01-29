import React, {FC} from 'react';
import cl from "./UserFileComp.module.css"
import FilesDir from "../filesDir/FilesDir";

const UserFileComp: FC = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.wrapper_title}>
                Файлы в обработке
            </div>
            <div className={cl.wrapper_FilesDir}>
              <FilesDir/>
            </div>
        </div>
    );
};

export default UserFileComp;