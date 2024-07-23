/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';

const Jugadores = ({ torneo }) => {
  const { categoriaId, subcategoriaId } = useParams();

  // Busca la categoría y subcategoría dentro del torneo
  const categoria = torneo.categorias.find(cat => cat.id === categoriaId);
  if (!categoria) {
    return <div>Categoría no encontrada</div>;
  }

  const subcategoria = categoria.subcategorias.find(subcat => subcat.id === subcategoriaId);
  if (!subcategoria) {
    return <div>Subcategoría no encontrada</div>;
  }

  return (
    <section className="Jugadores">
      <h2>Jugadores de {subcategoria.nombre}</h2>
      {subcategoria.grupos.map(grupo => (
        <div key={grupo.id}>
          <h3>{grupo.nombre}</h3>
          {grupo.equipos.map(equipo => (
            <div key={equipo.id}>
              <h4>{equipo.nombre}</h4>
              <ul>
                {equipo.jugadores.map(jugador => (
                  <li key={jugador.id}>{jugador.nombre}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Jugadores;
