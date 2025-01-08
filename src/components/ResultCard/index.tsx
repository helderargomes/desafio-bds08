import './styles.css';

const ResultCard = () => {
  return (
    <div className="result-container">
      <div className="img-container">
        <img src="https://avatars.githubusercontent.com/u/13897257?v=4" alt="user_avatar" />
      </div>
      <div className="info-container">
        <h2 className="info-title-container">Informações</h2>

        <div className="info-data-container">
          <h3>Perfil:&nbsp;</h3>
          <a href='/'>https://api.github.com/users/acenelio</a>
        </div>
        <div className="info-data-container">
          <h3>Seguidores:&nbsp;</h3>
          <span>4379</span>
        </div>
        <div className="info-data-container">
          <h3>Localidade:&nbsp;</h3>
          <span>Uberlândia</span>
        </div>
        <div className="info-data-container">
          <h3>Nome:&nbsp;</h3>
          <span>Nelio Alves</span>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
