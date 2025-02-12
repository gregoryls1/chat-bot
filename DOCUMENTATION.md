# 📄 Documentação Técnica do Chat Bot

## 📌 Visão Geral

Este projeto é um chatbot desenvolvido com **React, TypeScript, Zustand e Cypress**, visando criar uma experiência fluida e interativa para os usuários. O foco principal foi garantir **simplicidade, eficiência e uma experiência moderna**, utilizando tecnologias que facilitam o desenvolvimento e a manutenção do código.

---

## ⚙️ Tecnologias Utilizadas e Justificativa

### **2️⃣ Zustand (Gerenciamento de Estado)**

📌 **Motivo da escolha:**

- Zustand é **mais leve e simples** que Redux, eliminando a necessidade de código repetitivo e excessivo necessário para configurar e gerenciar estados no Redux, como actions, action types e reducers.
- Permite um **gerenciamento de estado eficiente e escalável**, facilitando a persistência de dados como o histórico de mensagens e o tema do chat.

### **3️⃣ TailwindCSS (Estilização)**

📌 **Motivo da escolha:**

- Proporciona **desenvolvimento rápido**, eliminando a necessidade de arquivos CSS extensos.
- Mantém **consistência visual** e facilita a customização de temas **Light/Dark**.

### **4️⃣ Cypress (Testes End-to-End)**

📌 **Motivo da escolha:**

- Permite **testar toda a aplicação do ponto de vista do usuário**.
- Possui uma interface interativa para **depuração mais eficiente**.

### **5️⃣ Vitest + Testing Library (Testes Unitários)**

📌 **Motivo da escolha:**

- **Mais rápido que Jest**, funcionando de forma otimizada com Vite.
- Mantém **alta cobertura de testes** para os componentes e estados da aplicação.

---

## 🧩 Funcionalidades Técnicas Implementadas

✅ **Mensagens persistentes:** O histórico do chat é salvo no `localStorage` para manter a conversa ao recarregar a página.
✅ **Hooks customizados:** Criados para **tema (`useTheme`)** e **chat (`useChat`)**, melhorando modularidade e reutilização de código.
✅ **Bot interativo:** O bot responde de forma dinâmica, chamando o usuário pelo nome após a primeira interação.
✅ **Modo Light/Dark persistente:** Utiliza `localStorage` para armazenar a preferência de tema do usuário.
✅ **Testes automatizados:** Validação da interface e funcionalidades com **Cypress e Vitest**.
✅ **Rolagem automática:** O chat rola automaticamente para a última mensagem.
✅ **Feedback visual:** O bot exibe um indicador de **carregamento** ao processar uma resposta.

---

## 📈 Escalabilidade e Melhorias Futuras

🔹 **Melhorias na IA do bot:** Implementação de um backend para respostas mais inteligentes.
🔹 **WebSocket para comunicação em tempo real:** Melhor experiência para múltiplos usuários.
🔹 **Testes de performance:** Avaliação e otimização do desempenho com `Lighthouse`.
