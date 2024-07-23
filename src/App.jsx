import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import datos from './db/datos.json';
import Torneo from './assets/components/Torneo/Index';
import Categoria from './assets/components/categoria';
import Subcategoria from './assets/components/SubCategoria';
import Grupos from './assets/components/grupos';
import Equipos from './assets/components/equipos';
import Partidos from './assets/components/partidos';
import Clasificacion from './assets/components/clasificacion';
import Jugadores from './assets/components/jugadores/Index';
import Footer from './assets/components/footer';
import Inicio from './assets/components/inicio_subcategoria';

function App() {
  const Torneodatos = datos.torneo; // Asegúrate de tener datos definidos aquí

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home torneo={Torneodatos} />} />
        <Route path="/torneo/:torneoId" element={<Torneo torneo={Torneodatos} />} />
        <Route path="/torneo/:torneoId/categoria/:categoriaId" element={<Categoria torneo={Torneodatos} />} />
        <Route path="/torneo/:torneoId/categoria/:categoriaId/subcategoria/:subcategoriaId/" element={<Subcategoria torneo={Torneodatos} />}>
        <Route path="inicio" element={<Inicio torneo={Torneodatos} />} />
          <Route path="grupos" element={<Grupos torneo={Torneodatos} />} />
          <Route path="equipos" element={<Equipos torneo={Torneodatos} />} />
          <Route path="partidos" element={<Partidos torneo={Torneodatos} />} />
          <Route path="jugadores" element={<Jugadores torneo={Torneodatos} />} />
          <Route path="clasificacion" element={<Clasificacion torneo={Torneodatos} />} />
          {/* Agrega más subrutas según sea necesario */}
        </Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
