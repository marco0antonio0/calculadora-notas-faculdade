import Image from "next/image";
import styles from "./style.module.css";
import img_logo from "./../../public/images/logo.png";
export default function Widget_appBar() {
  return (
    <>
      <div className={styles.container_1}>
        <div className={styles.img_logo}>
          <Image src={img_logo}></Image>
        </div>
        <div className={styles.titulo}>
          <h1>Calculo de nota </h1>
          <h3>ciencias da computação</h3>
        </div>
      </div>
    </>
  );
}
