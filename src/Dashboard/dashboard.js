import React from 'react';

const numbers = [1, 2, 3, 4];
const listItems = numbers.map((number) =>
        <ul class="ulli">
            <li class="lili" key={number.toString()}>
                <div class="card">
                    <img  src="/assets/school.png"  alt="..."/>
                    <div>
                        <h1>Gestion</h1>
                    </div>
                </div>
            </li>
        </ul>
);


export class Dashboard extends React.Component {
    render() {
        return (
            listItems
        )
    }
}