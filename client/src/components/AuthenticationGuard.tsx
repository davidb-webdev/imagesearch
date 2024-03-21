import { withAuthenticationRequired } from "@auth0/auth0-react";

const AuthenticationGuard = ({ component }: { component: any }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <div>Loading...</div>
  });
  return <Component />;
};

export default AuthenticationGuard;