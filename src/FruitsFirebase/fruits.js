import React,{ usestate } from "react";
import { useLocation } from "react-router-dom";
import { frutas } from "../Header/Header"

class ListaFrutas extends React.Component {

    constructor(props) {
        super(props);
        this.fruits = frutas;
    }

    render(){
        return(
            <div className="contenedor_frutas">
                    <ul>
                    { this.fruits.map((item)=>(
                        <div className="card" key={item.Nombre}>
                            <h1 className="card-title">{item.Nombre}</h1>
                            <img className="card-img" src={item.url} alt="jona"></img>
                            <h6>
                                <span className="span_card">Stock: </span>{item.Cantidad} KG
                            </h6>
                            <Input nombre={item.Nombre} ></Input>
                        </div>
                    ))}
                    </ul> 
        </div>
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


