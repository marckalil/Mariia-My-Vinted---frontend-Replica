import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

import OfferInfo from "../components/OfferInfo";

const Offers = ({
  search,
  limit,
  setLimit,
  priceSort,
  setPriceSort,
  page,
  setPage,
  priceMax,
  setPriceMax,
  priceMin,
  setPriceMin,
}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--vinted-backend--b4q4rvkfdvcr.code.run/offers",
          {
            params: {
              priceMax: priceMax,
              priceMin: priceMin,
              title: search,
              limit: limit,
              sort: priceSort,
              page: page,
            },
          }
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response?.data);
      }
    };
    fetchData();
  }, [priceMin, priceMax, limit, page, priceSort, search]);

  const handlePriceChangeMax = (event) => {
    setPriceMax(event.target.value);
  };

  const handlePriceChangeMin = (event) => {
    setPriceMin(event.target.value);
  };

  const handlePageChange = (event) => {
    setLimit(event.target.value);
  };

  return isLoading ? (
    <>
      <div className="loading">
        <p>En cours de chargement...</p>
      </div>{" "}
      <Footer />
    </>
  ) : (
    <>
      <div className="container">
        <div className="filters">
          <h2 className="title">Toutes les articles</h2>
          <div className="content-filters">
            <div className="content-filters-left">
              <div className="asc">
                <button
                  style={{ display: "flex", alignItems: "center" }}
                  onClick={(event) => {
                    setPriceSort("price - asc");
                  }}
                  className="checkbox"
                  type="checkbox"
                >
                  ↑
                </button>
                <span>Prix croissant </span>
              </div>
              <div className="desc">
                <button
                  style={{ display: "flex", alignItems: "center" }}
                  className="checkbox"
                  onClick={(event) => {
                    setPriceSort("price - dsc");
                  }}
                >
                  ↓
                </button>
                <span>Prix décroissant </span>
              </div>
              <div>
                <input
                  className="price-input"
                  type="number"
                  value={priceMin}
                  placeholder="Prix min, €"
                  onChange={handlePriceChangeMin}
                />
                <input
                  className="price-input"
                  type="number"
                  value={priceMax}
                  placeholder="Prix max, €"
                  onChange={handlePriceChangeMax}
                />
              </div>
            </div>
            <div>
              <select className="articles-page" onChange={handlePageChange}>
                <option>Nombre d'article par page</option>
                <option>5</option>
                <option>15</option>
                <option>20</option>
                <option>25</option>
                <option>30</option>
              </select>
            </div>
          </div>
          <div className="content actu">
            {data.offers.map((element) => {
              return (
                <OfferInfo
                  search={search}
                  display={true}
                  elem={element}
                  key={element._id}
                />
              );
            })}
          </div>
          <div className="pages">
            <button
              onClick={() => {
                setPage(1);
              }}
            >
              1
            </button>
            <button
              onClick={() => {
                setPage(2);
              }}
            >
              2
            </button>
            <button
              onClick={() => {
                setPage(3);
              }}
            >
              3
            </button>
            <button
              onClick={() => {
                setPage(4);
              }}
            >
              4
            </button>
            <button
              onClick={() => {
                setPage(page + 1);
              }}
            >
              {">"}
            </button>
            <span>...</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Offers;
