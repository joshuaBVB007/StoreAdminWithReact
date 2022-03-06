import React from 'react';
import { Routes, Route } from "react-router-dom";
import { About } from "../About/About";
import { Dashboard } from '../Dashboard/dashboard';


export function RoutingApp(){
    return (
        <div>
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="about" element={<About />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </div>
    );
}
