/**
 * Camada única de eventos de conversão.
 *
 * Envia o mesmo evento para o Meta Pixel e para a UTMify (quando disponível).
 * Tudo roda apenas no browser e falha em silêncio — nunca quebra a página.
 */

type Params = Record<string, string | number | boolean>;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    utmify?: { track?: (event: string, params?: Params) => void };
  }
}

/** Eventos padrão do Meta (usados para otimização de campanha). */
const STANDARD_EVENTS = new Set(["PageView", "ViewContent", "InitiateCheckout", "Lead", "Purchase"]);

/** Evita disparo duplicado de eventos de uma-vez-por-sessão. */
const fired = new Set<string>();

function sendToMeta(event: string, params?: Params) {
  const fbq = window.fbq;
  if (typeof fbq !== "function") return;
  const method = STANDARD_EVENTS.has(event) ? "track" : "trackCustom";
  fbq(method, event, params);
}

/** Dispara um evento de conversão em todos os destinos configurados. */
export function track(event: string, params?: Params) {
  if (typeof window === "undefined") return;
  try {
    sendToMeta(event, params);
    window.utmify?.track?.(event, params);
  } catch {
    /* tracking nunca deve interromper a navegação do usuário */
  }
}

/** Igual a `track`, mas só na primeira vez para a chave informada. */
export function trackOnce(key: string, event: string, params?: Params) {
  if (typeof window === "undefined" || fired.has(key)) return;
  fired.add(key);
  track(event, params);
}

/** Clique em qualquer CTA de checkout. `origin` identifica o botão. */
export function trackCheckoutClick(origin: string) {
  track("InitiateCheckout", { origin, value: 57.9, currency: "BRL" });
}

/** Visitante alcançou uma seção-chave da página (uma vez por sessão). */
export function trackSectionView(section: string) {
  trackOnce(`section:${section}`, "SectionView", { section });
}
