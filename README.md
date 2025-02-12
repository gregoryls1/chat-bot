# Chat Bot 💬

> Um chatbot interativo construído com React, TypeScript, Zustand, e testado com Cypress & Vitest.

## 🚀 Tecnologias Utilizadas

- React + Vite
- TypeScript
- Zustand (Gerenciamento de Estado)
- TailwindCSS (Estilização)
- Cypress (Testes End-to-End)
- Vitest + Testing Library (Testes Unitários)
- ESLint & Prettier (Padrões de Código)

## 📦 Instalação e Configuração

### 1️⃣ Clonar o Repositório

```sh
git clone https://github.com/seu-usuario/chat-bot.git
cd chat-bot
```

### 2️⃣ Instalar Dependências

```sh
npm install
```

### 3️⃣ Rodar o Projeto

```sh
npm run dev
```

O projeto estará disponível em `http://localhost:8080`.

## 🛠️ Comandos Disponíveis

| Comando            | Descrição                              |
| ------------------ | -------------------------------------- |
| `npm run dev`      | Inicia o servidor de desenvolvimento   |
| `npm run lint`     | Executa o ESLint para verificar erros  |
| `npm run format`   | Formata o código com Prettier          |
| `npm run test`     | Roda os testes unitários (Vitest)      |
| `npm run test:e2e` | Executa os testes End-to-End (Cypress) |

## 🎯 Funcionalidades

✅ Envio de mensagens e respostas automáticas do bot  
✅ O bot pergunta o nome do usuário e o chama pelo nome  
✅ Persistência do histórico de mensagens no LocalStorage  
✅ Alternância entre tema **Light/Dark** com persistência  
✅ Scroll automático para novas mensagens  
✅ Feedback visual enquanto o bot processa a resposta  
✅ Testes unitários e end-to-end

## 🧪 Executando os Testes

### **Testes Unitários**

```sh
npm run test
```

### **Testes End-to-End (Cypress)**

```sh
npm run test:e2e
```

## 📜 Estrutura do Projeto

```
📂 src/
 ├── 📂 components/        # Componentes reutilizáveis do chat
 ├── 📂 pages/             # Página principal do chat
  ├── 📂 store/             # Estado global (Zustand)
 ├── 📂 hooks/             # Hooks customizados
 ├── 📂 tests/             # Com setup
 ├── 📂 types/             # Tipagens TypeScript
 ├── 📂 utils/             # Funções auxiliares
 ├── main.tsx             # Arquivo principal da aplicação
 ├── App.tsx              # Estrutura base do chat
```

Documentação Técnica
Para mais detalhes sobre as decisões técnicas e o racional por trás das escolhas feitas no projeto, consulte a documentação completa:

📖[DOCUMENTATION.md](DOCUMENTATION.md)
