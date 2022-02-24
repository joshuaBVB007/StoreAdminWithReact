import React from 'react';
import { Clock } from "../Clock/Clock.js"
import { Menu } from "../Menu/menu.js"
import { Frutas } from '../FruitsFirebase/fruits.js';

export function Dashboard(){
    return (
        <div>
            <Clock />
            <Menu />
            <Frutas/>
        </div>           
     )
}
