import React from "react";
import "../styles/Ganaste.css";

const Ganaste = ({ isOpen, handleClose }) => {

    const volverAJugar = () => {
        window.location.reload();
        handleClose()
    }

  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content multicolor-background" onClick={(e) => e.stopPropagation()}>
            <h3 className="modal-title">¡¡GANASTE!!</h3>
            <a className="volver-a-jugar" onClick={volverAJugar}>Volver a jugar</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Ganaste;
