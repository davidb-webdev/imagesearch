import LoginButton from "../components/LoginButton";

const Splash = () => {
  document.title = "ImageSearch";

  return (
    <>
      <p>Please sign in to continue</p>
      <LoginButton />
    </>
  );
};

export default Splash;
