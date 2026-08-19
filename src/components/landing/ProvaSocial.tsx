import { MessageCircle, Instagram } from "lucide-react";
import { Reveal } from "./Reveal";
import p1 from "@/assets/prova-social-1.jpeg.asset.json";
import p2 from "@/assets/prova-social-2.png.asset.json";
import p3 from "@/assets/prova-social-3.jpeg.asset.json";

const prints = [
  { src: p1.url, alt: "Conversa de aluno elogiando o material de questões comentadas para o ENARE" },
  { src: p2.url, alt: "Mensagem de aluno relatando melhora de rendimento com o banco de questões" },
  { src: p3.url, alt: "Conversa de aluna indicada por amiga sobre o material do Grupo Humanus" },
];

export const INSTAGRAM_HANDLE = "@grupohumanus__";
export const INSTAGRAM_URL = "https://instagram.com/grupohumanus__";
export const WHATSAPP_LABEL = "21 93618-5405";
export const WHATSAPP_URL = "https://wa.me/5521936185405";

export function ProvaSocial() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20" aria-labelledby="prova-social">
      <Reveal trackId="prova_social">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-navy-soft">
          Quem já está estudando
        </p>
        <h2
          id="prova-social"
          className="mt-3 max-w-3xl text-balance-tight text-2xl font-extrabold sm:text-4xl"
        >
          Mensagens reais de quem usa o material
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Prints de conversas no suporte do Grupo Humanus, enviados por quem já está resolvendo as
          provas.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {prints.map((p, i) => (
          <Reveal key={p.src} delay={i * 110}>
            <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                decoding="async"
                className="w-full object-contain"
              />
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Contato() {
  return (
    <section className="mx-auto max-w-3xl px-5 pb-4 sm:px-6" aria-labelledby="contato">
      <Reveal>
        <div className="rounded-2xl border border-navy/15 bg-clinical p-6 sm:p-8">
          <h2 id="contato" className="font-display text-lg font-extrabold text-navy sm:text-xl">
            Ficou com dúvida? Fale com o Grupo Humanus
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Atendimento feito pela própria equipe que produziu o material — médicos aprovados na
            residência. Responda a sua dúvida antes de comprar.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-navy/20 bg-card px-5 py-3 text-sm font-bold text-navy transition-colors hover:bg-secondary"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
              Instagram {INSTAGRAM_HANDLE}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-navy px-5 py-3 text-sm font-bold text-navy-foreground transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Suporte {WHATSAPP_LABEL}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
