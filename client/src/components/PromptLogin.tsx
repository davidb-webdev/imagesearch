import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";

interface IPromptLoginProps {
  children: React.ReactNode;
}

const PromptLogin = ({children}: IPromptLoginProps) => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      {user !== undefined && isAuthenticated ? (
        children
      ) : (
        <LoginButton />
      )}
    </>
  );
};

export default PromptLogin;
