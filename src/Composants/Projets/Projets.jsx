import { useState } from "react";
import "./projets.scss";
import projets from "../../donnees/projets.json";

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
      <h2>Mes projets</h2>
      <section className="projets">
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
              Voir le projet sur GitHub
            </a>
            {modalContent["github-pages"] && (
              <a
                href={modalContent["github-pages"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le projet en ligne
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
