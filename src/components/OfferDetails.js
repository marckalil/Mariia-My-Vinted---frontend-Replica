export const OfferDetails = ({ details }) => {
  return details.map((detail, num) => {
    const {
      MARQUE: brand,
      TAILLE: size,
    } = detail;
    const hasSize = size !== undefined;
    return (
      <div key={num}>
        <p>{brand}</p>
        {hasSize && <p>{size}</p>}
      </div>
    );
  })
};