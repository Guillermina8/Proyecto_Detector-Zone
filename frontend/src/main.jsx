import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/styles/global.css'; 

import Login from './publico/componentes/login/Login.jsx';
import Registro from './publico/componentes/registro/Registro.jsx';
import HomePublico from './publico/componentes/home/HomePublico.jsx';
import HomePrivado from './privado/componentes/home/HomePrivado.jsx';
import Nosotros from './publico/componentes/nosotros/Nosotros.jsx';
import TyC from './publico/componentes/terminos/TyC.jsx';
import PPrivacidad from './publico/componentes/pprivacidad/PPrivacidad.jsx';
import Contacto from './publico/componentes/contacto/Contacto.jsx';
import Comunidad from './privado/componentes/comunidad/Comunidad.jsx';
import Eventos from './privado/componentes/eventos/Eventos.jsx';
import Productos from './privado/componentes/productos/Productos.jsx';
import Zonas from './privado/componentes/zonas/Zonas.jsx';
import Suscripcion from './privado/componentes/suscripcion/Suscripcion.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/home" element={<HomePrivado />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/privacy-policy" element={<PPrivacidad />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/terminos" element={<TyC />} />
        
        {/* Redirigir la raíz a login */}
        <Route path="/" element={<HomePublico />} />
        <Route path="/comunidad" element={<Comunidad />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/zonas" element={<Zonas />} />
        <Route path="/suscripcion" element={<Suscripcion />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
