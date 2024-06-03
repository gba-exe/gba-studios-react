import React from "react";
import styles from "./LogIn.module.css";
import imagemBaixo from "../../images/login.jpg";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LogIn = () => {
  const navigate = useNavigate();

  const home = () => {
    navigate("/");
  };

  return (
    <>
      <div className={styles["content"]}>
        <img src={imagemBaixo} alt="imagem do braco de um baixo" />
        <div className={styles["container"]}>
          <div className={styles["form"]}>
            <h1>Ola, faca seu login</h1>
            <div className="input">
              Email:
              <input type="text" placeholder="Email" />
            </div>
            <div className="input">
              Senha:
              <input type="text" placeholder="*********" />
            </div>

            <button className={styles["login"]} onClick={home}>
              Log-In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
