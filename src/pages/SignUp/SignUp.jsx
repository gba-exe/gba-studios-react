import React from "react";
import styles from "./SignUp.module.css";
import imagemBaixo from "../../images/signup.jpg";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const home = () => {
    navigate("/");
  }

  return (
    <>
      <div className={styles["content"]}>
        <img src={imagemBaixo} alt="imagem da cabeca de um baixo" />
        <div className={styles["container"]}>
          <div className={styles["form"]}>
            <h1>Ola, faca seu cadastro</h1>
            <div className="input">
            Apelido:
            <input type="text" placeholder="Apelido"/>
            </div>
            <div className="input">
            Email:
            <input type="text" placeholder="Email"/>
            </div>
            <div className="input">
            Senha:
            <input type="text" placeholder="**********"/>
            </div>
            <div className="input">
            Confirmar Senha:
            <input type="text" placeholder="**********"/>
            </div>

            <button className={styles["login"]} onClick={home}>Sign-Up</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;