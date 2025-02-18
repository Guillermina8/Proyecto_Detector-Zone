import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Footer from "../footerPublico/Footer";
import HeaderSinNavBar from "../headerSinNavBar/HeaderSinNavBar";

const Login = () => {

  const [error, setError] = useState("");                                               //  useState Para gestionar estados locales
  const [mostrarContrasenya, setMostrarContrasenya] = useState(false);                              // Estado para mostrar/ocultar contraseña
  const navigate = useNavigate();          //useNavigate: Para redirigir a otras páginas después de iniciar sesión


  const handleSubmit = (e) => {

    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");                                             //Para mostrar y ocultar la contraseña.
    const API_URL = "http://localhost:3000"; 
    
    fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then(async (response) => {

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        }

        localStorage.setItem("username", data.mail_user);
        setError("");
        navigate("/home");
      })
      .catch((error) => {
        console.error("Error en la petición", error);
        setError(error.message);
      });
  };

  const redirectToRegistro = () => {
    navigate("/registro");
  };
  // Función para alternar visibilidad de la contraseña
  const contrasenyaVisible = () => {
    setMostrarContrasenya((valor) => !valor);
  };
  
  return (
    <>
      <HeaderSinNavBar />
      <main className="dash-body">
        <div className="contenedor">
          <form onSubmit={handleSubmit}>
            <h2 className="title">Iniciar sesión</h2>
            {error && <p className="error">{error}</p>}
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input type="email" id="email" name="email" placeholder="Introduce tu correo" required />
            </div>
            <div className="form-group password-container">
              <label htmlFor="password">Contraseña</label>
              <div >
                <input
                  type={mostrarContrasenya ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Introduce tu contraseña"
                  required
                />
                <span className="eye-icon" onClick={contrasenyaVisible}>
                  {mostrarContrasenya ? "👁️" : "🔒"}
                </span>
              </div>
            </div>
            <button type="submit" className="log-button">Iniciar sesión</button>
            <div className="options">
              <button type="button" className="forgot-password" 
              onClick={() => alert("Funcionalidad de recordar contraseña no implementada")}>
                ¿Olvidaste tu contraseña?
              </button>
              <button type="button" className="register-button" onClick={redirectToRegistro}>
                ¿No tienes cuenta? Regístrate
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Login;


