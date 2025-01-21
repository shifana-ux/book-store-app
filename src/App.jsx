
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { AuthProvider } from './context/AuthContex'

function App() {
  

  return (
    <>
        <AuthProvider>
        <Navbar/>
        <main className='min-h-screen max-w-screen-2x1 mx-auto px-4 py-6 font-primary'>
        <Outlet/>
        </main>
        <Footer/>
      </AuthProvider>
   
    </>
  )
}

export default App
