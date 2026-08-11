import { createFileRoute } from "@tanstack/react-router";
import { Hero, Autoridade, Dor } from "@/components/landing/SectionsTop";
import { Metodo, ProvaVisual, OQueRecebe, Bonus } from "@/components/landing/SectionsMid";
import { Dados, Oferta, Garantia, Faq, CtaFinal } from "@/components/landing/SectionsBottom";

const TITLE = "Chega de decorar resumo | 1.500+ Questões Comentadas de Residência";
const DESCRIPTION =
  "Resolva e entenda mais de 1.500 questões comentadas, extraídas das principais provas de residência médica. Por R$59,90 em até 6x.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      {/* 1. HERO — inclui espaço reservado para o vídeo de vendas */}
      <Hero />
      {/* 2. AUTORIDADE — credencial por fatos, sem foto/identidade */}
      <Autoridade />
      {/* 3. DOR */}
      <Dor />
      {/* 4. VIRADA / MÉTODO */}
      <Metodo />
      {/* 5. PROVA VISUAL DO CONTEÚDO */}
      <ProvaVisual />
      {/* 6. O QUE VOCÊ RECEBE */}
      <OQueRecebe />
      {/* 7. BÔNUS */}
      <Bonus />
      {/* 8. PROVA SOCIAL POR DADOS (sem depoimento pessoal) */}
      <Dados />
      {/* 9. OFERTA E PREÇO */}
      <Oferta />
      {/* 10. GARANTIA */}
      <Garantia />
      {/* 11. FAQ */}
      <Faq />
      {/* 12. CTA FINAL */}
      <CtaFinal />
    </main>
  );
}
