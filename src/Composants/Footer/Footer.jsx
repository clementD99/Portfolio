import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <p>
        Le portfolio a été codé en React. Retouvez le dépôt du projet sur mon{" "}
        <a href="https://github.com/clementD99/Portfolio">Github.</a>
      </p>
      <div className="liens">
        <div>
          <p>Voici mes liens :</p>
          <section className="icones">
            <FontAwesomeIcon
              title="Vers mon Github"
              icon={faGithub}
              onClick={() => window.open("https://github.com/clementD99")}
            ></FontAwesomeIcon>
            <span>Mon Github</span>
            <FontAwesomeIcon
              className="linkedin"
              title="Vers mon Linkedin"
              icon={faLinkedinIn}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/clement-desmur-466601164/"
                )
              }
            ></FontAwesomeIcon>
            <span>Mon linkedin</span>
            <FontAwesomeIcon
              className="gmail"
              title="Mon adresse Gmail"
              icon={faGoogle}
            ></FontAwesomeIcon>
            <span>clement.desmur@gmail.com</span>
          </section>
        </div>
      </div>
      <p>© 2025, Clément Desmur.</p>
    </div>
  );
}

export default Footer;
