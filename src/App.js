import Header from "./composants/Header/Header.jsx";
import Presentation from "./composants/Presentation/Presentation.jsx";
import Accueil from "./composants/Accueil/Accueil.jsx";
import Projets from "./composants/Projets/Projets.jsx";
import Footer from "./composants/Footer/Footer.jsx";

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
