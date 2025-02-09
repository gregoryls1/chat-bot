export const botResponses = [
  'Olá! Como posso te ajudar?',
  'Me fale mais sobre o que você precisa.',
  'Interessante! Pode explicar um pouco mais?',
  'Desculpe, não entendi. Poderia reformular?',
  'Ótima pergunta! Vou tentar responder da melhor forma.',
  'Estou aqui para te ajudar! O que precisa saber?',
  'Você já verificou nosso site para mais informações?',
  'Isso é algo importante! Podemos falar mais sobre isso.',
  'Legal! Gosto de conversar sobre esse assunto.',
  'Pode repetir? Acho que não entendi direito.',
]

export const getRandomBotResponse = (): string => {
  return botResponses[Math.floor(Math.random() * botResponses.length)]
}
