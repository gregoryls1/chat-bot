import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080', // Certifique-se de que o Vite está rodando nessa porta
    setupNodeEvents(on, config) {
      // Implementação de eventos personalizados pode ser adicionada aqui
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Garante que apenas os testes corretos sejam rodados
    supportFile: 'cypress/support/e2e.ts',
    experimentalRunAllSpecs: true,
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
  },
})
