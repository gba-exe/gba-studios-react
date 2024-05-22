import React from "react";
import styles from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const login = () => {
      navigate("/login");
  }
  const signup = () => {
      navigate("/signup");
  }
  const home = () => {
      navigate("/");
  }


  return (
    <nav className={styles["navbar"]}>
      <h1 className={styles["logo"]} onClick={home}>GBA</h1>

      <div className={styles["botoes"]}>
        <button
          className={styles["botao-signup"]}
          onClick={signup}
        >
          Sign-Up
        </button>
        <button className={styles["botao-login"]} onClick={login}>
          Log-In
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
