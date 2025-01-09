import ResultCard from 'components/ResultCard';
import './styles.css';
import { useState } from 'react';
import axios from 'axios';
import { error } from 'console';

type FormData = {
  user: string;
};

type UserInfo = {
  avatar_url: string;
  url: string;
  name: string;
  location: string;
  followers: string;
};

const ProfileSearch = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>();

  const [formData, setFormData] = useState<FormData>({
    user: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${formData.user}`)
      .then((response) => {
        setUserInfo(response.data);
      })
      .catch((error) => {
        setUserInfo(undefined);
        console.log(error);
      });
  };

  return (
    <div className="profile-search-container">
      <div className="search-box">
        <h1>Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="user"
              value={formData.user}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      {userInfo && (
        <>
          <ResultCard
            img_src={userInfo.avatar_url}
            profile={userInfo.url}
            followers={userInfo.followers}
            location={userInfo.location}
            name={userInfo.name}
          />
        </>
      )}
    </div>
  );
};

export default ProfileSearch;
