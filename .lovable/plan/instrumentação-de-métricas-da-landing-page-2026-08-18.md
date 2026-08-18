# Instrumentação de métricas da landing page

## Situação atual

O analytics nativo dos últimos 30 dias registra apenas 2 visitas (16/08), 100% direto, desktop, Brasil — ou seja, tráfego de teste. Não há base estatística para análise de conversão.

O que impede análise futura: a página dispara apenas `PageView` (Meta Pixel + UTMify). Nenhum clique de CTA, scroll ou play de vídeo é medido. Sem isso, quando o tráfego chegar, não será possível saber onde o visitante desiste.

## O que será feito

Instrumentar a página para medir o funil real, sem alterar nada do visual, copy ou preço.

### 1. Camada única de eventos
Criar um helper de tracking que envia cada evento simultaneamente para:
- Meta Pixel (`fbq('track'/'trackCustom', ...)`) — para otimização de campanha
- UTMify (quando disponível)
- Analytics nativo do Lovable (pageview já coberto)

Seguro por padrão: se o pixel ainda não carregou, o evento é enfileirado; nunca quebra a página.

### 2. Eventos de clique nos CTAs
Cada botão de checkout passa a enviar `InitiateCheckout` (evento padrão do Meta, usado para otimização) com um identificador de origem, para saber qual botão converte:
- `hero` — CTA principal abaixo do vídeo
- `barra_fixa` — barra inferior "Quero as 1500 questões"
- `oferta` — "Garantir meu acesso agora"
- `cta_final` — "Comprar agora por R$37,90"

### 3. Eventos de profundidade de página
Disparo único por sessão quando o visitante alcança:
- seção Prova Visual ("Veja antes de comprar")
- seção Oferta/Preço
- seção FAQ

Isso revela em qual bloco a atenção morre.

### 4. Evento de vídeo
Registrar quando o player VTurb entra em tela e quando o play é iniciado — o vídeo é o principal ativo de convencimento da hero.

## Detalhes técnicos

- Novo arquivo `src/lib/tracking.ts`: função `track(event, params)` com fila para o `fbq`, tipagem de `window.fbq`/`window.utmify`, e guarda de execução só no browser (evita erro no SSR).
- `src/components/landing/CtaButton.tsx` e `src/components/landing/Bars.tsx`: aceitar/passar uma prop `origin` e chamar `track('InitiateCheckout', { origin })` no `onClick`, mantendo a navegação normal para o checkout Kiwify.
- `src/components/landing/Reveal.tsx` já usa IntersectionObserver: adicionar uma prop opcional `trackId` que dispara o evento de seção uma única vez, reaproveitando o observer existente (sem novo listener de scroll).
- `src/components/landing/VturbPlayer.tsx`: observer de visibilidade + listener de play do player, com fallback silencioso caso a API do VTurb não exponha o evento.
- Nenhuma mudança em preço, copy, layout ou paleta.

## Depois de publicar

Com tráfego rodando, a leitura passa a ser: visitas → % que chega na oferta → cliques por CTA → checkouts iniciados. Aí sim faz sentido uma análise de métrica com recomendação de ajuste de página.
