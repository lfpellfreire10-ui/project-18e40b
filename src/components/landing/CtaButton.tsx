import { cn } from "@/lib/utils";

/**
 * CHECKOUT: substitua CHECKOUT_URL pelo link do checkout da Kiwify.
 * Ex.: https://pay.kiwify.com.br/xxxxxxx
 */
export const CHECKOUT_URL = "#checkout-kiwify";

export function CtaButton({
  children,
  className,
  size = "lg",
  pulse = false,
}: {
  children: React.ReactNode;
  className?: string;
  size?: "md" | "lg" | "xl";
  pulse?: boolean;
}) {
  const sizes = {
    md: "px-6 py-3 text-sm",
    lg: "px-7 py-4 text-base",
    xl: "px-8 py-5 text-base sm:text-lg",
  } as const;

  return (
    <a
      href={CHECKOUT_URL}
      className={cn(
        "group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-accent font-display font-bold tracking-tight text-accent-foreground",
        "shadow-[var(--shadow-cta)] transition-all duration-200 ease-out",
        "hover:scale-[1.02] hover:brightness-105 active:scale-[0.99]",
        "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring",
        "sm:w-auto",
        sizes[size],
        pulse && "animate-cta-pulse",
        className,
      )}
    >
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-1"
      >
        →
      </span>
    </a>
  );
}
