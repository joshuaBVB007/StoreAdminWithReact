import React from 'react'


function BoilingVerdict(props){
        return (
            <h1>Hola soy jonathan</h1>
        )
}

export class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.UpdateInterface=this.UpdateInterface.bind(this);
        this.state={ dato: ''};
    }

    UpdateInterface(e){
        console.log(e.target.value)
        this.setState({dato:e.target.value})
    }

    render() {
        const datoIngresado=this.state.dato;
        return(
            <div>
                <input placeholder="Introduce el nombre" value={datoIngresado} onChange={this.UpdateInterface} />
            </div>
        )
    }
}