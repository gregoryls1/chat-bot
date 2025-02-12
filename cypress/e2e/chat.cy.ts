describe('Chat App', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should load the chat page with initial messages', () => {
    cy.contains('Olá! Qual é o seu nome?').should('be.visible')
  })

  it('should send a user message and receive a bot response', () => {
    cy.get("input[placeholder='Digite uma mensagem...']").type('Lucas')
    cy.get("[data-testid='send-button']").click() // Agora usando o data-testid

    cy.contains(`Olá, Lucas, em que posso ajudar?`).should('be.visible')
  })

  it('should maintain chat history after reload', () => {
    cy.get("input[placeholder='Digite uma mensagem...']").type('Teste')

    // Aguarda o botão estar visível antes de clicar
    cy.get("[data-testid='send-button']")
      .should('exist')
      .and('be.visible')
      .click()

    cy.wait(500) // Dá um tempo para a mensagem aparecer

    cy.reload()

    cy.contains('Teste').should('be.visible')
  })

  it('should toggle dark mode', () => {
    // Garante que o tema foi inicializado corretamente
    cy.window().then((win) => {
      win.useThemeStore.getState().initializeTheme()
    })

    // Verifica o estado inicial do tema antes de alternar
    cy.get('html')
      .invoke('attr', 'class')
      .then((initialClass) => {
        const isDark = initialClass?.includes('dark')

        // Clica no botão de toggle
        cy.get("[data-testid='theme-toggle']")
          .should('be.visible')
          .click({ force: true })

        if (isDark) {
          cy.get('html').should('not.have.class', 'dark')
        } else {
          cy.get('html').should('have.class', 'dark')
        }

        cy.wait(500)

        cy.reload()

        if (isDark) {
          cy.get('html').should('not.have.class', 'dark')
        } else {
          cy.get('html').should('have.class', 'dark')
        }
      })
  })
})
