import Header from "./composants/Header/Header";
import Presentation from "./composants/Presentation/Presentation";
import Accueil from "./composants/Accueil/Accueil";
import Projets from "./composants/Projets/Projets";
import Footer from "./composants/Footer/Footer";

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
