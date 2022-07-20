import React , { useState,useEffect }from "react";
import { frutas } from "../Header/Header"
import { Searcher } from "../Searcher/Searcher"

function ListaFrutas (){

    const [Fruits,setFruits]=useState([]);
    const [tablafrutas,setTablafrutas]=useState([])

    function UpdateInterface(e){
        filterListProducts(e);
    }
    function filterListProducts(terminoBusqueda){
        var resultsFiltered=tablafrutas.filter((elemento)=> elemento.Nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()));
        setFruits(resultsFiltered);
    }
    useEffect(()=>{

        let ToSaveOnLocalStorage={frutas:frutas};

        localStorage.setItem("cod_frutas",JSON.stringify(ToSaveOnLocalStorage));
        let retrieve=localStorage.getItem("cod_frutas");
        let defFrutas=JSON.parse(retrieve).frutas;
        console.log(defFrutas);
        setFruits(defFrutas);
        setTablafrutas(frutas)
    },[])


    return(
        <div className="contenedor_frutas">
                <Searcher onJonathan={ UpdateInterface } />
                {/* <h1>{ dato }</h1> */}
                <ul className="responsive_fruits">
                        { Fruits.map((item)=>(
                            <div className="card" key={item.Nombre}>
                                <h1 className="card-title">{item.Nombre}</h1>
                                <img className="card-img" src={item.url} alt="jona"/>
                                <h6>
                                    <span className="span_card">Stock: {item.Cantidad} KG </span>
                                </h6>
                            </div>
                        ))}
                </ul> 
        </div>
    )
}

export function Frutas (props){
        return (
            <div>
                <ListaFrutas/>
            </div>
        )   
}


