import { Owner } from './Owner';

export const Account = ({ owner }) => {
  const { avatar, username } = owner.account;
  const hasOwner = owner !== undefined;
  return (
    <div className="account">
      {hasOwner && <Owner avatar={avatar} />}
      <span style={{ fontSize: 12 }}>{username}</span>
    </div>
  );
};
