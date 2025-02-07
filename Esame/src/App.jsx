import "./App.css";
import TopBar from "./components/TopBar";

import HarryPotter from "./components/HarryPotter";
import Batman from "./components/Batman";
import Avengers from "./components/Avengers";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <TopBar />

      <HarryPotter tvshow="Tv Show" />
      <Batman />
      <Avengers />
      <MyFooter />
    </>
  );
}

export default App;
