import { Link } from "react-router-dom";

const OfferInfo = ({ elem, display }) => {
  return (
    elem.owner && (
      <div>
        {display && (
          <div className="account">
            {elem.owner.account.avatar ? (
              <img
                src={elem.owner.account.avatar.secure_url}
                alt="user"
                style={{ height: 25, width: 25, borderRadius: 50 }}
              ></img>
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
            <span style={{ fontSize: 12 }}>{elem.owner.account.username}</span>
          </div>
        )}

        <Link to={`/offer/${elem._id}`} className="card">
          <div>
            <div className="">
              <img src={elem.product_image.secure_url} alt="offre" />
              <div className="price">
                <span>{elem.product_price.toFixed(2)}€ ⓘ</span>
                <span>
                  <i
                    style={{ color: "rgb(140, 140, 140)", fontSize: 16 }}
                    className="fa-regular fa-heart"
                  ></i>
                </span>
              </div>
              {elem.product_details.map((detail, num) => {
                return (
                  <div key={num}>
                    <p>{detail.MARQUE}</p>
                    {detail.TAILLE ? <p>{detail.TAILLE}</p> : null}
                  </div>
                );
              })}
            </div>
          </div>
        </Link>
      </div>
    )
  );
};

export default OfferInfo;
