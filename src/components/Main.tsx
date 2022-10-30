import React,{lazy, Suspense} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary'
import NotFound from './NotFound'

const Home= lazy(()=> import('./Home')) 
const Country= lazy(()=> import('./Country')) 
const Main = () => {

  return (
    <main className='main'>
      <Router>
            {/* <ErrorBoundary> */}
            <Suspense>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/country/:name" element={<Country />} />
                <Route path="*" element={<NotFound />} />
              </Routes>

            </Suspense>
            {/* </ErrorBoundary> */}
        

      </Router>
    </main>
  )
}

export default Main