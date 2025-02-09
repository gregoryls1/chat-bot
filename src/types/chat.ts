export type Message = {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: number
}

export const sampleMessages: Message[] = [
  { id: '1', text: 'Olá!', sender: 'user', timestamp: Date.now() },
  {
    id: '2',
    text: 'Oi! Como posso te ajudar?',
    sender: 'bot',
    timestamp: Date.now() + 1000,
  },
  {
    id: '3',
    text: 'Quais serviços vocês oferecem?',
    sender: 'user',
    timestamp: Date.now() + 2000,
  },
  {
    id: '4',
    text: 'Podemos fornecer informações sobre nossos produtos e serviços.',
    sender: 'bot',
    timestamp: Date.now() + 3000,
  },
]
