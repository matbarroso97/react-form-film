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

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Passos para executar

1. **Clone o repositório**
   ```bash
   git clone https://github.com/matbarroso97/react-form-film.git
   cd react-form-film
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o projeto**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:3000
   ```

## 📖 Como Usar

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

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente (se necessário)
3. Deploy automático a cada push

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`
3. Deploy automático via GitHub

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Matheus Barroso**
- GitHub: [@matbarroso97](https://github.com/matbarroso97)
- Projeto: [react-form-film](https://github.com/matbarroso97/react-form-film)

## 🙏 Agradecimentos

- Next.js team pela excelente documentação
- Tailwind CSS pela framework de estilos
- React team pela biblioteca incrível
- Comunidade open source por todas as contribuições

---

⭐ **Se este projeto te ajudou, considere dar uma estrela!** ⭐