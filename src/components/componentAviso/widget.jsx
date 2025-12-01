import styles from "./style.module.css";

export default function Widget_aviso() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Sobre o Projeto</h1>
          <p className={styles.heroSubtitle}>
            Uma ferramenta criada por estudantes, para estudantes
          </p>
        </div>
      </section>

      {/* Descrição do Projeto */}
      <section className={styles.section}>
        <div className={styles.card}>
          <div className={styles.iconHeader}>
            <span className={styles.icon}>📖</span>
            <h2>Nossa Missão</h2>
          </div>
          <p className={styles.text}>
            Este site foi desenvolvido com o objetivo de facilitar o cálculo de notas acadêmicas 
            para estudantes universitários. Oferecemos uma ferramenta simples, rápida e eficiente 
            para ajudar você a planejar seus estudos e entender quanto precisa se dedicar nas 
            próximas avaliações.
          </p>
        </div>
      </section>

      {/* Iniciativa Acadêmica */}
      <section className={styles.section}>
        <div className={styles.card}>
          <div className={styles.iconHeader}>
            <span className={styles.icon}>🎓</span>
            <h2>Iniciativa Acadêmica</h2>
          </div>
          <p className={styles.text}>
            Trata-se de um projeto <strong>não oficial</strong>, desenvolvido como iniciativa 
            acadêmica por alunos de Ciência da Computação da UNAMA Parque Shopping. O código 
            é livre e está disponível no GitHub para contribuições da comunidade.
          </p>
          <a 
            href="https://github.com/marco0antonio0/calculadora-notas-faculdade" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.githubButton}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Ver no GitHub
          </a>
        </div>
      </section>

      {/* Aviso Importante */}
      <section className={styles.section}>
        <div className={`${styles.card} ${styles.warningCard}`}>
          <div className={styles.iconHeader}>
            <span className={styles.icon}>⚠️</span>
            <h2>Aviso Importante</h2>
          </div>
          <div className={styles.warningContent}>
            <p className={styles.text}>
              Este site é uma <strong>ferramenta auxiliar</strong> no cálculo de notas que utiliza 
              informações de fontes públicas. Nosso objetivo é oferecer suporte adicional para 
              facilitar o planejamento acadêmico.
            </p>
            <div className={styles.warningBox}>
              <p>
                <strong>Não nos responsabilizamos</strong> por eventuais desatualizações, 
                interpretações incorretas das informações fornecidas ou mudanças nos critérios 
                de avaliação da instituição.
              </p>
            </div>
            <p className={styles.text}>
              Recomendamos <strong>sempre consultar as fontes oficiais</strong> da sua instituição 
              de ensino e confirmar os critérios de avaliação com seus professores para obter as 
              informações mais precisas e atualizadas.
            </p>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Características do Projeto</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🚀</span>
            <h3>Rápido e Simples</h3>
            <p>Interface intuitiva para cálculos instantâneos</p>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>📱</span>
            <h3>Responsivo</h3>
            <p>Funciona em qualquer dispositivo</p>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🔓</span>
            <h3>Código Aberto</h3>
            <p>Disponível no GitHub para todos</p>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🎯</span>
            <h3>Focado no Aluno</h3>
            <p>Desenvolvido pensando nas suas necessidades</p>
          </div>
        </div>
      </section>
    </div>
  );
}





