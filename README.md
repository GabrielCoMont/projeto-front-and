# Projeto de Busca E-commerce - Interface Submarino

## 💡 Sobre o Projeto

Este projeto foi desenvolvido como parte de um teste técnico, implementando uma interface de busca de produtos inspirada no Submarino. O sistema oferece uma experiência de busca em tempo real, permitindo aos usuários encontrar produtos de forma rápida e eficiente.

## 🎯 Funcionalidades Principais

- **Busca em Tempo Real**
  - Resultados aparecem conforme o usuário digita
  - Integração com API de autocomplete
  - Exibição dos 3 primeiros produtos mais relevantes

- **Visualização de Produtos**
  - Thumbnails dos produtos
  - Preços e condições de pagamento
  - Informações detalhadas do produto
  - Redirecionamento para página do produto

## 🛠️ Tecnologias Utilizadas

- React + TypeScript
- Vite
- Styled Components
- Axios
- React Query

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

## 📋 Decisões Técnicas

### Arquitetura
- Componentização para melhor manutenção e reuso
- Hooks personalizados para lógica de negócios
- Context API para gerenciamento de estado global

### APIs Utilizadas
- Autocomplete: `http://tdzain.vtexcommercestable.com.br/buscaautocomplete/?productNameContains={{termo}}`
- Busca Full Text: `http://tdzain.vtexcommercestable.com.br/api/catalog_system/pub/products/search/{{termo}}?map=ft`

## 🎨 Interface e UX

Priorizei elementos que impactam diretamente na taxa de conversão:
- Preço em destaque
- Imagens de qualidade
- Informações de frete
- Avaliações dos produtos
- Disponibilidade em estoque

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

O desenvolvimento deste projeto foi uma experiência enriquecedora que permitiu aplicar conhecimentos em React, TypeScript e boas práticas de desenvolvimento. O foco principal foi criar uma interface intuitiva e eficiente, similar à do Submarino, mantendo o código organizado e escalável.

## 📚 Documentação Adicional

Para mais informações sobre as APIs utilizadas, consulte:
- [Documentação VTEX](https://developers.vtex.com/vtex-rest-api/reference/autocomplete)
