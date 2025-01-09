import './styles.css';

type Props = {
  img_src: string;
  profile: string;
  followers: string;
  location: string;
  name: string;
}


const ResultCard = ( {img_src, profile, followers, location, name} : Props) => {
  return (
    <div className="result-container">
      <div className="img-container">
        <img src={img_src} alt="user_avatar" />
      </div>
      <div className="info-container">
        <h2 className="info-title-container">Informações</h2>

        <div className="info-data-container">
          <h3>Perfil:&nbsp;</h3>
          <span><a href={profile} className='link-primary link-underline'>{profile}</a></span>
        </div>
        <div className="info-data-container">
          <h3>Seguidores:&nbsp;</h3>
          <span>{followers}</span>
        </div>
        <div className="info-data-container">
          <h3>Localidade:&nbsp;</h3>
          <span>{location}</span>
        </div>
        <div className="info-data-container">
          <h3>Nome:&nbsp;</h3>
          <span>{name}</span>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
