/* eslint-disable react/prop-types */
import { Link, useParams } from 'react-router-dom';
import "./index.css"

const Equipos = ({ torneo }) => {
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
    <section >
      <div className="container">
        <div className="container-fluid ">
          <div className="col-12 col-sm-12 col-md-12 mt-4">
            <div className="card border-0 shadow ">
              <div className="card-header fondo-card TITULO border-0">{subcategoria.nombre} Equipos</div>
              <div className="card-body">
                {subcategoria.grupos.map(grupo => (
                  <div className="row justify-content-around " key={grupo.id} >
                    {grupo.equipos.map(equipo => (
                      <Link to="link" className="team-item2" key={equipo.id}> 
                        <div className="inner-card mt-3 d-flex flex-wrap align-content-end justify-content-center">
                          <div>
                            <img src={equipo.nombre} width="50%" className="d-block mx-auto my-3 logomovil" alt={equipo.nombre} />
                            <h6 className='text-center team'>{equipo.nombre}</h6>
                          </div>
                        </div>
                      </Link> 
                    ))}
                  </div> 
                ))}
              </div>
            </div>
          </div>
        </div> 
      </div>

      </section>
  );
};

export default Equipos;
