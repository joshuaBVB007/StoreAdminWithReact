import React from 'react';
import ReactDOM from 'react-dom';


// function Jonathan(props) {
//   return <h1>Hola {props.property}</h1>
// }

class Jonathan extends React.Component {
  render() {
    return <h1>Hola { this.props.property }</h1>
  }
}

//propiedad que luego la pasaremos como parametros
export const name = 'Josh Perez';
//pasamos name como parametro a traves de { property }
export const element = <Jonathan property={ name }/>;

