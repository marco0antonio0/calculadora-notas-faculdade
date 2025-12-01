import styles from "./style.module.css";

export default function Widget_ComoUsar() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>Como Usar a Calculadora</h2>
        
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h3>Digite sua Nota da AV1</h3>
              <p>Insira a nota que você obteve na primeira avaliação (0 a 10)</p>
            </div>
          </div>

          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h3>Digite sua Nota da AV2</h3>
              <p>Insira a nota que você obteve na segunda avaliação (0 a 10)</p>
            </div>
          </div>

          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h3>Clique em Calcular</h3>
              <p>O sistema calculará a nota necessária na AV3 para você atingir o resultante.</p>
            </div>
          </div>
        </div>

        <div className={styles.infoBox}>
          <div className={styles.infoIcon}>ℹ️</div>
          <div className={styles.infoText}>
            <h4>Importante</h4>
            <p>
              A calculadora determina quanto você precisa tirar na terceira avaliação (AV3) 
              para atingir a nota final de aprovação. O cálculo considera que a base de calculo obtido atravez de fonte de informações em canais da universidade.
            </p>
          </div>
        </div>

        <div className={styles.warningBox}>
          <div className={styles.warningIcon}>⚠️</div>
          <div className={styles.warningText}>
            <h4>Aviso de Responsabilidade</h4>
            <p>
              Esta ferramenta foi desenvolvida com fins educacionais e serve apenas como 
              auxiliar para cálculos de notas. <strong>Não nos responsabilizamos por eventuais 
              inconsistências ou informações desatualizadas.</strong> Sempre consulte o regulamento 
              oficial da sua instituição e confirme os critérios de avaliação com seus professores. 
              Os valores e regras podem variar de acordo com cada curso e período letivo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
