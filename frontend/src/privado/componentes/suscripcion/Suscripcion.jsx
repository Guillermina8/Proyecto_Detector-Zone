import React from "react";
import Header from "../../../publico/componentes/header/Header";
import Footer from "../../../publico/componentes/footerPublico/Footer";
import imagen from "../../../assets/images/Planes_Suscrip.png";
import "./Suscripcion.css"

function Suscripcion() {
    return (
        <div className="dashboard-container">
            {/* Renderizo Menu */}
            <Header />     
            {/* Cuerpo */}
            <main className="dashboard-body-1">
            <h1>Suscripcion</h1>
            <div className="imagen1">
                 <img src={imagen} alt="imagen" />
             </div>
            <p>Página en construcción</p>


            </main>
            {/* Renderizo Footer */}
            <Footer />
        </div>
    );
}

export default Suscripcion;
