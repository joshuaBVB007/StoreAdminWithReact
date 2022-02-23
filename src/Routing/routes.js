import React from 'react';
import { Routes, Route } from "react-router-dom";
import { About } from "../About/About";
import { Jonathan } from '../FruitsFirebase/fruits';


export function RoutingApp(){
    return (
        <div>
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="about" element={<About />} />
                <Route path="dashboard" element={<Jonathan />} />
                {/* <Route path="dashboard" element={<Dashboard />} >
                    <Route path="expenses" element={<Products />} />
                    <Route path="frutas" element={<Products />} />
                </Route> */}
            </Routes>
        </div>
    );
}
