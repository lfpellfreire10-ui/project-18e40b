import { Check, X, BookOpen, Brain, FileCheck2, RefreshCw, Smartphone, ListChecks, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import questao1 from "@/assets/questao-1.jpg";
import questao2 from "@/assets/questao-2.jpg";
import questao3 from "@/assets/questao-3.jpg";

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
    "Comentário explica por que cada alternativa cai ou não, com raciocínio lógico",
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
    src: questao1,
    titulo: "Questão + gabarito comentado",
    desc: "Enunciado real, alternativa correta destacada e comentário explicando o raciocínio lógico passo a passo.",
  },
  {
    src: questao2,
    titulo: "Comentário estruturado",
    desc: "Raciocínio clínico, diagnóstico diferencial e o motivo de cada alternativa errada, com ilustrações quando necessário.",
  },
  {
    src: questao3,
    titulo: "Mapa mental de fechamento",
    desc: "Síntese visual do tema para revisão rápida nas semanas finais (bônus incluso).",
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
                <div className="overflow-hidden bg-card">
                  <img
                    src={a.src}
                    alt={`Exemplo de ${a.titulo.toLowerCase()} do banco de questões de residência médica`}
                    width={1280}
                    height={864}
                    loading="lazy"
                    className="w-full transition-transform duration-500 ease-out group-hover:scale-[1.06]"
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
  { icon: FileCheck2, t: "Cobertura ENARE, UERJ e USP", d: "15 provas oficiais mapeadas questão por questão." },
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

const bonus = [
  { t: "Mapas mentais das grandes áreas", d: "Síntese visual para revisão nas 72h finais.", valor: "R$67" },
  { t: "Guia de erros clássicos de prova", d: "Pegadinhas recorrentes de ENARE, UERJ e USP.", valor: "R$47" },
  { t: "Planilha de desempenho por tema", d: "Registre acertos e identifique lacunas objetivamente.", valor: "R$37" },
];

export function Bonus() {
  return (
    <section className="bg-secondary/60 py-16 sm:py-20" aria-labelledby="bonus">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-navy-soft">Inclusos</p>
          <h2 id="bonus" className="mt-3 text-balance-tight text-2xl font-extrabold sm:text-4xl">
            Três bônus que acompanham o banco de questões
          </h2>
        </Reveal>

        <div className="mt-10 space-y-4">
          {bonus.map((b, i) => (
            <Reveal key={b.t} delay={i * 110}>
              <article
                className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] sm:p-6"
                style={{ marginLeft: `${i * 10}px` }}
              >
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent-foreground/70">
                    Bônus {i + 1}
                  </span>
                  <h3 className="mt-1 font-display text-base font-bold sm:text-lg">{b.t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
                </div>
                <div className="shrink-0 text-right">
                  <span className="block text-sm text-muted-foreground line-through">{b.valor}</span>
                  <span className="block font-display text-sm font-extrabold text-success">
                    Incluso
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
