import React from 'react';

export function About(){
        
        function Change(position,anterior){
            var grande=document.querySelector(".grande");
            var punto=document.querySelectorAll(".punto");
            let operacion= position * -50;
            grande.style.transform=`translateX(${ operacion }%)`;
            punto[position].classList.value="punto activo";
            punto[anterior].classList.value="punto";
        }
        
        return(
            <div className="principal">
                <div className="carousel">
                    <div className="grande">
                        <img src="/bakery_background.png" alt="img" className="img"></img>
                        <img src="/bakery_background.png" alt="img" className="img"></img>
                    </div>
                    <ul className="puntos">
                        <li onClick={ () => {Change(0,1)} } className="punto"></li>
                        <li onClick={ () => {Change(1,0)} } className="punto"></li>
                    </ul>
                </div>
                <div className="cards">
                        <div id="card">
                                <h1>Tip:Comer</h1>
                                <img src="/assets/postre7.jpeg" alt="img_card" className="img_card"></img>
                                <p>Un bollo puede ser largo y delgado, corto y redondo y con formas y tamaños diferentes. Es un alimento generalmente consumido en desayunos y meriendas.</p>
                        </div>
                        <div id="card">
                                <h1>Tip:Comer</h1>
                                <img src="/assets/postre7.jpeg" alt="img_card" className="img_card"></img>
                                <p>Un bollo puede ser largo y delgado, corto y redondo y con formas y tamaños diferentes. Es un alimento generalmente consumido en desayunos y meriendas.</p>
                        </div>
                        <div id="card">
                                <h1>Tip:Comer</h1>
                                <img src="/assets/postre7.jpeg" alt="img_card" className="img_card"></img>
                                <p>Un bollo puede ser largo y delgado, corto y redondo y con formas y tamaños diferentes. Es un alimento generalmente consumido en desayunos y meriendas.</p>
                        </div>
                </div>
            </div>
        )

}