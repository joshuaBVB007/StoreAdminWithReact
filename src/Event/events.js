import React  from 'react'

export function Events() {

    function getData(){
      console.log("funciona")
    }

    return (
      <div className="events_contenedor">
        <input type="text" className="events_input" placeholder="Nombre"></input>
        <input type="text" className="events_input" placeholder="Nombre"></input>
        <input type="text" className="events_input" placeholder="Nombre"></input>
        <input type="text" className="events_input" placeholder="Nombre"></input>
        <button className="events_buttom" onClick={ () => getData() } >Insert</button>
      </div>
    );
  }