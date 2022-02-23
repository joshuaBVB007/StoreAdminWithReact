import React from 'react'
import { useNavigate } from "react-router-dom";

export function Menu(){
    let navigate = useNavigate();

    return (
        <div className="menu">
            <button className="menu_button">
                <img className="tool" src="/escribir.png" alt="torta"></img>
            </button>
            <button onClick={ () => { navigate("/dashboard/frutas") }}  className="menu_button">
                <img className="tool" src="/goma-de-borrar.png" alt="torta"></img>
            </button>
        </div>
    );
}