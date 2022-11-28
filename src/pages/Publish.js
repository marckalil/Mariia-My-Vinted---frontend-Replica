import Footer from "../components/Footer";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Publish = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [condition, setCondition] = useState("");
  const [color, setColor] = useState("");
  const [city, setCity] = useState("");
  const [image, setImage] = useState(null);

  // tu n'utilises pas data, tu peux donc supprimer ton state
  const [data, setData] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < image.length; i++) {
      formData.append("image", image[i]);
    }

    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("size", size);
    formData.append("brand", brand);
    formData.append("color", color);
    formData.append("condition", condition);
    formData.append("city", city);

    try {
      const response = await axios.post(
        "https://site--vinted-backend--b4q4rvkfdvcr.code.run/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Inutilie puisque tu n'utilise pas data
      setData(response.data);
      alert("L'offre vient d'être publiée");
    } catch (error) {
      console.error("catch>>>", error.response.data);
    }
  };

  return token ? (
    <div className="publish-page">
      <form className="post-article" onSubmit={handleSubmit}>
        <h1>Vends ton article</h1>
        <section className="post-photo">
          <div className="comment">
            <span>Ajoute jusqu'à 20 photos.</span>
          </div>

          <div className="photo-vente">
            <label className="button-photo" htmlFor="picture">
              + Ajouter une photo
            </label>
            <input
              style={{ display: "none" }}
              id="picture"
              type="file"
              name="+ Ajouter une photo"
              onChange={(event) => {
                setImage(event.target.files);
              }}
              multiple
            ></input>
          </div>
        </section>
        <section className="post-description">
          <div className="post-description-title">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              placeholder="ex: Chemise Sézane verte"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            ></input>
          </div>
          <div className="post-description-text">
            <label htmlFor="description">Decris ton article</label>{" "}
            <textarea
              id="description"
              className="test"
              rows="10"
              cols="55"
              placeholder="ex: porté quelquefois, taille correctement"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            ></textarea>
          </div>
        </section>
        <section className="post-description article-details">
          <div>
            <label htmlFor="brend">Marque</label>
            <input
              id="brend"
              placeholder="ex: Zara"
              onChange={(event) => {
                setBrand(event.target.value);
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="size">Taille</label>
            <input
              id="size"
              type="text"
              placeholder="ex: L/40/12"
              onChange={(event) => {
                setSize(event.target.value);
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="color">Couleur</label>
            <input
              id="color"
              type="text"
              placeholder="ex: rose"
              onChange={(event) => {
                setColor(event.target.value);
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="condition">Etat</label>
            <input
              id="condition"
              type="text"
              placeholder="très bon état"
              onChange={(event) => {
                setCondition(event.target.value);
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="city">Lieu</label>
            <input
              id="city"
              type="text"
              placeholder="ex: Paris"
              onChange={(event) => {
                setCity(event.target.value);
              }}
            ></input>
          </div>
        </section>
        <section className="post-description-price">
          <label htmlFor="price">Prix</label>
          <input
            id="price"
            type="number"
            placeholder="0.00 €"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          ></input>
        </section>
        <div className="submit">
          <button type="submit">Ajouter</button>
        </div>
      </form>

      <Footer color={true} />
    </div>
  ) : (
    <Navigate to="/user/login" />
  );
};

export default Publish;
