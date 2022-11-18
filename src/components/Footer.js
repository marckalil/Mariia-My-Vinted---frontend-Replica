const Footer = (props) => {
  return props.color === true ? (
    <div style={{ backgroundColor: "#ebe9e9" }} className="footer">
      <div className="container">
        <div className="footer-section">
          <span>Politique de Confidentialité</span>
          <span className="condition-show">Cookies</span>
          <span className="hidden-footer">Politique de cookies</span>
          <span className="hidden-footer">Paramètres des cookies</span>
          <span>Termes et Conditions</span>
          <span>Notre plateforme</span>
          <span className="hidden-footer">Conditions de vente Pro</span>
          <span className="hidden-footer">Conditions d'utilisation Pro</span>
          <span className="condition-show">Conditions Pro</span>
        </div>
      </div>
      <p style={{ margin: 10 }}>
        Made by <span className="bold">Mariia MERCIER</span> with
        <span className="bold"> React</span>at
        <span className="bold"> Le Reacteur</span>
      </p>
    </div>
  ) : (
    <div style={{ backgroundColor: "white" }} className="footer">
      <div className="container">
        <div className="footer-section">
          <span>Politique de Confidentialité</span>
          <span className="condition-show">Cookies</span>
          <span className="hidden-footer">Politique de cookies</span>
          <span className="hidden-footer">Paramètres des cookies</span>
          <span>Termes et Conditions</span>
          <span>Notre plateforme</span>
          <span className="hidden-footer">Conditions de vente Pro</span>
          <span className="hidden-footer">Conditions d'utilisation Pro</span>
          <span className="condition-show">Conditions Pro</span>
        </div>
      </div>
      <p style={{ margin: 10 }}>
        Made by <span className="bold">Mariia MERCIER</span> with
        <span className="bold"> React</span>at
        <span className="bold"> Le Reacteur</span>
      </p>
    </div>
  );
};
export default Footer;
