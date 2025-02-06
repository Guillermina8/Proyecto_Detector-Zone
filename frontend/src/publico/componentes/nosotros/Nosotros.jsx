import React from "react";
import "./homePrivado.css";


import Header from "../header/Header.jsx";
import Footer from "../footerPublico/Footer.jsx";

function Nosotros() {


    return (
        <div className="dashboard-container">
            {/* Menu */}
            <Header />
            {/* Cuerpo */}
            <main className="dashboard-body">
            <div className="nosotros-container">
             {/* Sección de texto */}
            <div className="nosotros-texto">
              <h1>Sobre Nosotros</h1>
                  <p>
                 Somos una empresa joven y dinámica, apasionada por la innovación tecnológica y comprometida con ofrecer soluciones que marcan la diferencia en el mundo digital.
                  </p>
                  <p>
                    Nos mueve la curiosidad, el deseo de explorar nuevas fronteras y el entusiasmo por conectar con personas que comparten nuestras mismas inquietudes. Creemos en el poder de la tecnología para transformar vidas y en la importancia de mantenernos fieles a nuestros valores de integridad, colaboración y crecimiento continuo.
                 </p>
                 <p>
                   Somos unos enamorados del mundo de la afición por los detectores, disfrutamos de cada aventura al aire libre, explorando nuevos lugares, rodeados de naturaleza y descubriendo historias ocultas bajo la superficie.
                 </p>
                 <p>
                      Viajar, conocer nuevas culturas y conectar con personas afines es lo que nos inspira a seguir adelante. Cada experiencia nos enriquece y nos motiva a crear productos que no solo sean útiles, sino que también despierten la misma pasión que sentimos por lo que hacemos.
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

export default Nosotros;