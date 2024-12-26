import "../Header/header.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <div className="header">
      <Link to="/">Accueil</Link>
      <Link to="/#presentation">Présentation</Link>
      <Link to="/#projets">Mes projets</Link>
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
