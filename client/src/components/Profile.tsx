import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user } = useAuth0();

  return (
    <>
      <img src={user?.picture} alt={user?.name} />
      <span>{user?.name || user?.nickname}</span>
    </>
  );
};

export default Profile;
