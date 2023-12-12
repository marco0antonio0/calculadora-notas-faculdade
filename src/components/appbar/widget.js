import Image from "next/image";
import styles from "./style.module.css";
export default function Widget_appBar() {
  return (
    <>
      <div className={styles.container_1}>
        <div className={styles.img_logo}>
          <img src={"/images/logo.png"}></img>
        </div>
        <div className={styles.titulo}>
          <h1>Calculo de nota </h1>
          <h3>ciencias da computação</h3>
        </div>
      </div>
    </>
  );
}
