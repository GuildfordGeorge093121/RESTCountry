import React, {createContext, ReactNode, useState} from 'react'
import { ApiType } from './APIType';

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
  const [night, setNight] = useState(localStorage.hasOwnProperty('countryMode')? localStorage.countryMode==='true'? true:false :false)
  
  return (
    <Context.Provider value={{data, setData,night,setNight}}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider