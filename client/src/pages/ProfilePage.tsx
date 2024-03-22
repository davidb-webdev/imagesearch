import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../components/LogoutButton";
import styled from "styled-components";

const ProfilePageContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-default);

  img {
    max-width: 150px;
  }
`;

const ProfilePage = () => {
  const { user } = useAuth0();

  return (
    <ProfilePageContainer>
      {user?.picture && <img src={user?.picture} alt={user?.name} />}
      <span>{user?.name || user?.nickname}</span>
      <LogoutButton />
    </ProfilePageContainer>
  );
};

export default ProfilePage;
