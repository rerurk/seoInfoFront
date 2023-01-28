import React, {FC} from 'react';
// @ts-ignore
import classes from "./Main.module.css"
import SeoInfo from "../../components/seoInfo/SeoInfo";

const Main: FC = () => {
    return (
        <div className={classes.wrapper}>
          <SeoInfo/>
        </div>
    );
};

export default Main;