import React from "react";
import Header from "../../../publico/componentes/header/Header";
import Footer from "../../../publico/componentes/footerPublico/Footer";
import imagen from "../../../assets/images/detection_atardecer.png";

function Componentes() {
    return (
        <div className="dashboard-container">
            {/* Renderizo Menu */}
            <Header />     
            {/* Cuerpo */}
            <main className="dashboard-body">
            <h1>Comunidad</h1>
            <p>Página en construcción</p>
            <section class="section-gallery">
                    <h2>Galería</h2>
                    <div class="carousel">
                        <div class="carousel-item">
                            <img src={imagen} alt="Descripción 1" />
                            <p>#DetectorZone, disfrutando de otro hermoso atardecer sobre el mar.</p>
                        </div>
                    </div>
                </section>
            </main>
            {/* Renderizo Footer */}
            <Footer />
        </div>
    );
}

export default Componentes;
