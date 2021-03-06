import React from 'react';

export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    tick() {
        this.setState({
          date: new Date()
        });
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    render(){
        return(
            <div className="toolbar">
                <h4> <img className="relog" src="/reloj.png" alt="toolbar" /> { this.state.date.toLocaleTimeString() }</h4>
            </div>
        )
    }
}