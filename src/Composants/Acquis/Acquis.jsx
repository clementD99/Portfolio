import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faSass,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

function Acquis() {
  return (
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
  );
}

export default Acquis;
