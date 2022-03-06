import React from 'react';
import { Link } from "react-router-dom";

import { initializeApp } from 'firebase/app';
import { getDatabase,ref,onValue } from "firebase/database";

//FIREBASE BEGINS
const firebaseConfig = {
    apiKey: "AIzaSyCUelzJLvuyI-3A8jWHRUWAS8vgugL5hrc",
    authDomain: "yasaibackend.firebaseapp.com",
    projectId: "yasaibackend",
    //linea requerida en realtime database para conectar con la base de datos
    databaseURL: "https://yasaibackend-default-rtdb.europe-west1.firebasedatabase.app",
    storageBucket: "yasaibackend.appspot.com",
    messagingSenderId: "838306389759",
    appId: "1:838306389759:web:ea9799c4bc0fabb885b6ca",
    measurementId: "G-EWXR6F76NK"
};
export const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
//FIREBASE ENDED

export var frutas=[];

const starCountRef = ref(db, 'Productos/Frutas');
onValue(starCountRef, (snapshot) => {
const data = snapshot.val();
for (const key of Object.values(data)) {
    //Esta introduciendo un objeto
    frutas.push(key);
    // console.log(key);
}
});

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
                  <Link to="dashboard" state={{ fromDashboard: true }}>Dashboard</Link>
                </li>
            </ul>
        </nav>
      </header>
    );
  }
}



