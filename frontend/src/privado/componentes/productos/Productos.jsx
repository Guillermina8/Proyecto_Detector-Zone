import React from "react";
import Header from "../../../publico/componentes/header/Header";
import Footer from "../../../publico/componentes/footerPublico/Footer";


function Productos() {
    return (
        <div className="dashboard-container">
            {/* Renderizo Menu */}
            <Header />     
            {/* Cuerpo */}
            <main className="dashboard-body">
            <h1>Productos</h1>
            <p>Página en construcción</p>
            </main>
            {/* Renderizo Footer */}
            <Footer />
        </div>
    );
}

export default Productos;
