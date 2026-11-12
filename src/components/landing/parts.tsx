import { useCallback, useEffect, useRef, useState, type ReactNode, type MouseEventHandler } from "react";
import { ArrowRight, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-5xl px-5", className)}>{children}</div>;
}
export function Title({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <h2 className={cn("text-balance text-center font-display text-3xl font-bold leading-tight tracking-tight md:text-[2.6rem]", className)}>
      {children}
    </h2>
  );
}
export const Hl = ({ children }: { children: ReactNode }) => <span className="text-primary">{children}</span>;

export const ctaClass =
  "group inline-flex min-h-16 w-full max-w-md items-center justify-center gap-3 rounded-full border-2 border-cta/60 bg-cta px-6 py-4 text-center font-display text-base font-bold uppercase tracking-wide text-cta-foreground shadow-cta transition-colors hover:bg-cta-strong md:text-lg";

export function Cta({ href, children, className, pulse = true, onClick }: {
  href: string; children: ReactNode; className?: string; pulse?: boolean; onClick?: MouseEventHandler;
}) {
  return (
    <a href={href} onClick={onClick} className={cn(ctaClass, pulse && "animate-cta-pulse", className)}>
      <span>{children}</span>
      <ArrowRight className="size-5 shrink-0 transition-transform group-hover:translate-x-1" />
    </a>
  );
}
export const CtaRow = ({ label = "🎄 Quero meu Kit Natal Criativo" }: { label?: string }) => (
  <div className="mt-10 flex justify-center px-4"><Cta href="#oferta">{label}</Cta></div>
);

export function PainItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <li className={cn("flex items-start gap-3 rounded-xl border bg-card p-4 text-[0.95rem] leading-relaxed shadow-card", className)}>
      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
        <X className="size-3.5" strokeWidth={3} />
      </span>
      <span>{children}</span>
    </li>
  );
}
export function CheckList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={className ?? "mt-4 space-y-2.5"}>
      {items.map((i) => (
        <li key={i} className="flex items-start gap-2.5">
          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-cta text-cta-foreground">
            <Check className="size-3.5" strokeWidth={3} />
          </span>
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

const KEY = "kit-natal-deadline";
export function useCountdown(duration: number) {
  const [left, setLeft] = useState(duration);
  useEffect(() => {
    let end = NaN;
    try { end = parseInt(localStorage.getItem(KEY) ?? "", 10); } catch { /* ignore */ }
    if (!end || Number.isNaN(end) || end < Date.now()) {
      end = Date.now() + duration;
      try { localStorage.setItem(KEY, String(end)); } catch { /* ignore */ }
    }
    const tick = () => setLeft(Math.max(0, end - Date.now()));
    tick();
    const id = window.setInterval(tick, 500);
    return () => window.clearInterval(id);
  }, [duration]);
  return left;
}

export type Slide = { src: string; alt: string; width: number; height: number };
export function HeroCarousel({ slides }: { slides: Slide[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const paused = useRef(false);
  const n = slides.length;
  const go = useCallback((i: number) => {
    const el = ref.current; if (!el) return;
    const t = (i + n) % n;
    el.scrollTo({ left: t * el.clientWidth, behavior: "smooth" });
    setIdx(t);
  }, [n]);
  useEffect(() => {
    const id = window.setInterval(() => {
      if (paused.current || document.hidden) return;
      setIdx((p) => {
        const t = (p + 1) % n; const el = ref.current;
        el?.scrollTo({ left: t * el.clientWidth, behavior: "smooth" });
        return t;
      });
    }, 3200);
    return () => window.clearInterval(id);
  }, [n]);
  const onScroll = () => {
    const el = ref.current; if (!el) return;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    if (i !== idx && i >= 0 && i < n) setIdx(i);
  };
  const hold = () => { paused.current = true; };
  const release = () => { window.setTimeout(() => { paused.current = false; }, 2500); };
  return (
    <div className="mx-auto w-full max-w-[420px]">
      <div className="relative overflow-hidden rounded-3xl border-4 border-card bg-card shadow-plan">
        <div ref={ref} onScroll={onScroll} onPointerDown={hold} onPointerUp={release} onPointerLeave={release}
          onTouchStart={hold} onTouchEnd={release} className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto">
          {slides.map((s, i) => (
            <img key={s.src} src={s.src} alt={s.alt} width={s.width} height={s.height} loading={i === 0 ? "eager" : "lazy"}
              draggable={false} className="aspect-[4/5] w-full shrink-0 snap-center object-cover" />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
          {slides.map((s, i) => (
            <button key={s.src} type="button" aria-label={`Ver imagem ${i + 1}`} onClick={() => go(i)}
              className={cn("pointer-events-auto h-2 rounded-full bg-card/70 transition-all", i === idx ? "w-6 bg-card" : "w-2")} />
          ))}
        </div>
      </div>
      <p className="mt-4 text-center text-sm text-muted-foreground">Arraste para o lado e veja como funciona.</p>
    </div>
  );
}
