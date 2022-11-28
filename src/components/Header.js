import logo from "../assets/images/logo.png";

import { Link } from "react-router-dom";

const Header = ({
  token,
  handleToken,
  search,
  setSearch,
  handleSearchChange,
}) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="enTête">
            <Link to="/">
              <img className="logo" src={logo} alt="logo" />
            </Link>
            <div className="search-bar-article menu-bar">
              <select className="menu">
                <option value="articles">Articles</option>
                <option value="membres">Membres</option>
                <option value="forum">Forum</option>
                <option value="centre d'aide">Centre d'aide</option>
              </select>
              <input
                className="bar-search"
                type="text"
                name="search"
                value={search}
                placeholder="Rechercher des articles"
                onChange={handleChange}
                onKeyDown={handleSearchChange}
              />
            </div>
            <div className="menu-bar">
              {token ? (
                <>
                  <button
                    onClick={() => handleToken(null)}
                    className="deconnection"
                  >
                    Deconnexion
                  </button>

                  <Link to="/offer/publish">
                    <button className="sell">Vends tes article </button>
                  </Link>
                  <button className="help">?</button>
                  <select className="language">
                    <option value="français">Français (French)</option>
                    <option value="anglais">English (English)</option>
                    <option value="espagnol">Espagnol (Spanish)</option>
                    <option value="allemand">Nederlands (Dutch)</option>
                  </select>
                </>
              ) : (
                <div className="buttons-enTête">
                  <div className="authantification">
                    <Link to="/user/signup">
                      <button className="register">S'inscrire</button>
                    </Link>

                    <Link to="/user/login">
                      <button className="connect">Se connecter</button>
                    </Link>
                  </div>
                  <Link to="/offer/publish">
                    <button className="sell">Vends tes article </button>
                  </Link>

                  <button className="help">?</button>
                  <select className="language">
                    <option>Français (French)</option>
                    <option>English (English)</option>
                    <option>Espagnol (Spanish)</option>
                    <option>Néderlands (Dutch)</option>
                  </select>
                </div>
              )}
            </div>{" "}
            <i className="fa-solid fa-bars show"></i>
          </div>
        </div>
      </header>
      <header>
        <div className="top-bar">
          <select className="menu show">
            <option value="articles">Articles</option>
            <option value="membres">Membres</option>
            <option value="forum">Forum</option>
            <option value="centre d'aide">Centre d'aide</option>
          </select>
          <input
            className="bar-search show"
            type="text"
            name="search"
            value={search}
            placeholder="Rechercher des articles"
            onChange={handleChange}
          />

          <nav className="topBar container menu-bar">
            <span>Femmes</span>
            <span>Hommes</span>
            <span>Enfants</span>
            <span>Maison</span>
            <span>Divertissement</span>
            <span>Animaux</span>
            <span>A propos</span>
            <span>Notre plateforme</span>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
