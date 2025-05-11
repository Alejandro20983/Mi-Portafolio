import React from "react";
import './Contacto.css';
import {supabase} from '../supabaseClient';
import { useState } from "react";

function Contacto(){

    const [form, setForm] = useState({
        nombre: '',
        email: '',
        mensaje: '',
    });

    const handleChange = (e) =>{
        setForm({...form,[e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
    
        const {error} = await supabase.from('contacto').insert([form]);

        if(error){
            alert('Error al enviar el mensaje')
            console.error(error);
        }else{
            alert('Mensaje enviado con exito')
            setForm({nombre : '', email:'',mensaje:''});
        }
    }
    return(
        <section className="contacto">
            <h2>Contactame</h2>
            <p>Si deseas conversar sobre algún proyecto o un presupuesto para un proyecto contactame</p>
            <form className="formulario" onSubmit={handleSubmit}>
                <input type="text" placeholder="Tu nombre" value={form.nombre} onChange={handleChange} required/>
                <input type="email" placeholder="Tu email" value={form.email} onChange={handleChange}  required/>
                <textarea placeholder="Tu mensaje" value={form.mensaje} onChange={handleChange} required></textarea>
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