import { useState } from "react";
import { Check } from "lucide-react";
import kitImg from "@/assets/natal-kit.jpg";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Container, Cta, ctaClass } from "./parts";
import { BONUS, CHECKOUT, PLANS, UPSELL, brl, discountPct, savings } from "./data";

const Item = ({ children }: { children: React.ReactNode }) => (
  <li className="flex gap-2"><Check className="mt-0.5 size-5 shrink-0 text-cta-strong" />{children}</li>
);

export function Offer({ clock }: { clock: string }) {
  const b = PLANS.basico, c = PLANS.completo;
  const [open, setOpen] = useState(false);
  return (
    <section id="oferta" className="scroll-mt-14 bg-gradient-red py-20">
      <Container className="max-w-4xl">
        <div className="flex justify-center pt-2">
          <span className="rounded-full bg-brand-deep px-5 py-2 font-display text-xl font-bold tabular-nums text-primary-foreground shadow-card">{clock}</span>
        </div>
        <h3 className="mt-8 text-balance text-center font-display text-2xl font-bold leading-snug text-primary-foreground md:text-3xl">🎄 Escolha seu Kit de Natal!</h3>
        <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-6">
          <div className="flex flex-col rounded-[1.75rem] border-[6px] border-primary-foreground/30 bg-card p-6 text-card-foreground shadow-plan md:p-8">
            <h3 className="text-center font-display text-3xl font-bold uppercase">Kit Básico</h3>
            <ul className="mt-6 space-y-3 text-[0.98rem]">
              <Item><span><strong>20 moldes de Natal</strong></span></Item>
              <Item>Personagens para personalizar com fotos</Item>
              <Item>Acesso aos modelos pelo Canva</Item>
              <Item>Arquivos para baixar e imprimir</Item>
              <Item>Acesso imediato</Item>
            </ul>
            <div className="mt-auto pt-8 text-center">
              <p className="font-display text-xl font-bold text-primary line-through">de {brl(b.fromCents)}</p>
              <span className="mt-2 inline-block rounded-full bg-primary px-4 py-1.5 font-display text-sm font-bold uppercase text-primary-foreground">{discountPct("basico")}% de desconto</span>
              <p className="mt-3 font-display text-5xl font-bold text-cta">{brl(b.priceCents)}</p>
            </div>
            <div className="mt-6 flex justify-center">
              <button type="button" onClick={() => setOpen(true)} className={ctaClass}>Quero o kit básico</button>
            </div>
          </div>

          <div className="relative flex flex-col rounded-[1.75rem] border-[6px] border-primary-foreground/30 bg-card p-6 pt-10 text-card-foreground shadow-plan md:p-8 md:pt-12">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-cta px-5 py-1.5 font-display text-sm font-bold uppercase tracking-wide text-cta-foreground shadow-cta">Mais vendido</span>
            <h3 className="text-center font-display text-3xl font-bold uppercase">Kit Completo</h3>
            <img src={kitImg} alt="Exemplos do que vem no Kit Completo: moldes e decoração de Natal" width={1024} height={912} loading="lazy" className="mt-5 w-full rounded-2xl" />
            <ul className="mt-6 space-y-3 text-[0.98rem]">
              <Item><span><strong>200 moldes de Natal</strong></span></Item>
              <Item>Personagens para personalizar com fotos</Item>
              <Item>Acesso aos modelos pelo Canva</Item>
              <Item>Arquivos para baixar e imprimir</Item>
              {BONUS.map((t, i) => (
                <li key={t} className="flex items-center gap-3 rounded-xl border-2 border-gold-border bg-gold px-4 py-3 font-semibold">
                  <span className="text-2xl" aria-hidden>🎁</span>
                  <span>
                    <span className="mr-1.5 inline-block rounded-full bg-primary px-2.5 py-0.5 font-display text-xs font-bold uppercase text-primary-foreground">Bônus {i + 1}</span>– {t}
                  </span>
                </li>
              ))}
              <Item>Acesso imediato</Item>
            </ul>
            <div className="mt-auto pt-8 text-center">
              <p className="font-display text-xl font-bold text-primary line-through">de {brl(c.fromCents)}</p>
              <span className="mt-2 inline-block rounded-full bg-primary px-4 py-1.5 font-display text-sm font-bold uppercase text-primary-foreground">{discountPct("completo")}% de desconto</span>
              <p className="mt-3 font-display text-4xl font-bold uppercase text-cta-strong md:text-5xl">Somente hoje</p>
              <p className="font-display text-5xl font-bold text-cta">{brl(c.priceCents)}</p>
              <p className="mt-2 text-sm font-semibold text-cta-strong">Você economiza {brl(savings("completo"))}.</p>
            </div>
            <div className="mt-6 flex justify-center">
              <Cta href={CHECKOUT.completo} className="max-w-none">Quero o kit completo</Cta>
            </div>
          </div>
        </div>
      </Container>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md text-center">
          <DialogHeader>
            <DialogTitle className="text-center font-display text-2xl font-bold leading-snug">Espere! 🎄 Oferta especial pra você…</DialogTitle>
            <DialogDescription className="text-center text-base">
              Leve o <strong>Kit Natal Criativo completo</strong> — com todos os bônus — por um precinho a mais:
            </DialogDescription>
          </DialogHeader>
          <p className="mt-2 font-display text-lg font-bold text-primary line-through">de {brl(c.priceCents)}</p>
          <p className="font-display text-5xl font-bold text-cta">{brl(UPSELL.priceCents)}</p>
          <p className="mt-1 text-sm font-semibold text-muted-foreground">Oferta válida somente agora, nesta página.</p>
          <div className="mt-5 flex justify-center">
            <Cta href={UPSELL.checkoutUrl} pulse={false}>Quero o completo por {brl(UPSELL.priceCents)}</Cta>
          </div>
          <button type="button" onClick={() => { setOpen(false); window.location.href = CHECKOUT.basico; }}
            className="mt-4 text-sm text-muted-foreground underline underline-offset-2">
            Não, obrigado. Quero só o Kit Básico.
          </button>
        </DialogContent>
      </Dialog>
    </section>
  );
}
