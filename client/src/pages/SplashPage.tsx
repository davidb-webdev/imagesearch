import LoginButton from "../components/LoginButton";

const SplashPage = () => {
  document.title = "ImageSearch";

  return (
    <>
      <p>Please sign in to continue</p>
      <LoginButton />
    </>
  );
};

export default SplashPage;
