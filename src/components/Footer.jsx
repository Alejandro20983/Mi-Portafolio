import React from "react";
import './Footer.css';

function Footer(){
    return(
        <footer className="footer">
            <p>©{new Date().getFullYear()} Alejandro Pulido todos los derechos reservados</p>
        </footer>
    );
}
export default Footer;