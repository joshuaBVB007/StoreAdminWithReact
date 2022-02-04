import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Products } from "../Products/products";
import { About } from "../About/About";
import { Dashboard } from "../Dashboard/dashboard"


export function RoutingApp(){
    return (
        <div>
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="about" element={<Products />} />
                <Route path="dashboard" element={<Dashboard />} />
            </Routes>
        </div>
    );
}
