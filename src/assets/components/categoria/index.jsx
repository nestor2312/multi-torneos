/* eslint-disable react/prop-types */

import { Link, useParams } from 'react-router-dom';
import "./index.css"
const Categoria = ({ torneo }) => {
  const { torneoId, categoriaId } = useParams();

  // Encuentra la categoría dentro del torneo usando el id
  const categoria = torneo.categorias.find(cat => cat.id === categoriaId);

  if (!categoria) {
    return <div>Categoría no encontrada</div>;
  }

  return (
    <section className="categoria">
      <h1>{categoria.nombre}</h1>
      {categoria.subcategorias.map((subcategoria) => (
        <Link key={subcategoria.id}  to={`/torneo/${torneoId}/categoria/${categoriaId}/subcategoria/${subcategoria.id}`}>
          <h2 >{subcategoria.nombre}</h2>
        </Link>
      ))}
    </section>
  );
};

export default Categoria;
