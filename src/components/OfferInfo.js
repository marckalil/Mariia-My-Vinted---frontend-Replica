import { Account } from './Account';
import { Offer } from './Offer';

const OfferInfo = ({ elem, display: shouldDisplayAccount }) => {
  const {
    _id: id,
    owner,
    product_details: details,
    product_price: price,
    product_image
  } = elem;
  const productImage = product_image.secure_url;

  return (
      <div>
        {shouldDisplayAccount && <Account owner={owner} />}
        <Offer
          id={id}
          details={details}
          price={price}
          image={productImage}
        />
      </div>
    )
};

export default OfferInfo;
