import React from "react";
import './Contacto.css';

function Contacto(){
    return(
        <section className="contacto">
            <h2>Contactame</h2>
            <p>Si deseas conversar sobre algún proyecto o un presupuesto para un proyecto contactame</p>
            <form className="formulario">
                <input type="text" placeholder="Tu nombre" required/>
                <input type="email" placeholder="Tu email" required/>
                <textarea placeholder="Tu mensaje" required></textarea>
                <button type="submit">Enviar</button>
            </form>
            <div className="redes-sociales">
                <a href="https://www.linkedin.com/in/alejandro-gonzalez-1a7115265" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.github.com/Alejandro20983" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="alejandropulido2809@gmail.com" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-envelope"></i>
                </a>
            </div>
        </section>
    );
}
export default Contacto;