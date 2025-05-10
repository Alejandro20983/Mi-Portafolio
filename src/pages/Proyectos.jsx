import React from "react";
import './Proyecto.css';

function Proyectos(){
    return(
        <section className="proyectos">
            <h2>Mis Proyectos</h2>
            <div className="proyectos-grid">
                <div className="proyecto-card">
                    <img src="/img/portafolio.png" alt="Proyecto 1"/>
                    <h3>Social-Match</h3>
                    <p>Descipcioon</p>
                    <a href="#">Ir a la pagina</a>
                </div>
            
                <div className="proyecto-card">
                    <img src="/img/portafolio.png" alt="Proyecto 1"/>
                    <h3>Calculadora Freelancer</h3>
                    <p>Descripcion</p>
                    <a href="#">Ir a la pagina</a>
                </div>
                {/*Se duplicaran más tarjetas para proximos proyectos */}
            </div>
        </section>
    );
}
export default Proyectos;