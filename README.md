# Auth System

Projeto acadêmico de autenticação construído com React, TypeScript e CSS puro.

A aplicação possui duas telas principais:

- Login
- Cadastro

O foco do projeto é estudar organização de componentes, validações básicas, estados de interface e uma experiência visual mais próxima de produtos SaaS modernos.

## Funcionalidades

- Tela de login com campo de e-mail ou usuário
- Estado de loading no botão de entrada
- Toggle de visibilidade da senha
- Checkbox para lembrar de mim
- Link de recuperação de senha
- Acesso visual para cadastro
- Tela de cadastro com validações de formulário
- Mensagens de erro amigáveis
- Toggle de visibilidade para senha e confirmação de senha
- Aceite de termos e política de privacidade
- Social login com botões visuais secundários
- Layout responsivo para desktop, tablet e celular

## Tecnologias

- React 19
- TypeScript
- Vite
- CSS puro

## Estrutura

```text
src
├── components
├── models
│   └── User.ts
├── pages
│   ├── LoginPage.tsx
│   └── RegisterPage.tsx
├── routes
├── services
│   └── AuthService.ts
└── styles
    ├── LoginPage.css
    └── RegisterPage.css
```

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Rode o ambiente de desenvolvimento:

```bash
npm run dev
```

3. Gere a build de produção:

```bash
npm run build
```

4. Se quiser visualizar a build localmente:

```bash
npm run preview
```

## Scripts disponíveis

- `npm run dev` - inicia o servidor de desenvolvimento
- `npm run build` - compila o projeto para produção
- `npm run lint` - executa o ESLint
- `npm run preview` - pré-visualiza a build gerada

## Observações

- A navegação entre login e cadastro está sendo controlada dentro da própria aplicação.
- O comportamento de autenticação ainda é demonstrativo, sem integração com backend.
- O projeto foi estruturado para ser fácil de estudar e expandir em aulas ou atividades acadêmicas.
