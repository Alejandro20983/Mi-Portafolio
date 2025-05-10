import React from 'react';
import './Sobremi.css';

function Sobremi(){
    return(
        <div className='sobre-mi'>
            <h1>Sobre Mí</h1>
            <p>
                Como en la pagina Principal lo dice soy un desarrollador full stack apasionado por crear 
                experiencias digitales unicas, que a los usuarios les escante ya que ultimamente estoy entendiendo,
                que ser programador no es solo un trabajo también es un arte al agregar animaciones, detalles y mucho más
            </p>
            <br/>
            <p>
                Mencionado anteriormente me gusta aprender constantemente,
                mejorar y seguir desarrollando mis habilidades, un sueño que tengo y se que cumplire es ser un 
                desarrollador de videojuegos, me costara bastante ya que existen tecnologías que constante mente se actualizan, pero 
                espero algún día cumplirlo
            </p>
            <br/>
            <p>
                En mis tiempos libres me gusta jugar un juego de cartas llamado Yu-Gi-Oh, además de jugar videojuegos,
                escuchar musica, leer libros, y aunque sea un trabajo tambien me gusta crear ideas nuevas para programar
            </p>
            <br/>
            <div className='formacion'>
                <h2>Formación Académica & Certificados</h2>
            </div>
            <div className='estudio'>
                <h3>Técnico Superior Universitario en Informatica</h3>
                <p>IUTA 2020-2023</p>
            </div>
            <div className='estudio'>
                <h3>Curso en desarrollador full stack</h3>
                <p>Undemy 2020-2022</p>
            </div>
            <div className='estudio'>
                <h3>Certificación de uso en Git & GitHub</h3>
                <p>Undemy 2020-2021</p>
            </div>
        </div>
    );
}
export default Sobremi;