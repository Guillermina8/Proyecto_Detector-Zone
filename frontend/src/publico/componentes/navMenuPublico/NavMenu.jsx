import React from "react";
import { Link } from "react-router-dom"; // Para permitir la navegación
import "./NavMenu.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavMenu = () => {
    const navigate = useNavigate(); // Para redirigir después del logout
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("username") ? true : false);
    // const isLoggedIn = !localStorage.getItem("username"); // Verifica si hay un usuario logueado

    console.log("Usuario logeado----:", isLoggedIn);

    const cerrarSesion = () => {
        localStorage.removeItem("username"); // Eliminar usuario del localStorage
        setIsLoggedIn(false); // Actualizar estado
        navigate("/"); // Redirigir al inicio
    };

    return (
        <nav className="menu">
            {isLoggedIn && ( // Mostrar solo si está logueado
                <div className="links">
                    <Link to={isLoggedIn ? "/home" : "/"} className="menu-item">Inicio</Link>
                    <Link to="/comunidad" className="menu-item">Comunidad</Link>
                    <Link to="/eventos" className="menu-item">Eventos</Link>
                    <Link to="/productos" className="menu-item">Productos</Link>
                    <Link to="/zonas" className="menu-item">Zonas</Link>
                    <Link to="/suscripcion" className="menu-item">Suscripción</Link>
                </div>
            )}
            {/* Si NO está logueado, mostrar botones de Acceso y Registro */}
            {!isLoggedIn ? (
                <>
                    <Link to="/login" className="menu-item btn-large">Acceso</Link>
                    <Link to="/registro" className="menu-item btn-large">Únete</Link>
                </>
            ) : (
                <button onClick={cerrarSesion} className="menu-item btn-large">Cerrar sesión</button>
            )}

        </nav>
    );
};

export default NavMenu;