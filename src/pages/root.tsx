

import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'

function RootLayout () {
    return (
      <>
      <Navbar />
      <Outlet />
      <Footer/>
      
      </>
    )
  }
  
  export default RootLayout