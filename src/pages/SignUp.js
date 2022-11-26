import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import {
  EmailInput,
  Input,
  PasswordInput
} from "../components";


const SignUp = ({ token, setToken, handleToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsLetter] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [picture, setPicture] = useState("");

  const navigate = useNavigate();

  const handleUserSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (!email || !username || !password) {
      setErrorMessage("Veuillez remplir touts les champs");
    } else {
      try {
        const formData = new FormData();
        formData.append("username", username);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("newsletter", newsletter);
        formData.append("picture", picture);

        await axios.post(
          "https://site--vinted-backend--b4q4rvkfdvcr.code.run/user/signup",
          formData
        );

        navigate("/user/login");
      } catch (error) {
        if (error.response?.status === 409) {
          setErrorMessage(
            "Veuillez mettre l'adresse email ne pas encore utilisé"
          );
        }
        if (error.response?.data.message === "The element missing") {
          setErrorMessage("Veuillez remplir touts les champs");
        }
      }
    }
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <form className="register-form" onSubmit={handleUserSubmit}>
        <h1>S'inscrire</h1>
        <Input
          name="name"
          type="text"          
          onChange={onUsernameChange}
          placeholder="Your name"
          value={username}
        />
        <p className="error">{errorMessage}</p>
        <EmailInput
          email={email}
          onEmailChange={onEmailChange}
        />
        <PasswordInput
          onPasswordChange={onPasswordChange}
          password={password}
        />
        <div className="button-avatar">
          <span>Selectionnez la photo de profile</span>
          <label className="photo-avatar" htmlFor="photo-register">
            Photo
          </label>
          <input
            style={{ display: "none" }}
            id="photo-register"
            name="chosir la photo"
            type="file"
            onChange={(event) => {
              setPicture(event.target.files[0]);
            }}
          ></input>
        </div>
        <div className="newsletter">
          <div className="checkbox-news">
            <input
              className="input-checkbox"
              checked={newsletter}
              type="checkbox"
              onChange={(event) => {
                setNewsLetter(!newsletter);
              }}
            ></input>

            <span>S'inscrire à notre newsletter</span>
          </div>
          <p className="news">
            Je souhaite recevoir par e-mail des offres personnalisées et les
            dernières mises à jour Vinted
          </p>
        </div>

        <button className="register-button" type="submit">
          S'inscrire
        </button>
        <Link className="redirection" to="/user/login">
          Tu as déjà un compte? connecte - toi!
        </Link>
      </form>
      <Footer />
    </>
  );
};

export default SignUp;
