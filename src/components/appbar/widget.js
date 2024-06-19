import Image from "next/image";
import styles from "./style.module.css";
import { Router, useRouter } from "next/router";
export default function Widget_appBar() {
  const r = useRouter()
  return (
    <>
      <div className={styles.container_1}>
        <div className={styles.img_logo} onClick={() => {
          r.push("/")
        }}>
          <img src={"/images/logo.png"}></img>
        </div>
        <div className={styles.titulo}>
          <h1>Calculo de nota </h1>
          <h3>Ciencia da computação</h3>
        </div>
        <div className={styles.img_logo_v2} onClick={() => { r.push("https://github.com/marco0antonio0/calculadora-notas-faculdade") }}>
          <img src={"/images/icon_github.png"}></img>
        </div>
      </div>
    </>
  );
}
