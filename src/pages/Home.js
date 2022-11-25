import { useEffect, useState } from "react";
import axios from "axios";
import Dechirure from "../assets/images/dechirure.svg";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";

import OfferInfo from "../components/OfferInfo";
import Footer from "../components/Footer";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    const response = await axios.get(
      "https://site--vinted-backend--b4q4rvkfdvcr.code.run/offers"
    );

    setData(response.data);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <>
      <div className="loading">
        <p>En cours de chargement...</p>{" "}
      </div>
      <Footer />
    </>
  ) : (
    <div className="homepage">
      <div className="banner">
        <div className="container form-banner">
          <form>
            <h1>Prêts à faire du tri dans vos placards?</h1>
            <Link to="/offer/publish">
              <button>Vends maintenant</button>
            </Link>
            <p>Découvrir comment ça marche</p>
          </form>
          <img className="dechirure" src={Dechirure} alt="deco"></img>
        </div>
      </div>

      <div className="container">
        <section>
          <div className="articlePopulaire">
            <span className="title">Articles populaires</span>
            <Link to="/offers">
              <span className="voir">Voir tout</span>
            </Link>
          </div>
          <div className="content populaire">
            {data.offers.map((elem, index) => {
              return index < 5 && <OfferInfo elem={elem} key={index} />;
            })}
            <Link to="/offers" className="seeMoreArticle">
              Voir touts les articles
            </Link>
          </div>
        </section>

        <section className="searchMarque">
          <h2 className="title">Recherche par marques</h2>
          <div className="brend">
            {data.offers.map((elem, id) => {
              return (
                id < 20 && (
                  <div key={id}>
                    <div>
                      {elem.product_details.map((detail, number) => {
                        return (
                          detail.MARQUE && (
                            <span className="span-brend" key={number}>
                              {detail.MARQUE}
                            </span>
                          )
                        );
                      })}
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </section>
        <section className="fil-actu">
          <h2 className="title">Fil d'actu</h2>
          <div className="content actu">
            {data.offers.map((element) => {
              return (
                <OfferInfo display={true} elem={element} key={element._id} />
              );
            })}
          </div>
        </section>
        <div className="voir-plus">
          <Link to="/offers">
            <button>Voir plus</button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
