import { createContext, ReactNode, useState } from 'react'
import Fruit, { Nutrition } from '../models/Fruit'

type UserContextType = {
  nutrition: any
  setNutrition: (newState: any) => void
}

const initialValue: UserContextType = {
  nutrition: '',
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
