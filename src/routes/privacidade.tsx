import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de privacidade — Kit Natal Criativo" },
      { name: "description", content: "Como o Kit Natal Criativo trata seus dados." },
      { property: "og:title", content: "Política de privacidade — Kit Natal Criativo" },
      { property: "og:description", content: "Como o Kit Natal Criativo trata seus dados." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Privacidade,
});

function Privacidade() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-16 leading-relaxed">
      <h1 className="font-display text-3xl font-bold">Política de privacidade</h1>
      <p className="mt-6">Os dados informados na compra são usados apenas para processar o pedido e liberar o acesso ao kit. Não vendemos nem compartilhamos suas informações com terceiros além da plataforma de pagamento.</p>
      <p className="mt-4">As fotos que você usa para personalizar os modelos ficam somente na sua conta do Canva.</p>
      <Link to="/" className="mt-8 inline-block font-semibold text-primary underline">Voltar para a página inicial</Link>
    </main>
  );
}
