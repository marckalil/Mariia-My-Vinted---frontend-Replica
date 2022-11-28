import { Link } from "react-router-dom";
import { OfferDetails } from './OfferDetails';
import { Price } from './Price';

export const Offer = ({ id, details, image, price }) => {
  const link = `/offer/${id}`;
  return (
    <Link to={link} className="card">
      <img src={image} alt="offre" />
      <Price price={price} />
      <OfferDetails details={details} />
    </Link>
  );
};