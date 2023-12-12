import Image from "next/image";
import styles from "./style.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
export default function Widget_campo_texto() {
  const [campo_1, set_campo_1] = useState();
  const [campo_2, set_campo_2] = useState();
  const [has_erro, set_erro] = useState();
  const r = useRouter();
  // função validar se tem erro no campo 1
  // setar o campo 1
  const fn1 = (e) => {
    set_campo_1(e);
    if (e > 10 || e < 0 || campo_2 > 10 || campo_2 < 0) {
      set_erro(true);
    } else {
      set_erro(false);
    }
  };
  // função validar se tem erro no campo 2
  // setar o campo 2
  const fn2 = (e) => {
    set_campo_2(e);
    if (campo_1 > 10 || campo_1 < 0 || e > 10 || e < 0) {
      set_erro(true);
    } else {
      set_erro(false);
    }
  };
  const fn_ir = () => {
    if (
      campo_1 > 10 ||
      campo_1 < 0 ||
      campo_2 > 10 ||
      campo_2 < 0 ) {
      set_erro(true);
    } else {
      set_erro(false);
      if (
        typeof campo_1 != typeof undefined &&
        typeof campo_2 != typeof undefined
      ) {
        var med = (campo_1 * 1 + campo_2 * 1) / 2;
        var notaNecessaria = (med - 10) * -1;
        r.push(
          "/resultado?av1=" +
            campo_1 +
            "&av2=" +
            campo_2 +
            "&nf=" +
            notaNecessaria +
            "&med=" +
            med
        );
      } else {
        set_erro(true);
      }
    }
  };
  return (
    <>
      <div className={styles.container_1}>
        {/* =================================================== */}
        {/* campo 1 */}
        <div className={styles.tiulo}>
          <h1>Avaliação 1</h1>
        </div>
        <div className={styles.campoTexto}>
          <input
            type="number"
            placeholder="digite sua nota"
            value={campo_1}
            onChange={(e) => {
              fn1(e.target.value);
                
              
            }}
          />
        </div>
        {/* =================================================== */}
        {/* campo 2 */}
        <div className={styles.tiulo}>
          <h1>Avaliação 2</h1>
        </div>
        <div className={styles.campoTexto}>
          <input
            type="number"
            placeholder="digite sua nota"
            value={campo_2}
            onChange={(e) => {
                fn2(e.target.value);
              
            }}
          />
        </div>
        {/* =================================================== */}

        {has_erro ? (
          <div className={styles.tiulo}>
            <h1>
              Erro:{" "}
              {typeof campo_1 == typeof undefined
                ? "preencha os campos de nota avaliação 1"
                : typeof campo_2 == typeof undefined
                ? "preencha os campos de nota avaliação 2"
                : "digite o valor da nota avaliativa de 1 a 10"}
            </h1>
          </div>
        ) : null}
        {/* =================================================== */}
        {/* btn calcular nota */}
        <div className={styles.btn_click} onClick={fn_ir}>
          <h2 className={styles.effects_h2}>calcular nota necessaria</h2>
        </div>
      </div>
    </>
  );
}
