import Image from "next/image";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
export default function Widget_campo_texto() {
  const r = useRouter();
  const { av1, av2, nf, med } = r.query;
  const fn_ir = () => {
    r.push("/");
  };

  return (
    <>
      <div className={styles.container_1}>
        {/* =================================================== */}

        <div className={styles.tiulo}>
          {med < 4 ? <h1>Resposta:</h1> : <h1>{med >= 7 ? 'Voce ja esta aprovado !!' : 'Avaliação Final necessária !!'}</h1>}
        </div>
        {med < 4 ? <div className={styles.showContainer}>
          <p>
            Soma das av1 e av2 totalizaram {parseFloat(av1) + parseFloat(av2)} pts <br /><br />
            De acordo com 'blogs.unama.br' se a soma das notas das duas primeiras avaliações for inferior a 8, o aluno estará automaticamente REPROVADO<br />
            Logo sua :<br />
            av1+v2 = {parseFloat(av1) + parseFloat(av2)}
            <br /><br />
            Infelizmente de acordo com o sistema, sua nota indica que esta reprovado
            <br />
            <br />
            Para mais informações consulte em :
          </p>

          <a href="https://blogs.unama.br/tags/como-saber-nota#:~:text=O%20Aluno%20dever%C3%A1%20dividir%20por,que%207%20(%3E%207).&text=Resultado%3A%20Aprovado%20por%20m%C3%A9dia%20ou%20direto.,-Agora%2C%20se%20o" >
            https://blogs.unama.br/tags/como-saber-nota</a>
        </div> :
          <div className={styles.showContainer}>
            {med < 7 ? (
              <p>
                A av1= {av1} , av2= {av2}. <br /> Logo sera necessário obter a
                pontuação de {nf} pontos para ser
                aprovado na avaliação final
                <br />
                Formula: ( (av1 + av2) / 2 ) -10
                <br />
                <br />
                Para mais informações consulte em :

              </p>

            ) : (
              <p>
                {" "}
                Voce ja esta aprovado com a media {med}
                <br />
                <br />
                Para mais informações consulte em :
              </p>
            )}
            <a href="https://blogs.unama.br/tags/como-saber-nota#:~:text=O%20Aluno%20dever%C3%A1%20dividir%20por,que%207%20(%3E%207).&text=Resultado%3A%20Aprovado%20por%20m%C3%A9dia%20ou%20direto.,-Agora%2C%20se%20o" >
              https://blogs.unama.br/tags/como-saber-nota</a>
          </div>}
        {/* =================================================== */}
        {/* btn calcular nota */}
        <div className={styles.btn_click} onClick={fn_ir}>
          <h2 className={styles.effects_h2}>Fazer outro calculo</h2>
        </div>
      </div>
    </>
  );
}
