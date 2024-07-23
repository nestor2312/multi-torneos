/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import "./Index.css";

const Torneo = ({ torneo }) => {
  return (
    <section className="container Torneo">
      <h1>{torneo.nombre}</h1>
      {torneo.categorias.map((categoria) => (
        <div key={categoria.id}>
          <h2>{categoria.nombre}</h2>
          <div className="categorias">
            {categoria.subcategorias.map((subcategoria) => (
              <Link
                className="categoria"
                key={subcategoria.id}
                to={`/torneo/${torneo.id}/categoria/${categoria.id}/subcategoria/${subcategoria.id}/inicio`}
              >
                {subcategoria.nombre}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Torneo;
