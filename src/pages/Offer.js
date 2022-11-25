import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../components/Footer";

const Offer = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--vinted-backend--b4q4rvkfdvcr.code.run/offer/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.data.response);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <div className="loading">
      <p>En chargement...</p>
      <Footer color={true} />
    </div>
  ) : (
    <>
      <section className="section-offer">
        <div className="container">
          <div className="section-offer-photo">
            <img src={data.product_image.secure_url} alt="offer" />
          </div>

          <div className="section-offer-decription">
            <div className="section-details">
              <span className="section-offer-price">
                {data.product_price.toFixed(2)} €
              </span>
              <ul>
                {data.product_details.map((detail, index) => {
                  const keys = Object.keys(detail)[0];
                  return (
                    <div className="details" key={index}>
                      <li>
                        <span className="keys">{keys} : </span>
                      </li>
                    </div>
                  );
                })}
                {data.product_details.map((detail, index) => {
                  const keys = Object.keys(detail)[0];
                  return (
                    <div className="details" key={index}>
                      <li>
                        <span className="detail-keys">{detail[keys]}</span>
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
            <div className="section-article">
              <p style={{ fontWeight: "bold" }}>{data.product_name}</p>
              <p>{data.product_description}</p>
              <div className="account">
                {data.owner.account.avatar ? (
                  <img
                    src={data.owner.account.avatar.secure_url}
                    alt="userAvatar"
                    style={{ width: 25, height: 25, borderRadius: 50 }}
                  />
                ) : (
                  <div
                    style={{
                      width: 25,
                      height: 25,
                      borderRadius: 50,
                      backgroundColor: "grey",
                    }}
                  ></div>
                )}
                <span>{data.owner.account.username}</span>
              </div>
              <div className="buy">
                <Link
                  to="/pay"
                  state={{
                    price: data.product_price.toFixed(2),
                    title: data.product_name,
                  }}
                >
                  <button className="offer-section-button">Acheter</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer color={true} />
    </>
  );
};

export default Offer;
