const USER_ID_KEY = 'chat_user_id'
const USER_DATA_KEY = 'chat_user_data'

export const getUserId = (): string => {
  let userId = localStorage.getItem(USER_ID_KEY)
  if (!userId) {
    userId = crypto.randomUUID()
    localStorage.setItem(USER_ID_KEY, userId)
  }
  return userId
}

export const saveUserData = (name: string, cpfOrPhone: string) => {
  localStorage.setItem(USER_DATA_KEY, JSON.stringify({ name, cpfOrPhone }))
}

export const getUserData = () => {
  const data = localStorage.getItem(USER_DATA_KEY)
  return data ? JSON.parse(data) : null
}
