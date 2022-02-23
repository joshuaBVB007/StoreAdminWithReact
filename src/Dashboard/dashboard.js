import React from 'react';
import { Clock } from "../Clock/Clock.js"
import { Menu } from "../Menu/menu.js"
import { Outlet } from "react-router-dom";

export function Dashboard(){
    return (
        <div>
            <Clock />
            <Menu />
            <Outlet />
        </div>           
     )
}
