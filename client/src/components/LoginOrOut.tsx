import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const LoginOrOut = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      {user !== undefined && isAuthenticated ? (
        <LogoutButton />
      ) : (
        <LoginButton />
      )}
    </>
  );
};

export default LoginOrOut;
