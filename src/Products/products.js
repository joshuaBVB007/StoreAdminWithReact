import React from 'react';

//un array de valores
const numbers = [1, 2, 3, 4, 5];
//en lisItems almacenaremos los valores doblados
const listItems = numbers.map( number =>
  <li key={number.toString()}>
    {number}
    {console.log(number)}
  </li>
);

export class Products extends React.Component {
  render(){
    return (
        <ul>{listItems}</ul>
    );
  }
} 
