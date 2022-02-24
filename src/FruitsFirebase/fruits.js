import React,{ useState,useEffect } from "react";
import { frutas } from '../Header/Header'


export function Frutas (){

        const [frutitas,setFrutas] = useState([]);
        const [dato,setBusqueda]= useState("");

        useEffect(() => {
            setFrutas(frutas);
        },[])

        const OnchangeIsActive=e=>{
            setBusqueda(e.target.value);
            filtrar(e.target.value);
        }

        const filtrar=(terminoBusqueda)=>{
            var resultadosBusqueda=frutitas.filter((elemento,index,array)=>{
              if(elemento.Nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
              ){
                return elemento;
              }
            });
            setFrutas(resultadosBusqueda);

            if(terminoBusqueda.toString()===""){
                console.log("cadena vacia")
                setFrutas(frutas);
            }
        }
    
        return (
            <div>
                <div className="searcher">
                    <input type="text" value={dato} onChange={OnchangeIsActive} required={true}  placeholder="Introduce el nombre del producto"></input>
                </div>  
                <div className="contenedor_frutas">
                    <ul>
                    { frutitas.map((item)=>(
                        <div className="card" key={item.Nombre}>
                            <h1 className="card-title">{item.Nombre}</h1>
                            <img className="card-img" src={item.url}></img>
                            <h6>{item.Cantidad}</h6>
                        </div>
                    ))}
                    </ul> 
                </div>
            </div>
        )   
}


