/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';

const Grupos = ({ torneo }) => {
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

  // Muestra los grupos de la subcategoría
  return (
    <section className="Grupos">
      <h2>Grupos de {subcategoria.nombre}</h2>
      <ul>
        {subcategoria.grupos.map(grupo => (
          <li key={grupo.id}>{grupo.nombre}</li>
        ))}
      </ul>
    </section>
  );
};

export default Grupos;
