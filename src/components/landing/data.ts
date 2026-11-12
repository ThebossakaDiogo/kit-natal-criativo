export const PLANS = {
  basico: { name: "Kit Básico", fromCents: 2700, priceCents: 1000 },
  completo: { name: "Kit Completo", fromCents: 7900, priceCents: 2700 },
} as const;
export const CHECKOUT = {
  basico: "https://pay.lowify.com.br/go.php?offer=260755d4",
  completo: "https://pay.lowify.com.br/checkout.php?product_id=O1IyNI",
};
export const UPSELL = { priceCents: 1700, checkoutUrl: "https://pay.lowify.com.br/go.php?offer=a09db1eb" };

export const brl = (c: number) => `R$${(c / 100).toFixed(2).replace(".", ",")}`;
export const discountPct = (k: keyof typeof PLANS) =>
  Math.round((1 - PLANS[k].priceCents / PLANS[k].fromCents) * 100);
export const savings = (k: keyof typeof PLANS) => PLANS[k].fromCents - PLANS[k].priceCents;
export const formatClock = (ms: number) => {
  const t = Math.max(0, Math.ceil(ms / 1000));
  return `${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
};

export const BONUS = [
  "100 Artes de Impressão para Decoração de Natal",
  "10 Brincadeiras para Animar a Noite",
  "Guia Anti-Caos",
  "Bingo de Natal",
  "Playlist de Música",
];
export const DORES = [
  "Todo ano, o Natal acaba sendo sempre a mesma coisa.",
  "Você quer fazer algo diferente, mas não tem ideias criativas.",
  "As crianças adoram Natal, mas nem sempre encontram algo divertido para fazer.",
  "Você gostaria de surpreender sua família ou seus amigos com algo personalizado.",
  "As decorações prontas são sempre iguais e não têm a cara de ninguém.",
  "E quando encontra alguma ideia legal na internet, parece difícil, cara ou trabalhosa.",
];
export const PIOR = [
  "Não sabe criar essas figurinhas do zero.",
  "Não tem habilidade com programas de edição.",
  "Não quer perder horas procurando imagens.",
  "E não tem tempo para preparar algo complicado.",
];
export const PROBLEMAS = [
  "Natal sempre igual.", "Falta de criatividade.", "Decorações sem personalidade.",
  "Crianças sem atividades diferentes.", "Falta de tempo.", "Dificuldade com edição.",
  "Lembrancinhas caras.", "Falta de ideias para surpreender.",
];
export const MOMENTOS: [string, string][] = [
  ["🎄", "Risadas"], ["🎅", "Surpresas divertidas"], ["🧑‍🎄", "Criatividade"],
  ["🧡", "Momentos especiais com os filhos"], ["⛄", "Lembranças personalizadas"],
  ["📸", "Fotos inesquecíveis"], ["🍬", "Diversão com amigos e familiares"],
  ["✨", "Recordações que todo mundo vai querer guardar!"],
];
export const PERSONAGENS = [
  "Duendinhos fofos e engraçados.", "Papais e Mamães Noéis.", "Renas de nariz brilhante.",
  "Bonecos de neve.", "Anjinhos e estrelas.", "Pinheirinhos decorados.", "Quebra-nozes.",
  "Presentes e meias de Natal.", "E muitos outros personagens temáticos!",
];
export const PESSOAS = [
  "Seus filhos.", "Seu marido ou esposa.", "Seus pais e avós.", "Seus amigos.",
  "Seus colegas de trabalho.", "Seus alunos.",
  "E até aquela pessoa que nunca entra no clima das brincadeiras!",
];
export const USOS = [
  "Decorar a ceia e a festa de Natal.", "Criar lembrancinhas e cartões de Natal personalizados.",
  "Montar painéis de Natal com a família.", "Fazer surpresas para amigos.",
  "Enfeitar mesas e ambientes.", "Criar atividades divertidas na escola.",
  "Personalizar espaços no escritório.",
];
export const PASSOS: [string, string][] = [
  ["PASSO 1 — ESCOLHA", "Acesse o kit e escolha entre os +200 modelos de Natal."],
  ["PASSO 2 — PERSONALIZE", "Abra no Canva e coloque o rosto de quem você quiser no personagem escolhido."],
  ["PASSO 3 — IMPRIMA E DIVIRTA-SE", "Baixe sua criação, imprima e surpreenda todo mundo!"],
];
export const FAQ: [string, string][] = [
  ["Recebo alguma coisa na minha casa?", "Não! O Kit Natal Criativo é 100% digital. Você recebe acesso aos modelos e pode personalizar, baixar e imprimir onde preferir."],
  ["Preciso saber mexer no Canva?", "Não! Os modelos são preparados para facilitar a personalização. Basta escolher o personagem, adicionar a foto e ajustar o rosto no local indicado."],
  ["Posso colocar o rosto de qualquer pessoa?", "Sim! Você pode personalizar os personagens com fotos dos seus filhos, familiares, amigos, alunos ou colegas de trabalho. Recomendamos utilizar fotos com autorização das pessoas, especialmente quando forem compartilhadas publicamente."],
  ["Preciso pagar o Canva Pro?", "Os modelos são destinados à edição no Canva. Se todos os elementos utilizados forem gratuitos, você poderá personalizar sem o Canva Pro."],
  ["Posso imprimir as figurinhas?", "Sim! Depois de personalizar, você pode baixar suas criações e imprimir em casa ou em uma gráfica."],
  ["Posso utilizar mais de uma foto?", "Sim! Você pode personalizar diferentes personagens com diferentes rostos, criando uma coleção com sua família ou grupo de amigos."],
  ["Serve para crianças e adultos?", "Com certeza! A ideia é justamente permitir que pessoas de diferentes idades virem personagens divertidos de Natal."],
  ["Quando vou receber meu kit?", "O acesso é digital e liberado após a confirmação do pagamento."],
  ["E se eu não gostar?", "Você conta com uma garantia de 7 dias. Se o kit não atender às suas expectativas, poderá solicitar o reembolso dentro desse período, conforme as condições informadas na compra."],
];
