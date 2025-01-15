import "./presentation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faSass,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

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
      <br />
      <div className="acquis">
        <FontAwesomeIcon
          className="html"
          title="logo HTML"
          icon={faHtml5}
        ></FontAwesomeIcon>
        <span>
          Le HTML pour écrire les textes, insérer des images. C'est la base de
          toutes pages internet.
        </span>
        <FontAwesomeIcon
          className="css"
          title="logo CSS"
          icon={faCss3Alt}
        ></FontAwesomeIcon>
        <span>
          Le CSS pour styliser le HTML (pour les couleurs, espacer les lignes,
          aligner des textes,...)
        </span>
        <FontAwesomeIcon
          className="js"
          title="logo JavaScript"
          icon={faJs}
        ></FontAwesomeIcon>
        <span>JavaScript pour une interactivité sur la page.</span>
        <FontAwesomeIcon
          className="sass"
          title="logo Sass"
          icon={faSass}
        ></FontAwesomeIcon>
        <span>
          Sass pour créer chaque feuille de style pour un fichier sans devoir
          créer un fichier css de plusieurs centaines de lignes.
        </span>
        <FontAwesomeIcon
          className="react"
          title="logo React"
          icon={faReact}
        ></FontAwesomeIcon>
        <span>React pour les interfaces utilisateurs web.</span>
      </div>
    </div>
  );
}

export default Presentation;
