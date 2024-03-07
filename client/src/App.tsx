import "./App.css";
import ImageSearch from "./components/ImageSearch";
import LoginOrOut from "./components/LoginOrOut";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <h1>ImageSearch App</h1>
      <ImageSearch />
      <Profile />
      <LoginOrOut />
    </>
  );
}

export default App;
