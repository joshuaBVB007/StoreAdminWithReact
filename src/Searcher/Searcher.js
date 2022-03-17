import React , { useState,useEffect }from "react";

export class Searcher extends React.Component {
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
            onChange={ this.updateInterface } 
            className="buscador_productos" />
        )
    }
}