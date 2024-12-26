import "../Accueil/accueil.scss";
import imgAccueil from "../../assets/images/imgAccueil.webp";

function Accueil() {
  return (
    <div className="accueil">
      <img src={imgAccueil} alt="Image d'accueil" />
    </div>
  );
}

export default Accueil;
