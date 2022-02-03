import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Home,About,Dashboard } from "../Header/Header.js"


export function RoutingApp(){
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="dashboard" element={<Dashboard />} />
            </Routes>
        </div>
    );
}
