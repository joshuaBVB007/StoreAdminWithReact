import React , { useState,useEffect }from "react";
import { frutas } from "../Header/Header"

function ListaFrutas (){

    const [dato,setDato]=useState('');
    const [Frutas,setFrutas]=useState([]);
    const [tablafrutas,setTablafrutas]=useState([])

    function ActualizameInterfaz(e){
        setDato(e);
        filtrar(e);
    }

    function filtrar(terminoBusqueda){
        var resultadosBusqueda=tablafrutas.filter((elemento)=>{
            if(elemento.Nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
              return elemento;
            }
          });
          setFrutas(resultadosBusqueda);
    }

    useEffect(()=>{
        setFrutas(frutas)
        setTablafrutas(frutas)
    },[])


    return(
        <div className="contenedor_frutas">
                <Buscador onJonathan={ ActualizameInterfaz } />
                {/* <h1>{ dato }</h1> */}
                <ul>
                        { Frutas.map((item)=>(
                            <div className="card" key={item.Nombre}>
                                <h1 className="card-title">{item.Nombre}</h1>
                                <img className="card-img" src={item.url} alt="jona"/>
                                <h6>
                                    <span className="span_card">Stock: </span>{item.Cantidad} KG
                                </h6>
                            </div>
                        ))}
                </ul> 
        </div>
    )
}

class Buscador extends React.Component {
    constructor(props) {
        super(props);
        this.updateInterface= this.updateInterface.bind(this)
    }

    updateInterface(e){
        this.props.onJonathan(e.target.value);
    }
    render() {
        const producto=this.props.productoBuscado;
        return (
            <input placeholder="Introduce el producto"
            value={ producto } 
            onChange={ this.updateInterface }  />
        )
    }
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


