import React from "react";
import Header from "../header/Header.jsx";
import Footer from "../footerPublico/Footer.jsx";

function PPrivacidad() {


    return (
        <div className="dashboard-container">
            {/* Menu */}
            <Header />
            {/* Cuerpo */}
            <main className="dashboard-body">
            <div className="nosotros-container">
             {/* Sección de texto */}
            <div className="nosotros-texto">
              <h1>Política de privacidad</h1>
                  <p>
                 Página en construcción
                  </p>
             </div>          
               {/* Sección de imagen */}
                 <div className="nosotros-imagen">
                    <img src="ruta/a/la/imagen.jpg" alt="Imagen de la empresa" />
                  </div>
               </div>
                    </main>
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default PPrivacidad;