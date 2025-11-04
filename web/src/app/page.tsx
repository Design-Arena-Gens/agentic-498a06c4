import Link from "next/link";
import PossibilityExplorer from "@/components/possibility-explorer";
import styles from "./page.module.css";

const highlights = [
  {
    title: "Explorar ideias",
    description:
      "Visualize jornadas completas com protótipos navegáveis e testes exploratórios guiados.",
  },
  {
    title: "Dar vida ao conceito",
    description:
      "Implemente interfaces ricas, conecte APIs e publique experiências prontas para produção.",
  },
  {
    title: "Aprender com dados reais",
    description:
      "Rode experimentos, acompanhe métricas e prepare releases contínuos com confiança.",
  },
];

const timeline = [
  {
    title: "1. Descobrir & alinhar",
    focus: "Entenda o problema com workshops, entrevistas rápidas e mapas de oportunidade.",
    tip: "Colete anotações colaborativas e priorize dores que merecem virar protótipo.",
  },
  {
    title: "2. Prototipar & validar",
    focus:
      "Transforme hipóteses em interfaces responsivas, compartilhe links e teste com usuários reais.",
    tip: "Documente aprendizados e ajuste o roadmap em poucas horas, não semanas.",
  },
  {
    title: "3. Construir & lançar",
    focus:
      "Codifique com componentes prontos, integre serviços críticos e publique com monitoramento.",
    tip: "Automatize deploys na Vercel e mantenha alertas para performance e uptime.",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.kicker}>Visão geral</p>
          <h1 className={styles.title}>O que é possível fazer aqui?</h1>
          <p className={styles.description}>
            Aqui você cria experiências digitais completas — da ideia ao deploy — usando fluxo web
            moderno, colaboração em tempo real e dados acionáveis. O ambiente é pensado para equipes
            que precisam transformar estratégias em produtos vivos sem fricção.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primaryAction} href="#mapa">
              Explorar possibilidades
            </Link>
            <Link className={styles.secondaryAction} href="#linha-do-tempo">
              Ver jornada completa
            </Link>
          </div>
        </div>
        <div className={styles.heroHighlights}>
          {highlights.map((highlight) => (
            <div key={highlight.title} className={styles.highlightCard}>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section} id="mapa">
        <header className={styles.sectionHeader}>
          <h2>Do insight à entrega sem sair daqui</h2>
          <p>
            Combine ideação, desenvolvimento e análise em um só lugar. Você decide o ritmo e nós
            oferecemos ferramentas para prototipar, validar e escalar.
          </p>
        </header>
        <PossibilityExplorer />
      </section>

      <section className={styles.section} id="linha-do-tempo">
        <header className={styles.sectionHeader}>
          <h2>Uma jornada em três etapas</h2>
          <p>
            Estruture o ciclo de evolução do seu produto com checkpoints claros, entregáveis
            compartilháveis e indicadores que mostram o progresso real para a equipe.
          </p>
        </header>
        <div className={styles.timeline}>
          {timeline.map((stage) => (
            <article key={stage.title} className={styles.timelineItem}>
              <span className={styles.timelineIndex}>{stage.title}</span>
              <p className={styles.timelineFocus}>{stage.focus}</p>
              <p className={styles.timelineTip}>{stage.tip}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Pronto para colocar a mão na massa?</h2>
          <p>
            Comece agora mesmo com um projeto Next.js otimizado para deploy na Vercel. Ajuste,
            personalize e publique sua ideia em minutos.
          </p>
        </div>
        <Link className={styles.ctaButton} href="https://vercel.com">
          Lançar na Vercel
        </Link>
      </section>
    </div>
  );
}
