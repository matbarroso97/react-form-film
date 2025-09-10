# 🎬 Registrador de Filmes

Uma aplicação web moderna para gerenciar sua coleção de filmes, construída com **Next.js 15** e **React 18**. Permite adicionar, visualizar, buscar e excluir filmes com uma interface intuitiva e responsiva.

## ✨ Funcionalidades

- ➕ **Adicionar filmes** com título, sinopse e ano
- 🔍 **Buscar filmes** por título, sinopse ou ano
- 👁️ **Visualizar detalhes** de cada filme
- 🗑️ **Excluir filmes** da coleção
- 📱 **Design responsivo** para desktop e mobile
- ✅ **Validação de formulário** em tempo real
- 🎨 **Interface moderna** com Tailwind CSS

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **React 18** - Biblioteca para interfaces de usuário
- **Tailwind CSS** - Framework CSS utilitário
- **JavaScript ES6+** - Linguagem de programação
- **Git** - Controle de versão

## 📁 Estrutura do Projeto

```
my-app/
├── src/
│   └── app/
│       ├── components/          # Componentes reutilizáveis
│       │   ├── Header.js       # Cabeçalho da aplicação
│       │   ├── MovieForm.js    # Formulário de adicionar filme
│       │   ├── MovieItem.js    # Item individual da lista
│       │   ├── MovieList.js    # Lista de filmes
│       │   └── SearchBar.js    # Barra de busca
│       ├── movies/
│       │   └── [id]/
│       │       └── page.js     # Página de detalhes do filme
│       ├── globals.css         # Estilos globais
│       ├── layout.js           # Layout raiz da aplicação
│       └── page.js             # Página principal
├── public/                     # Arquivos estáticos
├── package.json               # Dependências do projeto
└── README.md                  # Documentação do projeto
```



## 📖 Projeto
- Projeto: [react-form-film](https://react-form-film.vercel.app/)

### Adicionando um Filme
1. Preencha o formulário "Novo Filme"
2. **Título** (obrigatório): Nome do filme
3. **Ano** (opcional): Ano de lançamento (1888-2100)
4. **Sinopse** (opcional): Descrição do filme
5. Clique em "Adicionar Filme"

### Buscando Filmes
- Digite na barra de busca para filtrar por:
  - Título do filme
  - Sinopse
  - Ano de lançamento

### Visualizando Detalhes
- Clique em "Ver detalhes" em qualquer filme
- Visualize todas as informações do filme
- Use o botão "← Voltar" para retornar

### Excluindo Filmes
- Clique em "Excluir" no filme desejado
- A confirmação é imediata

## 🔧 Funcionalidades Técnicas

### Validação de Formulário
- **Título obrigatório**: Não permite envio sem título
- **Validação de ano**: Aceita apenas anos entre 1888 e 2100
- **Feedback visual**: Bordas vermelhas para campos inválidos
- **Validação em tempo real**: Verifica campos conforme você digita

### Gerenciamento de Estado
- **useState**: Gerencia estado local dos filmes e busca
- **Props**: Comunicação entre componentes pai e filho
- **Event Handlers**: Manipulação de eventos de formulário e clique

### Navegação
- **Next.js App Router**: Roteamento moderno
- **Páginas dinâmicas**: `/movies/[id]` para detalhes
- **Query Parameters**: Passagem de dados via URL

### Responsividade
- **Mobile-first**: Design otimizado para dispositivos móveis
- **Tailwind CSS**: Classes utilitárias para layout responsivo
- **Flexbox**: Layout flexível e adaptável

## 🎨 Design e UX

### Paleta de Cores
- **Primária**: Indigo (azul-roxo)
- **Secundária**: Cinza para textos e bordas
- **Acentos**: Vermelho para erros, verde para sucessos

### Componentes
- **Cards**: Filmes em cards com sombra
- **Formulários**: Inputs estilizados com validação visual
- **Botões**: Hover effects e estados visuais
- **Layout**: Grid responsivo com espaçamento consistente

## 📝 Comentários no Código

O código está completamente documentado com comentários explicativos sobre:

- **Hooks do React**: useState, useEffect
- **Manipulação de eventos**: onClick, onChange, onSubmit
- **Renderização condicional**: Operadores ternários e &&
- **Props e destructuring**: Passagem de dados entre componentes
- **Validação**: Regex, validação de formulário
- **Acessibilidade**: ARIA labels e atributos
- **Estilização**: Classes Tailwind CSS


## 👨‍💻 Autor

**Matheus Barroso**
- GitHub: [@matbarroso97](https://github.com/matbarroso97)


