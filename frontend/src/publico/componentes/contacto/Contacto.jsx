import React from "react";
import Header from "../header/Header.jsx";
import Footer from "../footerPublico/Footer.jsx";
import "./Contacto.css"; // Importamos el CSS

function Contacto() {
  return (
    <div className="dashboard-container">
      <Header />
      <main className="contact-main">
        <div className="contact-container">
          {/* Sección de texto */}
          <div className="contact-text">
            <h1>Contacto</h1>
            <p>Página en construcción</p>

            <form className="contact-form">
              <label>
                Nombre
                <input type="text" placeholder="Tu nombre" />
              </label>

              <label>
                Correo Electrónico
                <input type="email" placeholder="tucorreo@example.com" />
              </label>

              <label>
                Mensaje
                <textarea rows="4" placeholder="Escribe tu mensaje aquí"></textarea>
              </label>

              <button type="submit">Enviar</button>
            </form>
          </div>

          {/* Sección de imagen */}
          <div className="contact-image">
            <img src="ruta/a/la/imagen.jpg" alt="Imagen de contacto" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Contacto;
