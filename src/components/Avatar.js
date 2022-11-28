export const Avatar = ({ avatar }) => {
  return (
    <img
      src={avatar}
      alt="user"
      style={{ height: 25, width: 25, borderRadius: 50 }}
    />
  );
};