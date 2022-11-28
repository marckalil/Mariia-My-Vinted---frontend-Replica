import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { EmailInput, PasswordInput } from "../components";

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

        handleToken(response.data.token);
        setId(response.data._id);

        navigate("/");
      } catch (error) {
        if (error.response?.status === 401) {
          setErrorMessage("Le mail ou le monts de passes n'est pas correct");
        }
        if (error.response?.data === "The element missing") {
          setErrorMessage("Veuillez remplir touts les champs");
        }
      }
    }
  };
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <form className="connection-form" onSubmit={handleLogin}>
        <h1>Se connecter</h1>
        <EmailInput
          email={email}
          onEmailChange={onEmailChange}
        />
        <PasswordInput
          onPasswordChange={onPasswordChange}
          password={password}
        />

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
