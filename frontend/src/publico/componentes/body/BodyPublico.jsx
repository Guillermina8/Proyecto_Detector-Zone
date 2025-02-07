import React from "react";
import { useNavigate } from "react-router-dom";  // Importamos el hook useNavigate
import imagen from "../../../assets/images/detector_atardecer_Hombre1.png";
import "./BodyPublico.css";

function BodyPublico() {

    const navigate = useNavigate(); // Inicializa useNavigate
    // Función para redirigir al registro
    const redirectToRegistro = () => {
        navigate("/registro");
    };
   return (
    <>
        <div className="left-section">
            <h1> Bienvenido a <span className="platform-name">Detector Zone</span> </h1>
            <p>Descubre una comunidad donde la innovación, la creatividad y las mejores
             experiencias te esperan.</p>
            <h2> ¿Qué te ofrecemos?</h2>
            <ul>
                <li>✅ Acceso a contenido exclusivo.</li>
                <li>✅ Conéctate con personas que comparten tus intereses.</li>
                <li>✅ Descubre productos y servicios diseñados para ti.</li>
                <li>✅ Sé parte de una experiencia interactiva en tiempo real.</li>
            </ul>
            <p className="highlight-text">🔐 <strong>Regístrate ahora</strong> y empieza
             a disfrutar de todas las ventajas que tenemos para ti.</p>
            <div className="button-group">
                <button className="btn-join" onClick={redirectToRegistro}>Únete</button>
                <button className="btn-info">Más Información</button>
            </div>
        </div>
        <div className="container">
        <div className="right-section">
            <img src={imagen} alt="Imagen del dashboard" className="dashboard-img" />
        </div>
        </div>
    </>
);}

export default BodyPublico;
