import React, { useCallback, useEffect, useRef, useState } from "react";
import "./index.css";

const ModalPlugIn = ({ modalVisible, mainTexT, childrenText }) => {
  const [isActive, setIsActive] = useState(modalVisible);
  const ref = useRef(null);

  const handleCloseModal = async (e) => {
    e.preventDefault();
    setIsActive(false);
  };

  useEffect(() => {
    setIsActive(modalVisible);
  }, [modalVisible]);

  const handleKeydown = useCallback(
    (e) => {
      if (e.key === "Escape") return setIsActive(false);
    },
    [setIsActive]
  );

  useEffect(() => {
    if (isActive) {
      document.addEventListener("keydown", handleKeydown);
    } else {
      document.removeEventListener("keydown", handleKeydown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [isActive, handleKeydown, ref]);

  return (
    <div
      className="modal"
      style={{ display: isActive ? "block" : "none" }}
      ref={ref}
    >
      <div className="modal-content">
        <div className="close-container">
          <span className="close" onClick={handleCloseModal}>
            &times;
          </span>
        </div>
        <p>{mainTexT}</p>
        <p>{childrenText}</p>
      </div>
    </div>
  );
};

export default ModalPlugIn;
