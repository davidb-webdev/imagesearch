// import { useAuth0 } from "@auth0/auth0-react";
// import LoginButton from "./LoginButton";

// interface ILoginCheckProps {
//   children: React.ReactNode;
//   promptLogin?: boolean;
// }

// const LoginCheck = ({children, promptLogin}: ILoginCheckProps) => {
//   const { user, isAuthenticated, isLoading } = useAuth0();

//   if (isLoading) {
//     return <div>Loading ...</div>;
//   }

//   return (
//     <>
//       {user !== undefined && isAuthenticated ? (
//         children
//       ) : (
//         promptLogin && <LoginButton />
//       )}
//     </>
//   );
// };

// export default LoginCheck;
