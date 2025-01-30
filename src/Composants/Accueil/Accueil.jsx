import "./accueil.scss";
import imgAccueil from "../../assets/images/imgAccueil.webp";

function Accueil() {
  return (
    <div className="accueil">
      <img src={imgAccueil} alt="Représentation d'accueil" />
    </div>
  );
}

export default Accueil;
