# Prova Certa Residência

Crie uma página de vendas (landing page) para um infoproduto digital voltado a médicos formandos e recém-formados que estão se preparando para provas de residência médica no Brasil (ENARE, UERJ, USP).

PRODUTO: Banco de 1500+ questões comentadas de 15 provas de residência médica (ENARE, UERJ, USP), com comentários estruturados explicando o raciocínio clínico de cada questão — não apenas gabarito.

PREÇO: R$97 (exibir com ancoragem de valor, parcelamento em até 6x)

TOM: Direto, assertivo, autoridade médica. Não é "hype de infoproduto" — é seriedade de quem entende de prova e de medicina. Nada de emojis exagerados ou linguagem de "guru".

IMPORTANTE: O autor NÃO terá foto nem depoimento pessoal exposto na página. Toda credibilidade deve vir da qualidade do material, dados objetivos e prova visual do conteúdo — não de exposição de identidade/rosto.

ESTRUTURA DA PÁGINA (nesta ordem):

1. HERO

- Headline forte sobre parar de estudar resumo genérico e resolver as questões reais que caem nas provas

- Sub-headline com números concretos (1500+ questões, 15 provas, 3 instituições)

- Espaço reservado para VÍDEO (player central, thumbnail com play button, proporção 16:9, abaixo da headline, acima do primeiro CTA) — deixar comentário no código indicando onde inserir embed de vídeo (ex: Youtube/Vimeo/Wistia). O vídeo pode ser só de tela (mostrando o material) sem necessidade de aparecer rosto.

- Botão CTA principal com microanimação de hover (leve scale ou glow, sem exagero)

2. AUTORIDADE (sem foto/identidade pessoal)

- Seção de credencial baseada em fatos, não em pessoa: "Escrito por médico formado, aprovado em [inserir instituição/processo se aplicável]"

- Usar ícones/selos representando formação médica (estetoscópio, cruz médica, símbolo de diploma) em vez de foto

- Destacar números de autoridade do próprio produto: quantidade de questões, quantidade de provas cobertas, anos de estudo/curadoria envolvidos

- Pode incluir um bloco tipo "Sobre o material" explicando o processo de curadoria sem expor identidade

3. BLOCO DE DOR

- Seção com 3-4 cards ou linhas identificando dores específicas de quem estuda para residência (ansiedade, tempo perdido com material desatualizado, insegurança sobre o que realmente cai)

- Animação leve de fade-in/scroll-reveal em cada item conforme o usuário rola a página

4. VIRADA / MÉTODO

- Seção explicando por que resolver questão comentada é mais eficaz que decorar resumo

- Comparativo visual lado a lado (resumo vs questão comentada) com ícones ou ilustração simples

5. PROVA VISUAL DO CONTEÚDO (seção de maior peso agora, já que substitui a prova por pessoa)

- Seção de destaque mostrando mockup/print de uma questão comentada real (placeholder de imagem em moldura de "tela" ou "caderno digital")

- Se possível, mostrar 2-3 exemplos diferentes de questões/comentários em carrossel ou grid, para reforçar volume e qualidade

- Destaque visual maior que as outras seções (fundo diferenciado, zoom sutil na imagem ao passar o mouse)

6. O QUE VOCÊ RECEBE

- Lista objetiva em grid ou checklist: 1500+ questões, cobertura ENARE/UERJ/USP, comentários estruturados, formato de acesso, atualizações

- Ícones para cada item, com animação de entrada sequencial (stagger)

7. BÔNUS

- Destaque de bônus inclusos (mapas mentais, outros materiais) com visual de "empilhamento de valor" (cards sobrepostos ou lista com preço riscado ao lado de cada bônus)

8. PROVA SOCIAL SEM DEPOIMENTO PESSOAL

- Em vez de depoimentos de "alunos", estruturar como seção de dados/projeção: número de questões por prova, cobertura por instituição, ano das provas incluídas

- Pode incluir elementos como "material usado para estudar as principais provas de 2024/2025" ou selo de "atualizado" 

- Se no futuro houver depoimentos reais de compradores (não do autor), deixar comentário no código indicando onde inserir cards de depoimento com nome/iniciais apenas (sem exigir foto)

9. OFERTA E PREÇO

- Bloco de preço com ancoragem (valor "de" riscado, valor "por" em destaque)

- Parcelamento visível

- Botão CTA grande, cor de destaque, com animação de pulso sutil

- Elemento de escassez/urgência configurável (ex: preço de lançamento por tempo limitado)

10. GARANTIA

- Selo de garantia (ex: 7 dias, conforme Kiwify) com ícone de escudo/selo

11. FAQ

- Acordeão expansível com 5-6 perguntas frequentes e respostas, animação suave de abrir/fechar

- Incluir pelo menos uma pergunta do tipo "quem preparou esse material?" respondida com foco em credencial/processo, não identidade pessoal

12. CTA FINAL

- Repetição da oferta principal com botão de compra

- Fechamento reforçando urgência/benefício final, sem apelo pessoal ("eu recomendo") — usar linguagem de fato ("este material reúne...")

REQUISITOS TÉCNICOS E DE DESIGN:

- Mobile-first, totalmente responsivo (a maioria do tráfego vem de Meta Ads mobile)

- Paleta de cores séria e profissional (tons de confiança médica: azul escuro, branco, acento de cor quente para CTAs)

- Tipografia limpa e legível, hierarquia visual clara entre headline, subheadline e corpo

- Animações discretas de scroll-reveal (fade-in + slide-up leve) em cada seção, sem exagero de movimento

- Botões de CTA com estado de hover claramente visível

- Deixar comentários no código em cada seção indicando onde inserir: (a) embed do vídeo, (b) link de checkout do Kiwify, (c) pixel do Meta Ads e script do UTMify no head da página

- Performance otimizada para carregamento rápido (tráfego pago não pode esbarrar em página lenta)

- Sem chatbot, sem quiz, sem etapas de qualificação — página como oferta direta, do topo até o CTA de compra

- Nenhum elemento de imagem de rosto/pessoa deve ser sugerido ou usado como placeholder em nenhuma seção

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://project-18e40b.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/75fa89bf-44e4-4d3a-8247-4dfb5ed21e8d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
