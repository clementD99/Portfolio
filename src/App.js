import Header from "../src/composants/Header/Header";
import Presentation from "../src/composants/Presentation/Presentation";
import Accueil from "../src/composants/Accueil/Accueil";
import Projets from "../src/composants/Projets/Projets";
import Footer from "../src/composants/Footer/Footer";

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
