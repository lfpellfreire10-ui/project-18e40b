# Ajuste de preço e bônus de mapa mental

## Objetivo
Atualizar a landing page para R$69,90 e reintroduzir um bônus de mapa mental disponível até o fim do mês na área de membros, posicionado para reforçar a oferta de lançamento.

## Posicionamento recomendado
- **Preço R$69,90**: ponto médio entre os valores anteriores (R$59,90 e R$79,90). Mantém a percepção de valor do produto (1.500+ questões comentadas) e fica abaixo do teto psicológico de R$100.
- **Bônus de mapa mental**: bom gatilho de escassez temporal. Entrega na área de membros é low-cost e agrega valor percebido. Deve ser destacado junto ao preço, onde a decisão de compra acontece.
- **Onde colocar**:
  1. **Seção Oferta (principal)**: listar o bônus como item de valor dentro da caixa de preço, com o prazo "até o fim do mês".
  2. **Hero CTA**: linha curta abaixo do botão, reforçando que o bônus é por tempo limitado.
  3. **CTA final**: repetir o bônus para reforçar antes da decisão final.

## Alterações

### 1. Preço
- Substituir todo "R$79,90" por "R$69,90".
- Atualizar parcelamento de "6x de R$13,32" para "6x de R$11,65".
- Ajustar ancoragem na caixa de oferta: banco R$297 e valor somado (banco + bônus) com novo valor de referência.

### 2. Seção Oferta (`src/components/landing/SectionsBottom.tsx`)
- Reintroduzir o bônus como item da lista de itens incluídos, por exemplo:
  - "Banco com 1.500+ questões comentadas" → riscado R$297.
  - "Mapa mental de grandes áreas (até fim do mês na área de membros)" → riscado com valor de referência (ex: R$47) ou como "grátis".
- Atualizar "Valor somado" para refletir banco + mapa mental.
- Manter o selo "Oferta de lançamento" no topo.

### 3. Hero CTA (`src/components/landing/SectionsTop.tsx`)
- Adicionar linha curta abaixo do botão principal: "Bônus de mapa mental até o fim do mês na área de membros".
- Atualizar texto do botão para refletir R$69,90.

### 4. CTA final (`src/components/landing/SectionsBottom.tsx`)
- Atualizar headline/p para incluir o bônus.
- Atualizar botão para R$69,90.
- Atualizar sublinha de parcelamento.

### 5. SEO (`src/routes/index.tsx`)
- Atualizar `DESCRIPTION` para refletir R$69,90.
- Opcionalmente mencionar o bônus na description se couber sem exagerar.

### 6. FAQ (opcional)
- Adicionar/responder item sobre "Tem algum bônus?" se achar relevante, ou aproveitar a resposta existente de "Como recebo o acesso?" para mencionar a área de membros.

## Validação
- Build deve passar sem erros.
- Nenhuma menção a R$79,90 ou R$13,32 deve restar nos textos.
- Bônus deve aparecer na Oferta, Hero CTA e CTA final.
