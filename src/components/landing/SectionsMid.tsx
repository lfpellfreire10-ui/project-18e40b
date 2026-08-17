import { Check, X, BookOpen, Brain, FileCheck2, RefreshCw, Smartphone, ListChecks, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import gabarito1 from "@/assets/gabarito-diverticulite-aguda.jpg";
import gabarito2 from "@/assets/gabarito-tumoracao-anexial.jpg";
import gabarito3 from "@/assets/gabarito-iam-musculo-papilar.jpg";

export function Metodo() {
  const resumo = [
    "Leitura passiva: reconhecimento, não recuperação",
    "Sem contexto de enunciado longo e caso clínico",
    "Não treina eliminação de alternativa plausível",
    "Você descobre o que não sabe só no dia da prova",
  ];
  const questao = [
    "Recuperação ativa: obriga decisão antes da resposta",
    "Enunciado real da banca, no formato da prova",
    "Comentário explica por que cada alternativa cai ou não, com raciocínio lógico — método validado em ENARE, UERJ, UNIFESP e SUS-SP",
    "Ilustrações em questões selecionadas para fixar padrões clínicos",
    "A lacuna aparece hoje, com tempo para corrigir",
  ];

  return (
    <section className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20" aria-labelledby="metodo">
      <Reveal>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-navy-soft">A virada</p>
        <h2 id="metodo" className="mt-3 max-w-3xl text-balance-tight text-2xl font-extrabold sm:text-4xl">
          Questão comentada não é revisão. É simulação do que a banca vai exigir de você.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          A prova de residência não pede que você recite fisiopatologia. Ela pede uma conduta diante
          de um caso. Treinar no formato final é o caminho mais curto entre estudar e acertar.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border border-border bg-muted/50 p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-background text-muted-foreground">
                <BookOpen className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="font-display text-lg font-bold text-muted-foreground">
                Resumo decorado
              </h3>
            </div>
            <ul className="mt-5 space-y-3">
              {resumo.map((r) => (
                <li key={r} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" aria-hidden="true" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="h-full rounded-2xl border-2 border-navy/25 bg-card p-6 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-navy text-navy-foreground">
                <Brain className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="font-display text-lg font-bold text-navy">Questão comentada</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {questao.map((q) => (
                <li key={q} className="flex gap-3 text-sm leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const amostras = [
  {
    src: gabarito1,
    titulo: "ENARE 2025 · Diverticulite aguda",
    desc: "Classificação de Hinchey destrinchada e tabela de conduta por estágio para fixar a decisão da prova.",
  },
  {
    src: gabarito2,
    titulo: "ENARE 2025 · Tumoração anexial",
    desc: "Comentário completo com raciocínio clínico, diagnósticos diferenciais e imagem de ultrassonografia do caso.",
  },
  {
    src: gabarito3,
    titulo: "UNIFESP 2025 · IAM e ruptura de papilar",
    desc: "Correlação entre parede, derivações e artéria, com a conduta na insuficiência mitral aguda pós-infarto.",
  },
];

export function ProvaVisual() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-navy py-16 text-navy-foreground sm:py-24"
      aria-labelledby="prova-visual"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
            Veja antes de comprar
          </p>
          <h2
            id="prova-visual"
            className="mt-3 max-w-3xl text-balance-tight text-2xl font-extrabold sm:text-4xl"
          >
            Isto é o material por dentro. Sem promessa vaga.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-foreground/80">
            Cada uma das 1.500+ questões segue o mesmo padrão de comentário. Abaixo, exemplos reais
            do conteúdo.
          </p>
        </Reveal>

        {/* PROVA VISUAL: substitua as imagens por prints reais do material, se desejar. */}
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {amostras.map((a, i) => (
            <Reveal key={a.titulo} delay={i * 120}>
              <figure className="group h-full overflow-hidden rounded-2xl border border-navy-foreground/15 bg-navy-deep/60 shadow-[var(--shadow-elevate)]">
                <div className="flex items-center gap-1.5 border-b border-navy-foreground/10 bg-navy-foreground/[0.06] px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-navy-foreground/25" />
                  <span className="h-2.5 w-2.5 rounded-full bg-navy-foreground/25" />
                  <span className="h-2.5 w-2.5 rounded-full bg-navy-foreground/25" />
                  <span className="ml-2 truncate text-[11px] uppercase tracking-[0.14em] text-navy-foreground/60">
                    {a.titulo}
                  </span>
                </div>
                <div className="aspect-[3/4] overflow-hidden bg-white sm:aspect-[4/5]">
                  <img
                    src={a.src}
                    alt={`Gabarito comentado — ${a.titulo} — do banco de questões de residência médica`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                  />
                </div>
                <figcaption className="px-4 py-4 text-sm leading-relaxed text-navy-foreground/75">
                  {a.desc}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const entregaveis = [
  { icon: ListChecks, t: "1.500+ questões comentadas", d: "Organizadas por instituição e por grande área." },
  { icon: FileCheck2, t: "Cobertura ENARE, UERJ, UNIFESP e SUS-SP", d: "15 provas oficiais mapeadas questão por questão." },
  { icon: Brain, t: "Gabaritos bem explicados", d: "Raciocínio clínico, raciocínio lógico e alternativas erradas explicadas uma a uma." },
  { icon: Smartphone, t: "Acesso digital imediato", d: "PDF otimizado para celular, tablet e computador. Baixe e estude offline." },
  { icon: RefreshCw, t: "Atualizações incluídas", d: "Novas provas e correções entram sem custo adicional." },
  { icon: Sparkles, t: "Área de membros vitalícia", d: "Compra única, acesso permanente pela plataforma." },
];

export function OQueRecebe() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20" aria-labelledby="recebe">
      <Reveal>
        <h2 id="recebe" className="max-w-2xl text-balance-tight text-2xl font-extrabold sm:text-4xl">
          O que você recebe
        </h2>
      </Reveal>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {entregaveis.map((e, i) => (
          <Reveal as="li" key={e.t} delay={i * 90}>
            <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-navy text-navy-foreground">
                <e.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-base font-bold leading-snug">{e.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{e.d}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

