import { Avatar } from './Avatar';

export const Owner = ({ avatar }) => {
  const hasAvatar = avatar !== undefined;
  if (hasAvatar) return <Avatar avatar={avatar} />
  return (
    <div
      style={{
        width: 25,
        height: 25,
        borderRadius: 50,
        backgroundColor: "grey",
      }}
    />
  );
};