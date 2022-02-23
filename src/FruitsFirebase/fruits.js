import React,{ useState,useEffect } from "react";
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

var frutas=[];

const starCountRef = ref(db, 'Productos/Frutas');
onValue(starCountRef, (snapshot) => {
const data = snapshot.val();
for (const key of Object.values(data)) {
    //Esta introduciendo un objeto
    frutas.push(key.Nombre);
    console.log(key.Nombre);
}
});


export function Jonathan (){

        const [frutitas,setFrutas] = useState([]);
        const [dato,setBusqueda]= useState("");

        useEffect(() => {
            setFrutas(frutas);
        },[])

        const OnchangeIsActive=e=>{
            setBusqueda(e.target.value);
            filtrar(e.target.value);
        }

        const filtrar=(terminoBusqueda)=>{
            var resultadosBusqueda=frutitas.filter((elemento,index,array)=>{
              if(elemento.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
              ){
                return elemento;
              }
            });
            setFrutas(resultadosBusqueda);

            if(terminoBusqueda.toString()===""){
                console.log("cadena vacia")
                setFrutas(frutas);
            }
        }
    
        return (
            <div>
                <div className="searcher">
                    <input type="text" value={dato} onChange={OnchangeIsActive} required={true}  placeholder="Introduce el nombre del producto"></input>
                </div>  
                <div className="contenedor_frutas">
                    <ul>
                    { frutitas.map((item)=>(
                        <li key={item}>{item}</li>
                    ))}
                    </ul> 
                </div>
            </div>
        )   
}


