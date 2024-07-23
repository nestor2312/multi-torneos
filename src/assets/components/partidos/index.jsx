/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";

const Partidos = ({ torneo }) => {
  const { categoriaId, subcategoriaId } = useParams();

  // Verifica si el torneo está definido
  if (!torneo) {
    return <div>Torneo no encontrado</div>;
  }

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

  // Muestra los partidos de la subcategoría
  return (
    <section className="Partidos">
      <div className="container mt-4">
        <div className="row">
          {subcategoria.grupos.map((grupo) =>
            grupo.equipos.map((equipo) =>
              equipo.partidos.map((partido) => (
                <div className="col-md-4 mb-4" key={partido.id}>
                  <div className="card card-matches d-flex justify-content-center align-items-center">
                    <div className="card-body d-flex justify-content-center align-items-center">
                      <div className="row">
                        <div className="col-4 d-flex justify-content-start align-items-center">
                          {/* <img
                            src={partido.equipoA.imagen}
                            className="logo2"
                            alt={partido.equipoA.nombre}
                          /> */}
                          <span className="team">{partido.local}</span>
                        </div>
                        <div className="col-4 d-flex flex-wrap align-content-around justify-content-center">
                          <span className="score">
                            {partido.marcador}
                          </span>
                        </div>
                        <div className="col-4 d-flex justify-content-end align-items-center">
                          <span className="team">{partido.oponente}</span>
                          {/* <img
                            src={partido.equipoB.imagen}
                            className="logo2"
                            alt={partido.equipoB.nombre}
                          /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Partidos;
