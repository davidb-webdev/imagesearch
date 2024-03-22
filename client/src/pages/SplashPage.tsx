import styled from "styled-components";
import LoginButton from "../components/LoginButton";

const SplashPageContainer = styled.div`
  text-align: center;
`;

const SplashPage = () => {
  document.title = "ImageSearch";

  return (
    <SplashPageContainer>
        <h1>ImageSearch</h1>
        <p>Please sign in to continue</p>
        <LoginButton />
    </SplashPageContainer>
  );
};

export default SplashPage;
