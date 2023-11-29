import React from "react";
import "../styles/MasInfo.css";

const MasInfo = ({ isOpen, handleClose }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={handleClose}>
              &times;
            </span>
            <h3 className="modal-title">Como jugar</h3>
            <div className="modal-text">
                <p>
                En este juego debes intentar adivinar un número de cuatro cifras.
                </p>
                <p>Debes proponer un número. Por ejemplo, podrías decir "1234".</p>
                <p>Luego se te proporcionara una respuesta.</p>
                <p>
                Si alguna de las cifras y su posición coinciden con el número
                secreto, se dice <strong>"bien"</strong>.
                </p>
                <p>
                Si alguna cifra es correcta pero está en una posición incorrecta,
                se dice <strong>"regular"</strong>.
                </p>
                <h3>Ejemplo de Respuesta:</h3>
                <p>Supongamos que el número secreto es "3951".</p>
                <p>
                Si el jugador adivinador dice "1359", el jugador que conoce el
                número respondería con "Bien Bien Regular Regular".
                </p>
                <p>
                Esto significa que el 1 está en la posición correcta, el 3 también
                está en la posición correcta, el 5 está en la posición incorrecta,
                y el 9 también está en la posición incorrecta.
                </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MasInfo;
