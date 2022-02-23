import React from 'react';
import { Link } from "react-router-dom";

export class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <nav>
            <img className="img1" src="/logo192.png" alt="principal_photo"/>
            <h6 className="titulo">Store Admin</h6>
            <ul className="nav_links">
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="dashboard">Dashboard</Link>
                </li>
            </ul>
        </nav>
      </header>
    );
  }
}



