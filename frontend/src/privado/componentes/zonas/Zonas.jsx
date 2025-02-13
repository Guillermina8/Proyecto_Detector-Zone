import React from "react";
import Header from "../../../publico/componentes/header/Header";
import Footer from "../../../publico/componentes/footerPublico/Footer";


function Zonas() {
    return (
        <div className="dashboard-container">
            {/* Renderizo Menu */}
            <Header />     
            {/* Cuerpo */}
            <main className="dashboard-body">
            <h1>Zonas</h1>
            <p>Página en construcción</p>
            </main>
            {/* Renderizo Footer */}
            <Footer />
        </div>
    );
}

export default Zonas;
