import "./App.css";
import ImageSearch from "./components/ImageSearch";
import LoginOrOut from "./components/LoginOrOut";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <header>
        <h1>ImageSearch App</h1>
        <Profile />
        <LoginOrOut />
      </header>
      <main>
        <ImageSearch />
      </main>
    </>
  );
}

export default App;
