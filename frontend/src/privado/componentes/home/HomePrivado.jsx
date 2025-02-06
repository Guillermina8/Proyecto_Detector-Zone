import React from "react";            // Creo el componente
import "./HomePrivado.css";           // Importo los estilos 

// Importo desde carpeta  componentes/públicos.
import Header from "../../../publico/componentes/header/Header.jsx";
import Footer from "../../../publico/componentes/footerPublico/Footer";

//Defino el Componente
function HomePrivado () {


    return (
        <div className="dashboard-container">
            {/* Renderizo Menu */}
            <Header />     
            {/* Cuerpo */}
            <main className="dashboard-body">
            <h1>Bienvenido al Panel Privado</h1>
            <p>Aquí encontrarás información exclusiva para usuarios registrados.</p>
            </main>
            {/* Renderizo Footer */}
            <Footer />
        </div>
    );
}

export default HomePrivado;
