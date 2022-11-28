const Footer = (props) => {
  // Trouver un meilleur nom pour props.color qui doit plutôt exprimer une règle
  const backgroundColor = props.color ? "#ebe9e9" : "white";

  return (
    <div style={{ backgroundColor }} className="footer">
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
        <span className="bold"> React</span> at
        <span className="bold"> Le Reacteur</span>
      </p>
    </div>
  );
};

export default Footer;
