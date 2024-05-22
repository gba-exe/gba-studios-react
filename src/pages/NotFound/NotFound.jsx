import React from "react";
import styles from "./NotFound.module.css";
import NavBar from "../../components/NavBar/NavBar";

const NotFound = () => {
  return (
    <>
      <NavBar />
      <div className={styles["message"]}>
        <h1>404</h1>
        <h2>Page not found!</h2>
      </div>
    </>
  );
};

export default NotFound;
