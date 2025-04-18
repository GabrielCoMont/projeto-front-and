# Busca de Refrigerantes

## 💡 Sobre o Projeto

Este projeto implementa uma interface de busca de refrigerantes, permitindo aos usuários pesquisar e visualizar diferentes tipos de refrigerantes. O sistema oferece uma experiência de busca em tempo real com uma interface limpa e intuitiva.

## 🎯 Funcionalidades Principais

- **Busca em Tempo Real**
  - Resultados aparecem conforme o usuário digita
  - Sugestões automáticas de produtos
  - Exibição dos produtos mais relevantes

- **Visualização de Produtos**
  - Imagens reais dos refrigerantes
  - Preços atuais e anteriores
  - Informações detalhadas do produto
  - Opções de quantidade na compra
  - Cálculo de frete por CEP

## 🛠️ Tecnologias Utilizadas

- React + TypeScript
- Vite
- React Router DOM
- CSS Modules

## ⚙️ Como Executar o Projeto

1. **Clone o repositório**
```bash
git clone [url-do-repositório]
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto**
```bash
npm run dev
```

## 📋 Funcionalidades Implementadas

### Interface Principal
- Título "Busque o refrigerante"
- Barra de pesquisa responsiva
- Grid de produtos com imagens

### Produtos Disponíveis
- Coca-Cola 2L
- Pepsi 2L
- Guaraná Antarctica 2L
- Fanta Laranja 2L
- Sprite 2L

### Página do Produto
- Imagem do produto
- Nome e marca
- Preço atual e anterior
- Opções de parcelamento
- Calculadora de frete
- Seletor de quantidade
- Botão de compra

## 🎨 Interface e UX

- Design limpo e minimalista
- Cores em tons de azul para elementos interativos
- Imagens reais dos produtos
- Layout responsivo
- Feedback visual nas interações

## 📱 Responsividade

O projeto é totalmente responsivo, adaptando-se a diferentes tamanhos de tela:
- Desktop: Grid com múltiplas colunas
- Tablet: Grid adaptativo
- Mobile: Duas colunas de produtos

## 🚧 Desafios Enfrentados

1. **Performance**
   - Implementação de debounce para otimizar chamadas à API
   - Gerenciamento de cache para melhor experiência do usuário

2. **Integração com APIs**
   - Tratamento de diferentes formatos de resposta
   - Gestão de estados de loading e erro

3. **Interface Responsiva**
   - Adaptação para diferentes tamanhos de tela
   - Manutenção da usabilidade em dispositivos móveis

## 📈 Melhorias Futuras

- [ ] Implementação de testes automatizados
- [ ] Filtros avançados de busca
- [ ] Sistema de favoritos
- [ ] Histórico de buscas
- [ ] Otimização de SEO

## 🌟 Considerações Finais

O desenvolvimento deste projeto foi uma experiência enriquecedora que permitiu aplicar conhecimentos em React, TypeScript e boas práticas de desenvolvimento. O foco principal foi criar uma interface intuitiva e eficiente, mantendo o código organizado e escalável.

## 📚 Documentação Adicional

Para mais informações sobre as APIs utilizadas, consulte:
- [Documentação VTEX](https://developers.vtex.com/vtex-rest-api/reference/autocomplete)
