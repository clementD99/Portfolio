import "../Header/header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <div className="header">
      <a href="/">Accueil</a>
      <a href="#presentation">Présentation</a>
      <a href="#projets">Mes projets</a>

      <div className="reseaux">
        <FontAwesomeIcon
          icon={faGithub}
          title="Vers mon Github"
          onClick={() =>
            window.open(
              "https://github.com/clementD99",
              "_blank",
              "noopener,noreferrer"
            )
          }
        />
        <FontAwesomeIcon
          icon={faLinkedinIn}
          title="Vers mon Linkedin"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/clement-desmur-466601164/",
              "_blank",
              "noopener,noreferrer"
            )
          }
        />
      </div>
    </div>
  );
}

export default Header;
