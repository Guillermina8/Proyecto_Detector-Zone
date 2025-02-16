import React from "react";            // Creo el componente
import "./HomePrivado.css";           // Importo los estilos 

// Importo desde carpeta  componentes/públicos.
import Header from "../../../publico/componentes/header/Header.jsx";
import Footer from "../../../publico/componentes/footerPublico/Footer";

//Defino el Componente
function HomePrivado() {

    return (
        <div className="dashboard-container">
            {/* Renderizo Menu */}
            <Header />
            {/* Cuerpo */}
            <main>
                <h1 className="titulo">Bienvenido a Detector Zone</h1>
                <p className="subtitulo"> Explora las últimas novedades, participa en la comunidad y accede a todos los recursos exclusivos.</p>
                
                <div className="dashboard-body">
                    <section className="section-news">
                        <h2>Últimas Noticias</h2>
                        <article>
                            <h3>🏆 ¡El ganador de la Gamificación 2024 nos cuenta su experiencia!</h3>
                            <p>Descubre cómo logró posicionarse como el mejor y sus consejos para mejorar tu desempeño.</p>
                            <p>Nos cuenta como fue su experiencia durante el el 2024, después de ganar el torneo nacional y 4 torneos a nivel regional, ha participado en el  ya es toda una leyenda para nosotros. </p>
                        </article>
                        <article>
                            <h3>¿Dónde se practica la detección del ocio?</h3>
                            <p>La detección de metales es una actividad de ocio que se practica preferentemente en las playas que bordean sus costas (más raramente en las tierras interiores). Con su litoral soleado y sus playas abarrotadas en verano, España ofrece un terreno de juego ideal para los
                                aficionados a la detección, ya sean principiantes o experimentados. Ya sea en las playas de la Costa Brava, la Costa del Sol o las Islas Baleares, los detectores de metales permiten descubrir una gran variedad de objetos: joyas perdidas, monedas o recuerdos enterrados en la arena.
                                Sin embargo, es importante señalar que la práctica de la detección de metales en España está regulada por normativas estrictas. Cada comunidad autónoma puede imponer sus propias reglas, lo que significa que es fundamental informarse antes de comenzar. En las playas públicas,
                                la detección suele estar permitida, pero en ciertas zonas protegidas o en sitios clasificados como patrimonio arqueológico, pueden ser necesarias autorizaciones específicas. Por ejemplo, está prohibido prospectar cerca de ruinas antiguas o vestigios históricos, bajo pena de sanciones.</p>
                        </article>
                        <article>
                            <h3>📅 Nuevos Eventos Disponibles</h3>
                            <p>No te pierdas las actividades grupales que se vienen este mes. Reserva tu plaza ahora.</p>
                            <button className="btn-more">Ver Eventos</button>
                        </article>
                    </section>

                    <article>
                        <h3>¿Dónde se practica la detección como hobbie?</h3>
                        <p>La detección de metales es una actividad de ocio que se practica preferentemente en las playas que bordean sus costas (más raramente en las tierras interiores). Con su litoral soleado y sus playas abarrotadas en verano, España ofrece un terreno de juego ideal para los
                            aficionados a la detección, ya sean principiantes o experimentados. Ya sea en las playas de la Costa Brava, la Costa del Sol o las Islas Baleares, los detectores de metales permiten descubrir una gran variedad de objetos: joyas perdidas, monedas o recuerdos enterrados en la arena.
                            Sin embargo, es importante señalar que la práctica de la detección de metales en España está regulada por normativas estrictas. Cada comunidad autónoma puede imponer sus propias reglas, lo que significa que es fundamental informarse antes de comenzar. En las playas públicas,
                            la detección suele estar permitida, pero en ciertas zonas protegidas o en sitios clasificados como patrimonio arqueológico, pueden ser necesarias autorizaciones específicas. Por ejemplo, está prohibido prospectar cerca de ruinas antiguas o vestigios históricos, bajo pena de sanciones.</p>
                    </article>
                    <article>
                        <h3>🏆 ¡El ganador de la Gamificación 2024 nos cuenta su experiencia!</h3>
                        <p>Descubre cómo logró posicionarse como el mejor y sus consejos para mejorar tu desempeño.</p>
                        <p>Nos cuenta como fue su experiencia durante el el 2024, después de ganar el torneo nacional y 4 torneos a nivel regional, ha participado en el  ya es toda una leyenda para nosotros. </p>
                    </article>
                    {/*Noticias */}
                </div>

            </main>
            {/* Renderizo Footer */}
            <Footer />
        </div>
    );
}

export default HomePrivado;
