export const Price = ({ price }) => {
  const fixedPrice = price.toFixed(2);
  return (
    <div className="price">
      <span>{fixedPrice}€ ⓘ</span>
      <span>
        <i
          style={{ color: "rgb(140, 140, 140)", fontSize: 16 }}
          className="fa-regular fa-heart"
        ></i>
      </span>
    </div>
  );
};