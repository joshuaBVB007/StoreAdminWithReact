import React , { useState,useEffect }from "react";
import { frutas } from "../Header/Header"
import { Searcher } from "../Searcher/Searcher"

function ListaFrutas (){

    const [data,setData]=useState('');
    const [Fruits,setFruits]=useState([]);
    const [tablafrutas,setTablafrutas]=useState([])

    function UpdateInterface(e){
        setData(e);
        filterListProducts(e);
    }

    function filterListProducts(terminoBusqueda){
        var resultsFiltered=tablafrutas.filter((elemento)=>{
            if(elemento.Nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
              return elemento;
            }
          });
          setFruits(resultsFiltered);
    }

    useEffect(()=>{
        setFruits(frutas)
        setTablafrutas(frutas)
    },[])


    return(
        <div className="contenedor_frutas">
                <Searcher onJonathan={ UpdateInterface } />
                {/* <h1>{ dato }</h1> */}
                <ul>
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

class Input extends React.Component {

        constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this)
            this.insert=this.insert.bind(this);
            this.state = {temperature: ''};
        }

        insert(articulo,cantidad){
            console.log(articulo,cantidad);
        }
        handleClick(e){
            console.log(e.target.value);
            this.setState({temperature: e.target.value});
        }

        render(){
            const tempo=this.state.temperature;
            return (
                <div>
                    <input
                        placeholder="Cantidad?" 
                        value={ tempo }
                        onChange={ this.handleClick }
                    />
                    <button onClick={ () => this.insert(this.props.nombre,parseInt(tempo) ) }>Update</button>
                </div>
            )
        }
}

export function Frutas (props){
        return (
            <div>
                <ListaFrutas/>
            </div>
        )   
}


