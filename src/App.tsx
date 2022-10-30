import React, { useEffect, useContext, useState} from 'react';
import { ApiType } from './components/APIType';
import { Context } from './components/ContextProvider';
import Header from './components/Header';
import Main from './components/Main';
import FetchError from './components/FetchError';

function App() {
  const {night, setData} = useContext(Context)
  const [hasError, setHasError]= useState(false)
  useEffect(()=>{
    fetch("https://restcountries.com/v2/all")
    .then((response)=>{
      if(!response.ok){
        throw new Error()
      }
      return response.json()
    })
    .then((response:ApiType[])=>{
      setData(response)
    })
    .catch((e)=>{
      setHasError(true)
    })
  },[])

  useEffect(()=>{
    night? document.querySelector("body")!.classList.add('dark'): 
    document.querySelector("body")!.classList.remove('dark') 
  },[night])
  return (
    <div className={night? 'dark': ""}>
      <div className='app'>
        <Header />
        {
          !hasError? 
          <Main />:
          <FetchError />
        }
      </div>
    </div>
  );
}

export default App;
