/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';
import "./index.css"
const Clasificacion = ({ torneo }) => {
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





    <section className="Equipos">
    

<div className="container">
    <div className="row">
      
                {subcategoria.grupos.map(grupo => (
            <div  key={grupo.id} className="col-12 col-sm-12 col-md-6 mt-4">
                <div className="card border-0 shadow">
                    <div  className="card-header fondo-card TITULO border-0">{grupo.nombre} </div>
                    <div className="card table-responsive border-0 table-sm">
                   
                        <table className="table-borderless" >
                         
                            <tbody>
                                <tr className="py-2">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                  
                                    <td className="movil titulo2">pj</td>
                <td className="movil titulo2">pg</td>
                <td className="movil titulo2">pe</td>
                <td className="movil titulo2">pp</td>
                <td className="movil titulo2">gf</td>
                <td className="movil titulo2 hiden">gc</td>
                <td className="movil titulo2">pts</td> 
                                </tr>
                              
                                       {grupo.clasificacion.map((datos_clasificacion, i) => (
                        <tr key={i} className={i < 2 ? 'clasificacion' : ''}>
                                        <td className="number"></td>
                                        <td>
                                          {/* <img src={ss} width="5%" className="logo"> */}
                                        </td>
                                        <td className="movil data text-left team">{datos_clasificacion.equipo}</td>
                                        <td className="movil data">{datos_clasificacion.partidos_jugados}</td>
                                        <td className="movil data">{datos_clasificacion.victorias}</td>
                                        <td className="movil data">{datos_clasificacion.empates}</td>
                                        <td className="movil data">{datos_clasificacion.derrotas}</td>
                                        <td className="movil data">{datos_clasificacion.goles_a_favor}</td>
                                        <td className="movil data">{datos_clasificacion.goles_diferencia}</td>

                                        <td className="movil data">{datos_clasificacion.goles_en_contra}</td>
                                        <td className="movil data">{datos_clasificacion.puntos}</td>
                                       
                                    </tr>
                             
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
             ))}
     
    </div>

    
</div>


    </section>
    
    
  );
};

export default Clasificacion;
