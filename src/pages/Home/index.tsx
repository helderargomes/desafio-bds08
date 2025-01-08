import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-title-container">
        <h1>Desafio Github API</h1>
        <h2>DevSuperior - Escola de programação</h2>
      </div>

      <div>
        <Link to="/profilesearch">
          <button className="btn btn-primary btn-lg start-button">
            Começar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
