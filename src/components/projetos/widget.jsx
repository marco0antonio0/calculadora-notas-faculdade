import styles from "./style.module.css";

export default function Widget_Projetos() {
  const projetos = [
    {
      nome: "Rota da Fé",
      descricao: "Sistema de gerenciamento e mapeamento de rotas religiosas",
      url: "https://rota-da-fe.nextlab.cloud/",
      icon: "🙏"
    },
    {
      nome: "BPA System",
      descricao: "Sistema de monitoramento fauna Pará",
      url: "https://bpa.nextlab.cloud/",
      icon: "🦜"
    },
    {
      nome: "Calculadora Acadêmica",
      descricao: "Ferramenta para cálculo de notas e médias acadêmicas",
      url: "https://calculadora-nota-academica.nextlab.cloud/",
      icon: "📚"
    }
  ];

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>Nossos Projetos</h2>
        <p>Desenvolvidos por alunos de Ciência da Computação - UNAMA Parque Shopping</p>
      </div>

      <div className={styles.projectsGrid}>
        {projetos.map((projeto, index) => (
          <a
            key={index}
            href={projeto.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectCard}
          >
            <div className={styles.projectIcon}>{projeto.icon}</div>
            <h3>{projeto.nome}</h3>
            <p>{projeto.descricao}</p>
            <span className={styles.viewProject}>
              Ver projeto →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
