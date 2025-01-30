import Header from "./Composants/Header/Header.jsx";
import Presentation from "./Composants/Presentation/Presentation.jsx";
import Accueil from "./Composants/Accueil/Accueil.jsx";
import Projets from "./Composants/Projets/Projets.jsx";
import Footer from "./Composants/Footer/Footer.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="accueil">
          <Accueil />
        </section>
        <section id="presentation">
          <Presentation />
        </section>
        <section id="projets">
          <Projets />
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
