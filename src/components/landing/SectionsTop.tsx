import { Stethoscope, ShieldCheck, GraduationCap, Cross, Play, Clock, AlertTriangle, Layers } from "lucide-react";
import { Reveal } from "./Reveal";
import { CtaButton } from "./CtaButton";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "1.500+", label: "questões comentadas" },
  { value: "15", label: "provas de residência" },
  { value: "4", label: "instituições: ENARE, UERJ, UNIFESP e SUS-SP" },
];

export function Hero() {
  return (
    <header className="relative overflow-hidden bg-gradient-navy text-navy-foreground">
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1088}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-navy-deep/50" aria-hidden="true" />

      <div className="relative mx-auto max-w-3xl px-5 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16">
        <Reveal className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/20 bg-navy-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-navy-foreground/85">
            <Stethoscope className="h-3.5 w-3.5" aria-hidden="true" />
            ENARE · UERJ · UNIFESP · SUS-SP
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 text-center text-balance-tight text-[2rem] font-extrabold leading-[1.1] sm:text-5xl">
            Chega de decorar resumo: resolva as 1.500+ questões comentadas que
            mais caem em ENARE, UERJ, UNIFESP e SUS-SP
          </h1>
        </Reveal>

        {/* ==========================================================
            VÍDEO DE VENDAS — player 16:9 centralizado. Insira aqui o embed
            (YouTube / Vimeo / Wistia). Substitua o bloco <button> abaixo por:
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/SEU_ID?rel=0"
              title="Apresentação do material"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
            O vídeo pode ser gravação de tela do material (sem rosto).
        ========================================================== */}
        <Reveal delay={220}>
          <div className="mx-auto mt-9 w-full max-w-2xl">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-navy-foreground/15 bg-navy-deep shadow-[var(--shadow-elevate)]">
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,_oklch(0.42_0.085_258/0.55),_transparent_65%)]"
                aria-hidden="true"
              />
              <button
                type="button"
                className="group absolute inset-0 grid place-items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                aria-label="Assistir apresentação do material"
              >
                <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-accent shadow-[var(--shadow-cta)] transition-transform duration-200 group-hover:scale-105 sm:h-20 sm:w-20">
                  <Play className="h-7 w-7 translate-x-[1px] text-accent-foreground" fill="currentColor" aria-hidden="true" />
                </span>
                <span className="absolute bottom-4 text-xs font-medium uppercase tracking-[0.18em] text-navy-foreground/70">
                  Veja o material por dentro · 2 min
                </span>
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={280}>
          <div className="mt-8 flex flex-col items-center gap-3">
            <CtaButton size="xl" className="max-w-md cta-glow-hover">
              Quero o banco de questões por R$59,90
            </CtaButton>
            <p className="text-xs text-navy-foreground/70">
              Acesso imediato · em até 6x no cartão · garantia de 7 dias
            </p>
          </div>
        </Reveal>

        <Reveal delay={340}>
          <dl className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-navy-foreground/15 bg-navy-foreground/[0.07] px-4 py-4 text-center"
              >
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-display text-2xl font-extrabold text-accent sm:text-3xl">
                    {s.value}
                  </span>
                  <span className="mt-1 block text-xs leading-snug text-navy-foreground/75">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </header>
  );
}

const credentials = [
  {
    icon: Stethoscope,
    title: "Médicos aprovados",
    body: "Comentários feitos por médicos aprovados, explicando o raciocínio clínico por trás de cada resposta — não apenas o gabarito.",
  },
  {
    icon: Cross,
    title: "Raciocínio lógico + ilustrações",
    body: "Questões com raciocínio lógico bem explicado, algumas delas com ilustrações que ajudam a fixar padrões clínicos.",
  },
  {
    icon: GraduationCap,
    title: "Curadoria de provas reais",
    body: "15 provas de ENARE, UERJ, UNIFESP e SUS-SP mapeadas. Mais de 1.500 questões comentadas, organizadas por instituição e tema.",
  },
];

export function Autoridade() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20" aria-labelledby="autoridade">
      <Reveal>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-navy-soft">
          Quem preparou o material
        </p>
        <h2 id="autoridade" className="mt-3 max-w-2xl text-balance-tight text-2xl font-extrabold sm:text-4xl">
          Credibilidade vem do material — não de rosto em anúncio.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Aqui não há guru, nem palco. Há prova resolvida, comentário estruturado e critério de
          curadoria que você pode conferir antes de comprar.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {credentials.map((c, i) => (
          <Reveal key={c.title} delay={i * 110}>
            <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-navy">
                <c.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="mt-8 rounded-2xl border border-navy/15 bg-clinical p-6 sm:p-8">
          <h3 className="font-display text-lg font-bold text-navy">Sobre o material</h3>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80 sm:text-base">
            O banco foi desenvolvido por médicos aprovados no ano de residência. A curadoria seguiu
            quatro etapas: (1) levantamento das provas oficiais de ENARE, UERJ e USP; (2) digitação e
            conferência de cada enunciado contra o documento original; (3) redação do gabarito com
            raciocínio clínico passo a passo, raciocínio lógico e ilustrações que explicam o motivo
            de cada alternativa errada; (4) revisão final contra diretrizes atuais. São mais de dois
            anos de estudo e organização condensados em um banco pesquisável por instituição e por
            tema.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

const dores = [
  {
    icon: AlertTriangle,
    title: "Você estuda muito e ainda erra na hora da prova",
    body: "Ler resumo dá sensação de progresso, mas a prova cobra decisão clínica sob pressão. São habilidades diferentes.",
  },
  {
    icon: Clock,
    title: "Tempo perdido com material desatualizado",
    body: "Apostila de anos atrás, gabarito duvidoso, conduta que já mudou de diretriz. Cada hora nisso é uma hora que não volta.",
  },
  {
    icon: Layers,
    title: "Insegurança sobre o que realmente cai",
    body: "Sem mapear as provas anteriores, você estuda tudo com o mesmo peso — e a banca não cobra tudo com o mesmo peso.",
  },
  {
    icon: Stethoscope,
    title: "Ansiedade nas semanas finais",
    body: "Quando falta pouco, o que reduz ansiedade é reconhecimento de padrão: já ter visto aquele enunciado antes.",
  },
];

export function Dor() {
  return (
    <section className="bg-secondary/60 py-16 sm:py-20" aria-labelledby="dor">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <Reveal>
          <h2 id="dor" className="max-w-2xl text-balance-tight text-2xl font-extrabold sm:text-4xl">
            O problema quase nunca é falta de estudo. É estudo no formato errado.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {dores.map((d, i) => (
            <Reveal key={d.title} delay={i * 100}>
              <article className="flex h-full gap-4 rounded-2xl border border-border bg-card p-5 sm:p-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-destructive/10 text-destructive">
                  <d.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-bold leading-snug">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
