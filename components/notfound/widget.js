import Image from "next/image";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
export default function Widget_not_found() {
  const r = useRouter();
  const { av1, av2,nf,med } = r.query;
  const fn_ir = () => {
    r.push("/");
  };

  return (
    <>
      <div className={styles.container_1}>
        {/* =================================================== */}

        <div className={styles.tiulo}>
          <h1>Pagina não encontrada</h1>
        </div>
        
        {/* =================================================== */}
        {/* btn calcular nota */}
        <div className={styles.btn_click} onClick={fn_ir}>
          <h2 className={styles.effects_h2}>Ir para pagina inicial</h2>
        </div>
      </div>
    </>
  );
}
