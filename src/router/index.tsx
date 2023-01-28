import React from "react";
import Main from "../pages/main/Main";
import {Domen} from "../fetches/Requests";

export enum RouterPath {
    MAIN = "/",

}

export type RouteNode = {
    isHide: boolean
    path: string,
    name: string,
    element: JSX.Element
    img?: string
}

export enum RouterTexts {
    MAIN = "Главная",


}

export type TRouterMap = {
    MAIN: RouteNode,

}

export const RouterMap: TRouterMap = {
    MAIN:  {
        isHide: false,
        path: RouterPath.MAIN,
        name: RouterTexts.MAIN,
        element: <Main/>,
        img: Domen + "/images/search.png"
    }

}
