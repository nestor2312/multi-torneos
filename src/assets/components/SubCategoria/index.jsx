/* eslint-disable react/prop-types */
import { Link, Outlet, useParams } from "react-router-dom";
import "./index.css"

const Subcategoria = ({ torneo }) => {
  const { torneoId, categoriaId, subcategoriaId } = useParams();

  // Busca la categoría y subcategoría dentro del torneo
  const categoria = torneo.categorias.find((cat) => cat.id === categoriaId);
  if (!categoria) {
    return <div>Categoría no encontrada</div>;
  }

  const subcategoria = categoria.subcategorias.find(
    (subcat) => subcat.id === subcategoriaId
  );
  if (!subcategoria) {
    return <div>Subcategoría no encontrada</div>;
  }

  // Extraer el primer grupo de la subcategoría
 

  return (
    <section className="Subcategoria">
      <nav className="navbar navbar-expand-md nav-color">
        <Link className="navbar-brand" to={`/torneo/${torneoId}`}>
          ← {subcategoria.nombre}
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li>
              <Link to={`/torneo/${torneoId}/categoria/${categoriaId}/subcategoria/${subcategoriaId}/inicio`}>Inicio</Link>
            </li>
            <li>
              <Link to={`/torneo/${torneoId}/categoria/${categoriaId}/subcategoria/${subcategoriaId}/partidos`}>Partidos</Link>
            </li>
            <li>
              <Link to={`/torneo/${torneoId}/categoria/${categoriaId}/subcategoria/${subcategoriaId}/jugadores`}>Jugadores</Link>
            </li>
            <li>
              <Link to={`/torneo/${torneoId}/categoria/${categoriaId}/subcategoria/${subcategoriaId}/clasificacion`}>Tabla de clasificación</Link>
            </li>
            <li>
              <Link to={`/torneo/${torneoId}/categoria/${categoriaId}/subcategoria/${subcategoriaId}/equipos`}>Equipos</Link>
            </li>
          </ul>
        </div>
      </nav>

  

      <Outlet /> {/* subrutas anidadas */}
      
    </section>
  );
};

export default Subcategoria;
