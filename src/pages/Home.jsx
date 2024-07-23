/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Home = ({ torneo }) => {
  return (
    <section className="Home">
   <Link to={`/torneo/${torneo.id}`}>
        <h1>{torneo.nombre}</h1>
      </Link>
  </section>
  );
};

export default Home;
