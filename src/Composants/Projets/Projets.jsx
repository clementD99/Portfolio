import { useState } from "react";
import "./projets.scss";
import projets from "../../donnees/projets.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faReadme } from "@fortawesome/free-brands-svg-icons";

function Projets() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  // Pour ouvrir la modal
  const openModal = (projet) => {
    setModalContent(projet);
    setIsModalOpen(true);
  };

  // Pour fermer la modal
  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div className="titre">
      {/* <h2>Mes projets</h2> */}
      <section className="projets">
      <h2>Mes projets</h2>
      <div className="images-projets">
      {projets.map((projet) => (
          <div
            className="projets-details"
            key={projet.id}
            onClick={() => openModal(projet)}
          >
            <img
              src={require(`../../assets/images/${projet.image}`)}
              alt={`Illustration de ${projet.title}`}
            />
          </div>
        ))}
      </div>
      </section>
      {/* Modal */}
      {isModalOpen && modalContent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{modalContent.title}</h3>
            <p>{modalContent.description}</p>
            <ul>
              {modalContent.competences.map((competence, index) => (
                <li key={index}>{competence}</li>
              ))}
            </ul>
            <a
              href={modalContent.lien}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                title="Vers le repo GitHub"
              ></FontAwesomeIcon>
            </a>
            {modalContent["github-pages"] && (
              <a
                href={modalContent["github-pages"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faReadme}
                  title="Vers le site en ligne"
                ></FontAwesomeIcon>
              </a>
            )}
            <button onClick={closeModal}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projets;
