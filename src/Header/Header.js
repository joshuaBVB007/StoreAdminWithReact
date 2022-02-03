import React from 'react';
import { Link } from "react-router-dom";


export class Header extends React.Component {
  render() {
    return (
      <header class="header">
        <nav>
            <img class="img1" src="/logo192.png" alt="principal_photo"/>
            <h6 class="titulo">School Admin</h6>
            <ul class="nav_links">
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="about">About</Link>
                </li>
                <li>
                  <Link to="about">Doesn't function</Link>
                </li>
            </ul>
        </nav>
      </header>
    );
  }
}

export function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

export function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

