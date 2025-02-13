import "./App.css";
import TopBar from "./components/TopBar";

import TvShows from "./components/TvShows";
import Batman from "./components/Batman";
import Avengers from "./components/Avengers";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      {/* Ho creato 3 components e ho ricopiato la fetch come nel components Harrypotter per cambiare 
    i poster generati. Non so se è il metodo più corretto. Mi era venuto in mente di clonare per 3 volte la components 
    HarryPotter e usare le props ma ormani il tempo era scaduto perciò ho dovuto lasciare così. :) */}
      <TopBar />

      <TvShows />
      <Batman />
      <Avengers />

      <MyFooter />
    </>
  );
}

export default App;
