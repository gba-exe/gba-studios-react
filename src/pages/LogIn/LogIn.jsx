import React from "react";
import styles from "./LogIn.module.css";
import imagemAleatoria from "../../images/header.jpg";

const LogIn = () => {
  return (
    <>
      <div className={styles["content"]}>
        <img src={imagemAleatoria} alt="imagem aleatoria" />
        <div className={styles["container"]}>
        </div>
      </div>
    </>
  );
};

export default LogIn;
