import React from 'react'

export function Menu(){

    return (
        <div className="menu">
            <button className="menu_button">
                <img className="tool" src="/escribir.png" alt="torta"></img>
            </button>
            <button to="/dashboard" className="menu_button">
                <img className="tool" src="/goma-de-borrar.png" alt="torta"></img>
            </button>
        </div>
    );
}