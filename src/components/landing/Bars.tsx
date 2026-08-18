import { Zap } from "lucide-react";
import { CHECKOUT_URL } from "./CtaButton";
import { trackCheckoutClick } from "@/lib/tracking";

/** Barra fixa no topo com o selo de oferta de lançamento. */
export function TopOfferBar() {
  return (
    <div className="sticky top-0 z-50 bg-gradient-accent text-accent-foreground">
      <p className="mx-auto flex max-w-5xl items-center justify-center gap-2 px-4 py-2 text-center text-[0.7rem] font-bold uppercase tracking-[0.12em] sm:text-xs">
        <Zap className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        Preço por tempo limitado · R$37,90 · Garantia de 7 dias · Acesso vitalício
      </p>
    </div>
  );
}

/** Barra fixa no rodapé com CTA permanente. */
export function StickyCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-navy-foreground/15 bg-navy-deep/95 px-4 py-3 backdrop-blur">
      <a
        href={CHECKOUT_URL}
        onClick={() => trackCheckoutClick("barra_fixa")}
        className="mx-auto flex max-w-md items-center justify-center gap-2 rounded-xl bg-gradient-accent px-6 py-3.5 font-display text-sm font-extrabold uppercase tracking-tight text-accent-foreground shadow-[var(--shadow-cta)] transition-all duration-200 hover:scale-[1.02] hover:brightness-105 active:scale-[0.99] sm:text-base"
      >
        Quero as 1500 questões
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}
