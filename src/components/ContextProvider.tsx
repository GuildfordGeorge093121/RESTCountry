import React, {createContext, ReactNode, useState} from 'react'
import { ApiType } from './APIType';
import Footer from './Footer';
import Home from './Home';
type StateType={
  data: ApiType[];
  setData: React.Dispatch<React.SetStateAction<ApiType[]>>;
  night: boolean;
  setNight: React.Dispatch<React.SetStateAction<boolean>>
}

type ContextProviderType={
  children: ReactNode
}
export const Context= createContext({} as StateType)
const ContextProvider = ({children}:ContextProviderType) => {
  const [data, setData] = useState([] as ApiType[])
  const [night, setNight] = useState(false)
  return (
    <Context.Provider value={{data, setData,night,setNight}}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider