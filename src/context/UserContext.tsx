import { createContext, ReactNode, useState } from 'react'

type UserContextType = {
  nutrition: string
  setNutrition: (newState: string) => void
}

const initialValue: UserContextType = {
  nutrition: 'all',
  setNutrition: () => {},
}

export const UserContext = createContext<UserContextType>(initialValue)

type UserContextProps = {
  children: ReactNode
}

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [nutrition, setNutrition] = useState(initialValue.nutrition)

  return (
    <UserContext.Provider value={{ nutrition, setNutrition }}>
      {children}
    </UserContext.Provider>
  )
}
