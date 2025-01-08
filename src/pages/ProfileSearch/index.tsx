import './styles.css';

const ProfileSearch = () => {
  return (
    <div className="profile-search-container">
      <div className="search-box">
        <h1>Encontre um perfil Github</h1>
        <form>
          <div className="form-container">
            <input
              type="text"
              className="search-input"
              placeholder="Usuário Github"
            />
          </div>
        </form>
        <button type="submit" className="btn btn-primary search-button">
          Encontrar
        </button>
      </div>
    </div>
  );
};

export default ProfileSearch;
