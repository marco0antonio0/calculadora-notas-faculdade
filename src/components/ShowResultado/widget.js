import Image from "next/image";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
export default function Widget_campo_texto() {
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
          <h1>{med>=7?'Voce ja esta aprovado !!':'Avaliação Final necessaria !!'}</h1>
        </div>
        <div className={styles.showContainer}>
          {med<7 ? (
            <p>
              A av1= {av1} , av2= {av2}. <br /> Logo sera necessario obter a
              pontuação de {nf} pontos para ser
              aprovado na avaliação final
              <br />
              Formula: ( (av1 + av2) / 2 ) -10
            </p>
          ) : (
            <p>
              {" "}
              Voce ja esta aprovado com a media {med}
            </p>
          )}
        </div>
        {/* =================================================== */}
        {/* btn calcular nota */}
        <div className={styles.btn_click} onClick={fn_ir}>
          <h2 className={styles.effects_h2}>Fazer outro calculo</h2>
        </div>
      </div>
    </>
  );
}
