import styles from "./style.module.css";
import { useRouter } from "next/router";

export default function Widget_appBar() {
  const router = useRouter();
  
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={() => router.push("/")}>
          <img src="/images/logo.png" alt="Logo" />
          <div className={styles.brandText}>
            <h1>Calculadora de Notas</h1>
            <span>Ciência da Computação</span>
          </div>
        </div>
        
        <nav className={styles.nav}>
          <a 
            onClick={() => router.push("/")} 
            className={router.pathname === "/" ? styles.active : ""}
          >
            Início
          </a>
          <a 
            onClick={() => router.push("/sobre")} 
            className={router.pathname === "/sobre" ? styles.active : ""}
          >
            Sobre
          </a>
          <a
            href="https://github.com/marco0antonio0/calculadora-notas-faculdade"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            <img src="/images/icon_github.png" alt="GitHub" />
          </a>
        </nav>
      </div>
    </header>
  );
}
