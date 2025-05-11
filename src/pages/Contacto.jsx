import React from "react";
import './Contacto.css';
import {supabase} from '../supabaseClient';
import { useState } from "react";

function Contacto() {
    const [form, setForm] = useState({
        nombre: '',
        email: '',
        mensaje: '',
    });

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Enviar datos al backend
        const { error } = await supabase.from('contacto').insert([form]);

        if (error) {
            alert('Error al enviar el mensaje');
            console.error(error);
        } else {
            alert('Mensaje enviado con éxito');
            setForm({ nombre: '', email: '', mensaje: '' }); // Reseteamos el formulario
        }
    }

    return (
        <section className="contacto">
            <h2>Contáctame</h2>
            <p>Si deseas conversar sobre algún proyecto o un presupuesto para un proyecto, contactame</p>
            <form className="formulario" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nombre" // Definir el nombre aquí
                    placeholder="Tu nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email" // Definir el nombre aquí
                    placeholder="Tu email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="mensaje" // Definir el nombre aquí
                    placeholder="Tu mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Enviar</button>
            </form>
            <div className="redes-sociales">
                <a href="https://www.linkedin.com/in/alejandro-gonzalez-1a7115265" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.github.com/Alejandro20983" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="mailto:alejandropulido2809@gmail.com" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-envelope"></i>
                </a>
            </div>
        </section>
    );
}

export default Contacto;
