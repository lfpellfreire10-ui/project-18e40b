import { ShieldCheck, BadgeCheck, CalendarClock, Lock, CreditCard } from "lucide-react";
import { Reveal } from "./Reveal";
import { CtaButton } from "./CtaButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const cobertura = [
  { inst: "ENARE", provas: "5 provas", questoes: "500 questões", anos: "2021 – 2025" },
  { inst: "UERJ", provas: "5 provas", questoes: "500 questões", anos: "2021 – 2025" },
  { inst: "UNIFESP", provas: "3 provas", questoes: "300 questões", anos: "2021 – 2025" },
  { inst: "SUS-SP", provas: "2 provas", questoes: "200 questões", anos: "2021 – 2025" },
];

export function Dados() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20" aria-labelledby="dados">
      <Reveal>
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-success/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-success">
            <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" /> Atualizado
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Provas de 2021 a 2025
          </span>
        </div>
        <h2 id="dados" className="mt-4 max-w-3xl text-balance-tight text-2xl font-extrabold sm:text-4xl">
          Os números da cobertura, instituição por instituição
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Este material reúne as principais provas dos ciclos de 2024/2025 — a base do que as bancas
          vêm cobrando. Confira a distribuição:
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cobertura.map((c, i) => (
          <Reveal key={c.inst} delay={i * 110}>
            <div className="h-full rounded-2xl border border-navy/15 bg-clinical p-6">
              <h3 className="font-display text-xl font-extrabold text-navy">{c.inst}</h3>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex items-center justify-between gap-2">
                  <dt className="text-muted-foreground">Provas</dt>
                  <dd className="font-semibold">{c.provas}</dd>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <dt className="text-muted-foreground">Questões</dt>
                  <dd className="font-semibold">{c.questoes}</dd>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <dt className="text-muted-foreground">Anos</dt>
                  <dd className="font-semibold">{c.anos}</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        ))}
      </div>

      {/*
        DEPOIMENTOS (futuro): quando houver relatos reais de compradores, inserir aqui
        um grid de cards com nome ou iniciais + instituição/ano — sem exigir foto.
        Ex.: <blockquote>"..."</blockquote><footer>M. S. — aprovada ENARE 2025</footer>
      */}
    </section>
  );
}

