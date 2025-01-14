import "./projets.scss";
import projets from "../../donnees/projets.json";

function Projets() {
  return (
    <div className="titre">
      <h1>Projets</h1>
      <section className="projets">
        {projets.map((projet) => (
          <div className="projets-details" key={projet.id}>
            <h2 className="projets-titre">{projet.title}</h2>
            {/* <p className="projets-description">{projet.description}</p> */}
          </div>
        ))}
      </section>
    </div>
  );
}

export default Projets;
