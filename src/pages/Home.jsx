import React from "react";
import logo from '../assets/logo.jpg';
import './Home.css';
function Home(){
    return(
        <div className="home">
            <img src={logo} alt="Mi logo" className="home-logo"/>
            <h1>Hola soy Alejandro Gonzalez</h1>
            <p className="descripcion">
                Soy un desarrollador full stack con poca experiencia en el desarrollo de aplicaciones web.
                Me gusta aprender nuevas tecnologias y mejorar mis habilidades.
                Actualmente estoy aprendiendo React y Node.js, este porfatolio esta creado 
                con React y el backend esta creado con Node.js, además podran encontrar en la sección de proyectos 
                dos proyectos más que he realzizado, uno de estos fue una aplicación de citas y el otro es una calculador 
                de freelancer, ambos proyectos fueron realizados con React y Node.js
            </p>
            <h2>Mis Habilidades Principales</h2>
            <div className="habilidades">
                <span>
                    <i className="fab fa-html5"></i>HTML
                    <span className="estrellas">⭐⭐⭐⭐⭐</span>
                    </span>
                <span>
                    <i className="fab fa-css3-alt"></i>CSS
                    <span className="estrellas">⭐⭐⭐⭐⭐</span>
                </span>
                <span>
                    <i className="fab fa-js"></i>JavaScript
                    <span className="estrellas">⭐⭐⭐</span>
                </span>
                <span>
                    <i className="fab fa-react"></i>React
                    <span className="estrellas">⭐⭐⭐</span>
                </span>
                <span>
                    <i className="fab fa-node"></i>Node.js
                    <span className="estrellas">⭐⭐</span>
                </span>
                <span>
                    <i className="fab fa-git"></i>Git&GitHub
                    <span className="estrellas">⭐⭐⭐</span>
                </span>
                <span>
                    <i className="fas fa-laptop-code"></i>Diseño Responsive
                    <span className="estrellas">⭐⭐⭐⭐</span>
                </span>
            </div>
        </div>
    );
}

export default Home;