export function Oferta() {
  return (
    <section id="oferta" className="bg-gradient-navy py-16 text-navy-foreground sm:py-24" aria-labelledby="oferta-titulo">
      <div className="mx-auto max-w-2xl px-5 sm:px-6">
        <Reveal>
          <div className="text-center">
            <span
              id="oferta-titulo"
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-accent"
            >
              <Zap className="h-3.5 w-3.5" aria-hidden="true" />
              Oferta de lançamento
            </span>
            <p className="mx-auto mt-3 max-w-lg text-sm text-navy-foreground/75 sm:text-base">
              Preço promocional de lançamento por tempo limitado. Após o período, o valor volta para
              R$297.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-7 rounded-3xl border border-navy-foreground/15 bg-navy-foreground/[0.07] p-6 shadow-[var(--shadow-elevate)] sm:p-9">
            <ul className="space-y-2 text-sm text-navy-foreground/80">
              <li className="flex items-center justify-between gap-3">
                <span>Banco com 1.500+ questões comentadas</span>
                <span className="shrink-0 line-through opacity-70">R$297</span>
              </li>
            </ul>

            <div className="mt-6 border-t border-navy-foreground/15 pt-6 text-center">
              <p className="text-sm text-navy-foreground/70">
                Valor somado: <span className="line-through">R$398</span> · Valor normal: <span className="line-through">R$297</span>
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-accent">
                Hoje você investe
              </p>
              <p className="mt-1 font-display text-5xl font-extrabold sm:text-6xl">
                R$79,90
              </p>
              <p className="mt-2 text-sm text-navy-foreground/80">
                ou <strong className="font-semibold text-navy-foreground">6x de R$13,32</strong> no
                cartão
              </p>


              <div className="mt-7">
                {/* CHECKOUT KIWIFY: o link é definido em src/components/landing/CtaButton.tsx (CHECKOUT_URL) */}
                <CtaButton size="xl" pulse className="w-full">
                  Garantir meu acesso agora
                </CtaButton>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-navy-foreground/70">
                <span className="inline-flex items-center gap-1.5">
                  <Lock className="h-3.5 w-3.5" aria-hidden="true" /> Pagamento seguro
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CreditCard className="h-3.5 w-3.5" aria-hidden="true" /> Cartão ou Pix
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarClock className="h-3.5 w-3.5" aria-hidden="true" /> Acesso imediato
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Garantia() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:px-6" aria-labelledby="garantia">
      <Reveal>
        <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-5 rounded-2xl border border-success/25 bg-success/[0.06] p-6 sm:p-8">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-success text-success-foreground sm:h-16 sm:w-16">
            <ShieldCheck className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <h2 id="garantia" className="font-display text-lg font-extrabold sm:text-xl">
              Garantia incondicional de 7 dias
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Acesse todo o conteúdo. Se concluir que o material não serve para a sua preparação,
              basta solicitar reembolso em até 7 dias pela plataforma Kiwify. Devolução integral, sem
              justificativa.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

const faq = [
  {
    q: "Quem preparou esse material?",
    a: "O material foi preparado por médicos aprovados no ano de residência, com experiência direta nas provas de ENARE, UERJ, UNIFESP e SUS-SP. A credibilidade está no processo: enunciados conferidos contra o documento original da banca, gabaritos construídos com raciocínio clínico e raciocínio lógico, ilustrações para fixar conceitos, e revisão final contra diretrizes vigentes. Você pode avaliar a qualidade pelos exemplos reais exibidos nesta página antes de comprar.",
  },
  {
    q: "Quais provas e instituições estão incluídas?",
    a: "São 15 provas de ENARE, UERJ, UNIFESP e SUS-SP, dos ciclos de 2021 a 2025, totalizando mais de 1.500 questões comentadas e organizadas por instituição e por grande área.",
  },
  {
    q: "O comentário é só o gabarito?",
    a: "Não. Cada questão traz o raciocínio clínico e o raciocínio lógico que levam à resposta, o diagnóstico diferencial quando aplicável, ilustrações em questões selecionadas e a justificativa de por que cada alternativa errada está errada. É esse encadeamento que treina a decisão exigida na prova.",
  },
  {
    q: "Como recebo o acesso?",
    a: "Imediatamente após a confirmação do pagamento, o acesso é liberado por e-mail pela plataforma Kiwify. O material é digital, otimizado para celular, e pode ser baixado para estudo offline.",
  },
  {
    q: "Serve para quem está no internato ou já formado?",
    a: "Sim. O banco é indicado para formandos e recém-formados em preparação para ENARE, UERJ, UNIFESP e SUS-SP, tanto em primeira tentativa quanto em revisão para nova tentativa.",
  },
  {
    q: "E se eu não gostar?",
    a: "Há garantia incondicional de 7 dias. Solicitação de reembolso pela própria plataforma, com devolução integral do valor.",
  },
];

export function Faq() {
  return (
    <section className="bg-secondary/60 py-16 sm:py-20" aria-labelledby="faq">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <Reveal>
          <h2 id="faq" className="text-balance-tight text-2xl font-extrabold sm:text-4xl">
            Perguntas frequentes
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <Accordion type="single" collapsible className="mt-8 space-y-3">
            {faq.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`item-${i}`}
                className="rounded-xl border border-border bg-card px-5 last:border-b"
              >
                <AccordionTrigger className="py-4 text-left font-display text-base font-bold hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

export function CtaFinal() {
  return (
    <section className="bg-gradient-navy py-16 text-navy-foreground sm:py-20" aria-labelledby="cta-final">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-6">
        <Reveal>
          <h2 id="cta-final" className="text-balance-tight text-2xl font-extrabold sm:text-4xl">
            1.500+ questões comentadas de 15 provas. R$79,90, com garantia de 7 dias.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-navy-foreground/80">
            Este material reúne as questões reais de ENARE, UERJ, UNIFESP e SUS-SP com o raciocínio clínico
            destrinchado alternativa por alternativa — com raciocínio lógico, ilustrações e gabaritos bem explicados.
            O preço de lançamento vale por tempo limitado — depois volta para R$297.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <CtaButton size="xl" pulse className="max-w-md">
              Comprar agora por R$79,90
            </CtaButton>
            <p className="text-xs text-navy-foreground/70">
              Acesso imediato · 6x de R$13,32 · reembolso em 7 dias
            </p>
          </div>

        </Reveal>
      </div>
      <footer className="mx-auto mt-14 max-w-3xl border-t border-navy-foreground/15 px-5 pt-6 text-center text-xs leading-relaxed text-navy-foreground/55 sm:px-6">
        <p>
          Material de estudo independente, sem vínculo institucional com ENARE, UERJ ou USP. Pagamento
          processado pela Kiwify.
        </p>
      </footer>
    </section>
  );
}
