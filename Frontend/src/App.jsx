import './App.css'
import './index.css'
import {Header, Footer, Loader} from './components/customComponent/index.js'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
     <div className="w-full block dark">
          <Header />
          <main>
            <Loader />
            <div className="blur-bg-custom">
              <Outlet /> 
            </div>
          </main>
          <Footer />
      </div>
    </>
  )
}

export default App
