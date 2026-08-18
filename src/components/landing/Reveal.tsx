import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { trackSectionView } from "@/lib/tracking";

/**
 * Scroll-reveal discreto (fade-in + slide-up).
 * `delay` em ms permite entrada sequencial (stagger) em listas.
 * `trackId` registra, uma única vez, que o visitante alcançou a seção.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
  trackId,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
  trackId?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (trackId) trackSectionView(trackId);
            io.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [trackId]);

  return (
    <Tag
      // @ts-expect-error polymorphic ref
      ref={ref}
      className={cn("reveal", visible && "reveal-in", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
