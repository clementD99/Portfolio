import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Composants/Header/Header";
import Accueil from "./Composants/Accueil/Accueil";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
