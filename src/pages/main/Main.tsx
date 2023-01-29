import React, {FC} from 'react';
// @ts-ignore
import cl from "./Main.module.css"
import UploadFile from "../../components/uploadFile/UploadFile";
import UserFileComp from "../../components/userFileList/userFileComp/UserFileComp";


const Main: FC = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.wrapper_head}>
                <h2 className={cl.title}>WILDBERRIES Seo Info</h2>
            </div>

            <div className={cl.wrapper_UploadFile}>
                <UploadFile/>
            </div>

            <div className={cl.wrapper_UserFileList}>
                <UserFileComp/>
            </div>
        </div>
    );
};

export default Main;