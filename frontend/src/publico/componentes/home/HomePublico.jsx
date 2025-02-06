import React from "react";
import "./HomePublico.css";

import Header from "../header/Header";
import Footer from "../footerPublico/Footer";
import BodyPublico from "../body/BodyPublico";

//página de inicio pública.

function HomePublico() {
    return (
        <div className="dashboard-container">
            {/* Menu */}
            <Header />
            {/* Cuerpo */}
            <main className="dashboard-body">
            <BodyPublico />
            </main>
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default HomePublico;
