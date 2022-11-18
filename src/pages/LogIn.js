import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const LogIn = ({ handleToken, setId, id }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (!email || !password) {
      setErrorMessage("Veuillez remplir touts les champs");
    } else {
      try {
        const response = await axios.post(
          "https://site--vinted-backend--b4q4rvkfdvcr.code.run/user/login",
          {
            email: email,
            password: password,
          }
        );

        // console.log(response.data);
        handleToken(response.data.token);
        setId(response.data._id);

        navigate("/");
      } catch (error) {
        // console.log(error.message);
        if (error.response?.status === 401) {
          setErrorMessage("Le mail ou le monts de passes n'est pas correct");
        }
        if (error.response?.data === "The element missing") {
          setErrorMessage("Veuillez remplir touts les champs");
        }
      }
    }
  };

  return (
    <>
      <form className="connection-form" onSubmit={handleLogin}>
        <h1>Se connecter</h1>
        <input
          className="input-text"
          type="email"
          placeholder="Adresse email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        ></input>
        <input
          className="input-text"
          type="password"
          placeholder="Mots de passe"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        ></input>

        <p className="error">{errorMessage}</p>
        <button className="connection-button" type="submit">
          Se connecter
        </button>
        <Link className="redirection" to="/user/signup">
          Pas encore de compte? Inscris-toi!
        </Link>
      </form>
      <Footer />
    </>
  );
};

export default LogIn;