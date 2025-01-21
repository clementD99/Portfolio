import "./presentation.scss";
import Acquis from "../Acquis/Acquis";

function Presentation() {
  return (
    <div className="introduction">
      <h1>Présentation</h1>
      <p>Qui je suis ?</p>
      <span>
        Je m'appelle Clément Desmur et je vous présente, aujourd'hui, mes
        projets réalisés lors de ma formation intégrateur web chez
        Openclassrooms.
      </span>
      <p>Qu'est ce que j'ai appris ?</p>
      <span>
        Avant de commencer ma formation, j'avais essayé de me former sur
        plusieurs sites sans vraiment parvenir à comprendre ce que je faisais.
      </span>
      <br />
      <span>
        Mais après mon entrée en formation, j'ai commencé à mieux comprendre ce
        que je faisais : grâce aux cours, au réseau d'entre-aide Slack et à mon
        mentor.
      </span>
      <p>Quelles compétences j'ai appris ?</p>
      <span>
        Au fil de mon parcours, j'ai appris les divers langages et logiciels
        suivants :
      </span>
      <Acquis />
    </div>
  );
}

export default Presentation;
