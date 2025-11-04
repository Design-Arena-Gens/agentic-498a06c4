"use client";

import { useMemo, useState } from "react";
import styles from "./possibility-explorer.module.css";

type Category = {
  id: string;
  label: string;
  summary: string;
};

type Possibility = {
  title: string;
  category: Category["id"];
  summary: string;
  effort: "rápido" | "moderado" | "imersivo";
  value: string;
  tags: string[];
};

const categories: Category[] = [
  {
    id: "imaginar",
    label: "Imaginar",
    summary: "Esboce produtos, campanhas e fluxos antes de colocar a mão no código.",
  },
  {
    id: "construir",
    label: "Construir",
    summary: "Implemente interfaces responsivas, APIs e automações modernas.",
  },
  {
    id: "validar",
    label: "Validar",
    summary: "Teste hipóteses com usuários, monitore métricas e faça ajustes rápidos.",
  },
  {
    id: "lançar",
    label: "Lançar",
    summary: "Empacote, publique e mantenha tudo rodando em produção.",
  },
];

const possibilities: Possibility[] = [
  {
    title: "Protótipos navegáveis em minutos",
    category: "imaginar",
    summary:
      "Monte fluxos interativos usando componentes React reutilizáveis e simule jornadas completas.",
    effort: "rápido",
    value: "Mostre rapidamente o conceito para stakeholders e colete feedback.",
    tags: ["Design de fluxo", "Storytelling", "Experiência do usuário"],
  },
  {
    title: "Biblioteca de componentes escalável",
    category: "construir",
    summary:
      "Padronize padrões de UI com suporte a acessibilidade e dark mode desde o início.",
    effort: "moderado",
    value: "Reduza tempo de desenvolvimento e mantenha consistência visual.",
    tags: ["Design system", "Acessibilidade", "Tema dinâmico"],
  },
  {
    title: "Experimentos A/B automatizados",
    category: "validar",
    summary:
      "Crie variações de páginas e meça impacto usando ferramentas de analytics integradas.",
    effort: "moderado",
    value: "Decida com dados e aprenda mais rápido o que gera resultado.",
    tags: ["Growth", "Métricas", "Data-driven"],
  },
  {
    title: "Landing pages orientadas a conversão",
    category: "construir",
    summary:
      "Desenvolva páginas com copy em português, formulários e integração a serviços externos.",
    effort: "rápido",
    value: "Lance campanhas novas sem depender de longos ciclos de desenvolvimento.",
    tags: ["Marketing", "Formulários", "Integrations"],
  },
  {
    title: "Playbooks de onboarding",
    category: "imaginar",
    summary:
      "Mapeie sequências de onboarding com materiais interativos, checklists e automações.",
    effort: "imersivo",
    value: "Aumente retenção cuidando da jornada completa do usuário.",
    tags: ["Onboarding", "Educação", "Fluxos guiados"],
  },
  {
    title: "Dashboards com dados em tempo real",
    category: "construir",
    summary:
      "Conecte APIs, normalize dados e visualize indicadores em componentes reativos.",
    effort: "imersivo",
    value: "Centralize informações críticas para decisões rápidas.",
    tags: ["Observabilidade", "APIs", "Realtime"],
  },
  {
    title: "Rotinas de QA contínuo",
    category: "validar",
    summary:
      "Automatize testes de interface, unitários e de contrato com pipelines compartilhados.",
    effort: "moderado",
    value: "Evite regressões e mantenha a confiança em releases frequentes.",
    tags: ["Qualidade", "Automação", "Pipelines"],
  },
  {
    title: "Deploy global em minutos",
    category: "lançar",
    summary:
      "Publica em edge, configura domínios customizados e monitora disponibilidade automaticamente.",
    effort: "rápido",
    value: "Chegue aos usuários sem atrito e mantenha performance consistente.",
    tags: ["Vercel", "CDN", "Observabilidade"],
  },
  {
    title: "Operações orientadas a dados",
    category: "lançar",
    summary:
      "Conecte ferramentas de suporte, CRM e billing para acompanhar o ciclo de vida completo.",
    effort: "imersivo",
    value: "Alinhe produto, marketing e atendimento com uma visão compartilhada.",
    tags: ["Operações", "CRM", "Integração"],
  },
  {
    title: "Rituais de melhoria contínua",
    category: "validar",
    summary:
      "Implemente cadências de retrospectiva apoiadas por dashboards e insights automatizados.",
    effort: "rápido",
    value: "Aprimore o produto a cada ciclo usando evidências concretas.",
    tags: ["Processos", "Aprendizado", "Retro"],
  },
];

const efforts = [
  { value: "qualquer", label: "Qualquer esforço" },
  { value: "rápido", label: "Ciclos rápidos" },
  { value: "moderado", label: "Projetos moderados" },
  { value: "imersivo", label: "Imersões completas" },
] as const;

type Effort = (typeof efforts)[number]["value"];

export default function PossibilityExplorer() {
  const [selectedCategory, setSelectedCategory] = useState<Category["id"]>("imaginar");
  const [selectedEffort, setSelectedEffort] = useState<Effort>("qualquer");

  const filtered = useMemo(() => {
    return possibilities.filter((possibility) => {
      const matchesCategory = possibility.category === selectedCategory;
      const matchesEffort =
        selectedEffort === "qualquer" || possibility.effort === selectedEffort;
      return matchesCategory && matchesEffort;
    });
  }, [selectedCategory, selectedEffort]);

  const activeCategory = categories.find((category) => category.id === selectedCategory);

  return (
    <section className={styles.explorer}>
      <header className={styles.explorerHeader}>
        <div>
          <h3 className={styles.explorerTitle}>Mapa de possibilidades</h3>
          <p className={styles.explorerSubtitle}>
            Escolha um foco e veja ideias prontas para transformar agora mesmo em experiências
            digitais. Ajuste o nível de esforço para adaptá-las ao seu momento.
          </p>
        </div>
        {activeCategory ? (
          <p className={styles.explorerSubtitle}>{activeCategory.summary}</p>
        ) : null}
      </header>

      <div className={styles.controls}>
        <div className={styles.categories}>
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`${styles.categoryButton} ${
                category.id === selectedCategory ? styles.categoryButtonActive : ""
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <select
          className={styles.effortSelect}
          value={selectedEffort}
          onChange={(event) => setSelectedEffort(event.target.value as Effort)}
          aria-label="Filtrar por esforço"
        >
          {efforts.map((effort) => (
            <option key={effort.value} value={effort.value}>
              {effort.label}
            </option>
          ))}
        </select>
      </div>

      {filtered.length > 0 ? (
        <div className={styles.cards}>
          {filtered.map((possibility) => (
            <article key={possibility.title} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardPill}>{possibility.effort}</span>
                <h4 className={styles.cardTitle}>{possibility.title}</h4>
              </div>
              <p className={styles.cardDescription}>{possibility.summary}</p>
              <p className={styles.cardDescription}>{possibility.value}</p>
              <footer className={styles.cardFooter}>
                {possibility.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </footer>
            </article>
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          Combine outras opções para descobrir projetos ideais para o seu momento.
        </div>
      )}
    </section>
  );
}
