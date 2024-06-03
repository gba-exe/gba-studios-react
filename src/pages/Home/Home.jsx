import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Home.module.css";
import imgHeader from "../../images/banner.jpg";

const Home = () => {
  return (
    <>
      <NavBar />
      <img
        className={styles["imagem-header"]}
        src={imgHeader}
        alt="SoundBoard"
      />
      <div className="content">
      </div>
    </>
  );
};

export default Home;
