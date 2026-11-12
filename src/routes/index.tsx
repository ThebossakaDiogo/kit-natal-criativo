import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Star } from "lucide-react";
import heroImg from "@/assets/natal-hero.jpg";
import antesDepois from "@/assets/natal-antes-depois.jpg";
import modelos from "@/assets/natal-modelos.jpg";
import ex1 from "@/assets/natal-exemplo1.jpg";
import ex2 from "@/assets/natal-exemplo2.jpg";
import ex3 from "@/assets/natal-exemplo3.jpg";
import criadora from "@/assets/criadora.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckList, Container, Cta, CtaRow, HeroCarousel, Hl, PainItem, Title, useCountdown, type Slide } from "@/components/landing/parts";
import { Offer } from "@/components/landing/Offer";
import { DORES, FAQ, MOMENTOS, PASSOS, PERSONAGENS, PESSOAS, PIOR, PROBLEMAS, USOS, formatClock } from "@/components/landing/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kit Natal Criativo — +200 moldes de Natal editáveis no Canva" },
      { name: "description", content: "Você só coloca a FOTO e pronto: +200 moldes para criar bonequinhos de Natal personalizados no Canva." },
      { property: "og:title", content: "Kit Natal Criativo — +200 moldes de Natal" },
      { property: "og:description", content: "Transforme qualquer pessoa em um personagem de Natal. Edite no Canva, baixe e imprima." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SLIDES: Slide[] = [
  { src: heroImg, alt: "Figurinhas de Natal com rostos de família", width: 896, height: 1120 },
  { src: antesDepois, alt: "Antes e depois: foto da família virando personagens de Natal", width: 1200, height: 800 },
  { src: modelos, alt: "Moldes de personagens de Natal para colocar o rosto", width: 1200, height: 912 },
  { src: ex1, alt: "Parede decorada com figurinhas de Natal personalizadas", width: 800, height: 1008 },
  { src: ex2, alt: "Figurinhas de Natal impressas e recortadas", width: 800, height: 1008 },
  { src: ex3, alt: "Porta de vidro decorada com personagens de Natal", width: 800, height: 1008 },
];

function Index() {
  const clock = formatClock(useCountdown(1_500_000));
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="sticky top-0 z-40 bg-gradient-red text-primary-foreground shadow-card">
        <div className="flex h-12 items-center justify-center gap-2 whitespace-nowrap px-3 text-xs font-bold uppercase tracking-wide sm:gap-3 sm:text-sm">
          <span aria-hidden>🔥</span>
          <span>Últimos minutos por 50% OFF</span>
          <span className="rounded-full bg-card px-2.5 py-0.5 font-display tabular-nums text-primary">{clock}</span>
          <span aria-hidden>🎄</span>
        </div>
      </div>

      <header className="relative bg-gradient-hero pb-20 pt-12">
        <span aria-hidden className="absolute left-[6%] top-10 hidden animate-float-soft text-5xl opacity-40 md:block">🎄</span>
        <span aria-hidden className="absolute right-[8%] top-60 hidden animate-float-soft text-5xl opacity-40 md:block">🎅</span>
        <span aria-hidden className="absolute bottom-40 left-[9%] hidden animate-float-soft text-4xl opacity-30 md:block">⛄</span>
        <span aria-hidden className="absolute right-[12%] top-[30rem] hidden animate-float-soft text-4xl opacity-30 md:block">❄️</span>
        <Container className="relative text-center">
          <div className="inline-flex items-center gap-3 rounded-full border bg-card px-4 py-2 shadow-card">
            <span className="flex text-star">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}</span>
            <span className="text-sm font-semibold">+200 moldes editáveis no Canva</span>
          </div>
          <h1 className="mx-auto mt-6 max-w-4xl text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
            Você Só Coloca a <Hl>FOTO</Hl> e Pronto: <Hl>+200 Moldes</Hl> Para Criar Bonequinhos de Natal! 🎄
          </h1>
          <div className="mt-10"><HeroCarousel slides={SLIDES} /></div>
          <div className="mt-8 flex justify-center"><Cta href="#oferta">🎄 Quero acessar os 200 modelos</Cta></div>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
            Coloque o rosto dos filhos, marido, amigos, familiares ou até dos colegas de trabalho em Papais Noéis, duendes, renas, bonecos de neve e muito mais!
          </p>
          <p className="mt-3 font-semibold">É só escolher o personagem, colocar o rosto, baixar e imprimir!</p>
        </Container>
      </header>

      <section className="py-20">
        <Container>
          <Title>Se você está aqui, provavelmente já percebeu que:</Title>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">{DORES.map((d) => <PainItem key={d}>{d}</PainItem>)}</ul>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border bg-gradient-to-b from-card to-blush p-7 shadow-card">
              <h3 className="text-2xl font-bold">E o pior de tudo...</h3>
              <p className="mt-3 leading-relaxed">Você até queria preparar algo lindo, criativo, engraçado e cheio de surpresas...</p>
              <p className="mt-4 font-bold">Mas:</p>
              <ul className="mt-3 space-y-3">{PIOR.map((d) => <PainItem key={d}>{d}</PainItem>)}</ul>
            </div>
            <div className="rounded-3xl border bg-gradient-to-b from-card to-blush p-7 shadow-card">
              <h3 className="text-2xl font-bold">E ainda tem aquela preocupação...</h3>
              <p className="mt-4 font-display text-xl font-bold text-primary">O orçamento está apertado.</p>
              <p className="mt-3 leading-relaxed">Você queria surpreender todo mundo neste Natal, mas não quer gastar uma fortuna com decoração ou lembrancinhas.</p>
            </div>
          </div>
          <div className="mt-10 rounded-2xl bg-gradient-ink px-6 py-7 text-center font-display text-xl font-bold text-ink-foreground shadow-plan">
            Só que existe uma maneira <Hl>MUITO mais fácil</Hl> de deixar tudo personalizado!
          </div>
        </Container>
      </section>

      <section className="bg-gradient-red py-12">
        <Container>
          <Title className="text-3xl text-primary-foreground md:text-4xl">Aqui está o SEGREDO para transformar QUALQUER PESSOA em um personagem de NATAL!</Title>
        </Container>
        <CtaRow />
      </section>

      <section className="bg-card py-20">
        <Container className="max-w-3xl">
          <Title>O QUE É O <Hl>KIT NATAL CRIATIVO?</Hl></Title>
          <div className="mt-8 space-y-4 text-center text-lg leading-relaxed">
            <p>Um <strong>PACK COMPLETO com +200 modelos de personagens de Natal EDITÁVEIS NO CANVA</strong>, pensado para mães, famílias, professores e pessoas que querem criar figurinhas personalizadas, divertidas e inesquecíveis, sem precisar saber nada de edição.</p>
            <p>Imagine colocar o rosto do seu filho em um duendinho, do seu marido em um Papai Noel, da sua amiga em uma Mamãe Noel ou até do seu chefe em um boneco de neve engraçado!</p>
            <p>Você escolhe quem quiser, coloca a foto no personagem, personaliza e imprime.</p>
            <p className="font-bold text-primary">E o melhor: você mesma consegue fazer tudo pelo Canva, de um jeito simples e rápido!</p>
          </div>
          <img src={antesDepois} alt="Antes e depois" width={1200} height={800} loading="lazy" className="mt-10 w-full rounded-3xl shadow-plan" />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border bg-blush p-7">
              <h3 className="text-xl font-bold">Ele foi feito para você que quer acabar com esses problemas:</h3>
              <ul className="mt-5 space-y-2.5">{PROBLEMAS.map((d) => <PainItem key={d} className="p-3 shadow-none">{d}</PainItem>)}</ul>
            </div>
            <div className="rounded-3xl border bg-gradient-ink p-7 text-ink-foreground">
              <h3 className="text-xl font-bold">E transformar o seu Natal em um momento cheio de:</h3>
              <ul className="mt-5 space-y-3">
                {MOMENTOS.map(([e, t]) => (
                  <li key={t} className="flex items-center gap-3 rounded-xl bg-ink-foreground/10 px-4 py-3">
                    <span className="text-xl" aria-hidden>{e}</span><span className="font-medium">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
        <CtaRow />
      </section>

      <section className="bg-gradient-ink py-20 text-ink-foreground">
        <Container className="max-w-3xl">
          <Title className="text-ink-foreground">O que você terá acesso dentro do Kit?</Title>
          <div className="mt-12 space-y-8">
            <article className="rounded-3xl bg-card p-7 text-card-foreground shadow-plan md:p-9">
              <h3 className="text-2xl font-bold">🎅 +200 Modelos Editáveis de Natal</h3>
              <p className="mt-3 leading-relaxed">Uma coleção com mais de 200 modelos de personagens para você personalizar com o rosto de <strong>QUEM QUISER!</strong></p>
              <p className="mt-4 font-bold">Você vai encontrar personagens como:</p>
              <CheckList items={PERSONAGENS} className="mt-3 grid gap-2.5 sm:grid-cols-2" />
              <p className="mt-5 font-bold text-primary">Tudo em modelos prontos para editar pelo Canva!</p>
              <img src={modelos} alt="Modelos do kit" width={1200} height={912} loading="lazy" className="mt-6 w-full rounded-2xl border" />
            </article>
            <article className="rounded-3xl bg-card p-7 text-card-foreground shadow-plan md:p-9">
              <h3 className="text-2xl font-bold">🎨 Personalização pelo Canva</h3>
              <p className="mt-3 font-bold text-primary">Você NÃO precisa saber editar!</p>
              <p className="mt-2 leading-relaxed">Os modelos já vêm preparados para você personalizar. Basta escolher seu personagem favorito, adicionar a foto desejada e ajustar o rosto.</p>
              <p className="mt-4 font-bold">Você pode transformar:</p>
              <CheckList items={PESSOAS} className="mt-3 grid gap-2.5 sm:grid-cols-2" />
              <p className="mt-5 font-bold">A diversão começa antes mesmo de imprimir!</p>
            </article>
            <article className="rounded-3xl bg-card p-7 text-card-foreground shadow-plan md:p-9">
              <h3 className="text-2xl font-bold">🖨️ Figurinhas Prontas para Imprimir</h3>
              <p className="mt-3 leading-relaxed">Depois de personalizar, é só baixar e imprimir!</p>
              <p className="mt-4 font-bold">Você pode utilizar suas criações para:</p>
              <CheckList items={USOS} />
              <p className="mt-5 font-bold text-primary">Tudo do seu jeito, com as pessoas que você escolher!</p>
            </article>
            <article className="rounded-3xl bg-gradient-red p-7 text-primary-foreground shadow-plan md:p-9">
              <h3 className="text-2xl font-bold">🧡 Uma surpresa que faz todo mundo rir!</h3>
              <div className="mt-4 space-y-2 text-lg leading-relaxed">
                <p>Imagine a reação da sua família quando descobrir que cada pessoa virou um personagem de Natal!</p>
                <p>O pai virou um Papai Noel...</p>
                <p>A avó apareceu como Mamãe Noel...</p>
                <p>As crianças viraram duendinhos...</p>
                <p>E até aquele amigo mais sério virou um boneco de neve!</p>
              </div>
              <p className="mt-5 font-bold">É o tipo de brincadeira simples que rende risadas, fotos e histórias para contar depois!</p>
            </article>
          </div>
        </Container>
        <CtaRow />
      </section>

      <section className="py-20">
        <Container>
          <Title>NÃO TEM <Hl>SEGREDO!</Hl></Title>
          <p className="mt-3 text-center text-lg font-semibold text-muted-foreground">Tudo em 3 PASSOS SIMPLES:</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PASSOS.map(([t, d], i) => (
              <div key={t} className="rounded-3xl border bg-card p-7 text-center shadow-card">
                <span className="mx-auto grid size-14 place-items-center rounded-full bg-gradient-red font-display text-2xl font-bold text-primary-foreground shadow-card">{i + 1}</span>
                <h3 className="mt-5 text-lg font-bold">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-lg">Sem programas complicados. Sem precisar criar nada do zero. Sem gastar horas editando.</p>
          <p className="mt-2 text-center font-bold text-primary">Você pode fazer pelo celular ou computador!</p>
          <div className="mt-8 flex justify-center"><Cta href="#oferta">🎄 Quero criar minhas figurinhas</Cta></div>
        </Container>
      </section>

      <section className="bg-card py-20">
        <Container>
          <Title>VEJA O QUE DÁ PARA CRIAR</Title>
          <p className="mt-3 text-center text-muted-foreground">Exemplos de como as figurinhas podem ficar depois de personalizadas e impressas.</p>
          <div className="no-scrollbar -mx-5 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
            {([
              [ex1, "Exemplo de decoração de parede com personagens de Natal personalizados"],
              [ex2, "Exemplo de personagens de Natal personalizados impressos e recortados"],
              [ex3, "Exemplo de personagens de Natal personalizados colados em uma porta de vidro"],
            ] as const).map(([src, alt]) => (
              <img key={src} src={src} alt={alt} width={800} height={1008} loading="lazy"
                className="aspect-[4/5] w-[78%] shrink-0 snap-center rounded-3xl object-cover shadow-plan md:w-full" />
            ))}
          </div>
        </Container>
        <CtaRow />
      </section>

      <Offer clock={clock} />

      <section className="py-20">
        <Container className="max-w-2xl">
          <div className="rounded-3xl border bg-card p-8 text-center shadow-card md:p-10">
            <span className="mx-auto grid size-20 place-items-center rounded-full bg-blush text-primary"><ShieldCheck className="size-11" /></span>
            <Title className="mt-5">GARANTIA DE 7 DIAS</Title>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">Sua compra é protegida por uma garantia de 7 dias. Se você adquirir o kit e não ficar satisfeita, poderá solicitar o reembolso dentro do prazo.</p>
          </div>
        </Container>
        <CtaRow />
      </section>

      <section className="bg-card py-20">
        <Container className="grid items-center gap-10 md:grid-cols-2">
          <img src={criadora} alt="Maria Fernanda mostrando personagens de Natal personalizados com fotos de família" width={912} height={912} loading="lazy" className="w-full rounded-3xl shadow-plan" />
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-widest text-primary">Conheça a criadora</p>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">A pessoa por trás da diversão!</h2>
            <p className="mt-3 font-display text-2xl font-bold text-primary">Maria Fernanda</p>
            <div className="mt-5 space-y-3 leading-relaxed">
              <p>O Natal sempre foi uma oportunidade de criar momentos divertidos com as pessoas que a gente ama. Mas convenhamos... Nem todo mundo tem tempo, dinheiro ou criatividade para preparar algo diferente todos os anos.</p>
              <p>E foi pensando nisso que nasceu a ideia de criar um kit onde qualquer pessoa pudesse transformar amigos, filhos e familiares em personagens engraçados de Natal.</p>
              <p className="font-bold">Sem precisar entender de edição.</p>
              <p className="font-bold">Sem criar personagens do zero.</p>
              <p className="font-bold">E sem gastar uma fortuna com personalizações.</p>
              <p>Porque, no final, o mais especial não é ter a decoração mais cara... <strong className="text-primary">É ver todo mundo rindo, se divertindo e criando memórias juntos!</strong></p>
            </div>
          </div>
        </Container>
        <CtaRow />
      </section>

      <section className="py-20">
        <Container className="max-w-3xl">
          <Title>DÚVIDAS FREQUENTES</Title>
          <Accordion type="single" collapsible className="mt-10 space-y-3">
            {FAQ.map(([q, a], i) => (
              <AccordionItem key={q} value={`q${i}`} className="rounded-2xl border bg-card px-5 shadow-card">
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">{i + 1}. {q}</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
        <CtaRow />
      </section>

      <section className="relative overflow-hidden bg-gradient-ink py-20 text-ink-foreground">
        <Container className="max-w-3xl text-center">
          <Title className="text-ink-foreground">TRANSFORME SEU NATAL <Hl>AGORA!</Hl></Title>
          <div className="mt-6 space-y-3 text-lg leading-relaxed text-ink-muted">
            <p>Imagine a reação de TODO MUNDO ao se ver transformado em um personagem de Natal!</p>
            <p>Seus filhos, marido, amigos, parentes e colegas de trabalho podem virar os personagens mais engraçados da festa!</p>
            <p>São +200 modelos editáveis para você escolher, personalizar e imprimir, sem precisar criar nada do zero!</p>
            <p className="font-semibold text-ink-foreground">Comece a preparar uma surpresa diferente para este Natal.</p>
          </div>
          <div className="mt-8 flex justify-center"><Cta href="#oferta">Quero meu kit de Natal</Cta></div>
          <p className="mt-5 text-sm text-ink-muted">Acesso imediato • Personalização no Canva • Garantia de 7 dias</p>
        </Container>
      </section>

      <footer className="bg-ink py-8 text-center text-xs text-ink-muted">
        © {new Date().getFullYear()} Kit Natal Criativo. Todos os direitos reservados.{" "}
        <Link to="/privacidade" className="underline">Política de privacidade</Link>
      </footer>
    </div>
  );
}
